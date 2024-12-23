import { db } from "./firebase";
import { collection, query, orderBy, getDocs ,QueryDocumentSnapshot,Timestamp} from "firebase/firestore";

// Firestoreのポストのデータ型
export interface Post {
  id: string;
  content: string;
  colorR:number;
  colorG:number;
  colorB:number;
  size:number;
  isBold:boolean;
  isOutline:boolean;
  createdAt: Timestamp; // FirestoreのTimestamp型
}

// 投稿を取得する関数
export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const posts: Post[] = [];
    var postCount=0;

    querySnapshot.forEach((doc : QueryDocumentSnapshot) => {
      // Post型としてdataを構成
      const data = doc.data();
      posts.push({
        id: doc.id,
        content: data.content,
        colorR:data.colorR,
        colorG:data.colorG,
        colorB:data.colorB,
        size:data.size,
        isBold:data.isBold,
        isOutline:data.isOutline,
        createdAt: data.createdAt,  // Timestamp型をそのまま保存
      });

      postCount++;

      //取得する表示数を100上限にする
      if(postCount>300) return posts;
    });

    return posts;
  } catch (e) {

    console.error("Error fetching posts: ", e);
    return [];
  }
};