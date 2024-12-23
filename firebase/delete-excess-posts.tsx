import { db } from "./firebase";
import { collection, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore";

const COMMENT_LIMIT = 200; // コメントの上限

//コメントを取得して数の上限を超えたものを削除
export const deleteExcessPosts = async () => {
  try {
    //コメントを作成日時順に取得
    const q = query(collection(db, "posts"), orderBy("createdAt", "asc"));
    const querySnapshot = await getDocs(q);

    //取得したコメントを配列に変換
    const documents = querySnapshot.docs;

    //上限を超えた数のコメントを削除
    if (documents.length > COMMENT_LIMIT) {
      const excessCount = documents.length - COMMENT_LIMIT;

      for (let i = 0; i < excessCount; i++) {
        const document = documents[i];
        await deleteDoc(doc(db, "posts", document.id));
        console.log(`Deleted post with ID: ${document.id}`);
      }
      console.log(`${excessCount} old posts deleted to maintain the limit of ${COMMENT_LIMIT}.`);
    } else {
      console.log("No excess posts to delete.");
    }
  } catch (error) {
    console.error("Error deleting excess posts: ", error);
  }
};