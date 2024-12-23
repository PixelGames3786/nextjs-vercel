import { useState, useEffect, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { Post } from '../../../firebase/get-posts';
import { Timestamp } from 'firebase/firestore';
import Comment from './Comment';

const CommentStream = ({ posts, outlineColor }: { posts: Post[], outlineColor: string }) => {
  const [displayComments, setDisplayComments] = useState<Post[]>([]);

  //各コメントの縦位置
  const [positions, setPositions] = useState<Record<string, number>>({});
  const [usedPositions,setUsedPositions]=useState<number[]>([]); //使用済みのコメントの縦位置 この位置には生成できない
  const minDistance = 5; // 重ならないようにする最小距離（％単位）

  // ランダムな位置を生成
  const getRandomTop = ():number => Math.floor(Math.random() * 100); // 縦位置をランダムにする

  const handleFullyVisible = (posi: number) => {
    setUsedPositions((prev) => prev.filter((position) => position !== posi));
  };

  //流れるコメントのスピードを画面サイズによって一定になるよう調整 X1920で10秒が基準
  useEffect(() => {
    const updateAnimationDuration = () => {
      const baseWidth = 1920; // 基準幅
      const baseDuration = 10; // 基準時間 (秒)
      const screenWidth = window.innerWidth;

      // アニメーション時間を計算
      const duration = (screenWidth / baseWidth) * baseDuration;

      // CSS変数に設定
      document.documentElement.style.setProperty("--slide-duration", `${duration}s`);
    };

    // 初回設定
    updateAnimationDuration();

    // 画面サイズが変わったときに再計算
    window.addEventListener("resize", updateAnimationDuration);

    return () => {
      window.removeEventListener("resize", updateAnimationDuration);
    };
  }, []);

  // 各コメントのランダムな縦位置を初期化 ポストに変更があれば実行
  useEffect(() => {
    const newPositions: Record<string, number> = { ...positions };;
    const newUsedPositions = [...usedPositions];

    displayComments.forEach((post) => {
      console.log(post.id);

      if (!newPositions[post.id]) {
        let position: number=0;
        let loopCount: number=0;
        let isValid: boolean=true;
        do {
          loopCount++;
          position = getRandomTop();

          console.log("posi"+position);

          if(newUsedPositions.length>0){
            isValid = newUsedPositions.every(
              (usedPosi) => Math.abs(usedPosi - position) > minDistance
            );
          }

          if(loopCount>10) //10回やってPositionが見つからないならもうそこで確定して次のポストへ
          {
            break; 
          }
        } while (!isValid);

        newPositions[post.id] =position;
        newUsedPositions.push(position);
      }
    });

    setUsedPositions(newUsedPositions)
    setPositions(newPositions);
  }, [displayComments]);

  //投稿が時間差で流れるように
  useEffect(() => {
    const delayInterval = 500; // 各コメントの遅延（ミリ秒）

  posts.forEach((post, index) => {
    // 既に表示済みかどうかを確認
    const alreadyVisible = displayComments.some((visiblePost) => visiblePost.id === post.id);
    if (!alreadyVisible) {
      // インデックスを使って遅延を計算
      const delay = index * delayInterval;

      // 遅延してコメントを表示
      setTimeout(() => {
        setDisplayComments((prev) => [...prev, post]);
      }, delay);
    }
  });
  }, [posts]); // visiblePosts を依存関係に追加

  return (
    <div className="absolute w-full h-screen overflow-hidden">

      {displayComments.map((comment) => (
        <Comment posi={positions[comment.id]} outlineColor={outlineColor} comment={comment} onFullyVisible={handleFullyVisible} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentStream;