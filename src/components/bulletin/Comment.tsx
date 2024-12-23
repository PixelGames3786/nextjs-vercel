import { useState, useEffect, useRef, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { Post } from '../../../firebase/get-posts';
import { Timestamp } from 'firebase/firestore';

const Comment = ({ posi, outlineColor, comment, onFullyVisible }: { posi: number, outlineColor: string, comment: Post, onFullyVisible: (id: number) => void }) => {
  //各コメントの縦位置
  const [isPaused, setIsPaused] = useState(false);
  const [isLeftSlide, setIsLeftSlide] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // 状態を記録

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isFullyVisible =
          rect.left >= 0 && // 左端が画面内
          rect.right <= window.innerWidth; // 右端が画面内

        if (isFullyVisible && !isVisible) {
          setIsVisible(true); // 状態を更新
          onFullyVisible(posi); // 完全に表示されたらコールバック
        }else{
          requestAnimationFrame(checkVisibility); // 次フレームで再チェック
        }
      };
    };
    checkVisibility();
  }, [ref]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 2); // 0か1を生成

    if (random == 1) {
      setIsLeftSlide(false);
    }
  }, []);

  return (
    <div
      key={comment.id}
      ref={ref}
      className={`absolute whitespace-nowrap text-lg hover:border rounded px-1 ${isLeftSlide ? "animate-slide-left" : "animate-slide-right"}`}
      style={{
        color: `rgb(${comment.colorR} ${comment.colorG} ${comment.colorB})`,
        animationPlayState: isPaused ? 'paused' : 'running',
        top: posi + "%",
        fontSize: `${comment.size}px`,
        fontWeight: comment.isBold ? "bold" : "normal",
        textShadow: comment.isOutline ? `0.03em 0.03em 0 ${outlineColor},-0.03em 0.03em 0 ${outlineColor},0.03em -0.03em 0 ${outlineColor},-0.03em -0.03em 0 ${outlineColor}` : "none",
      }} // 状態から固定位置を取得
      onMouseEnter={() => setIsPaused(true)}  // カーソルが乗ったとき
      onMouseLeave={() => setIsPaused(false)} // カーソルが外れたとき
    >
      {comment.content}
    </div>
  );
};

export default Comment;