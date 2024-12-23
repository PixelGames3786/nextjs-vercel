import { db } from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";

// 投稿を削除する関数
export const deletePost = async (postId: string) => {
  try {
    // Firestore内の特定のドキュメントを参照し、削除
    await deleteDoc(doc(db, "posts", postId));
    console.log(`Post with ID: ${postId} has been deleted.`);
  } catch (error) {
    console.error("Error deleting post: ", error);
  }
};
