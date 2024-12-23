import { db } from "./firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

// 一定期間（例: 30日）を超えた投稿を削除する関数
export const deleteOldPosts = async () => {
  const now = Date.now(); // 現在時刻 (ミリ秒)
  const expirationTime = 7 * 24 * 60 * 60 * 1000; //7日分のミリ秒
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));

    // 各ドキュメントをチェックして削除対象か判定
    querySnapshot.forEach(async (document) => {
      const data = document.data();
      const createdAt = data.createdAt as Timestamp; // FirestoreのTimestamp型
      // createdAtが存在するか確認
      if (createdAt) {
        const createdAtMillis = createdAt.toMillis(); // Timestampをミリ秒に変換

        // 現在時刻と投稿作成時刻の差を確認
        if (now - createdAtMillis > expirationTime) {
          // 古い投稿を削除
          await deleteDoc(doc(db, "posts", document.id));
          console.log(`Deleted post with ID: ${document.id}`);
        }
      }
    });
    console.log("Old posts cleanup complete!");
  } catch (error) {
    console.error("Error deleting old posts: ", error);
  }
};