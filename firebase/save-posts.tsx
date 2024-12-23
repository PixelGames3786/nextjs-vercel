import { db } from "./firebase";
import { collection, addDoc, serverTimestamp,getDoc ,Timestamp} from "firebase/firestore";
import DOMPurify from "dompurify";
import { Post } from "./get-posts";

//投稿を保存する関数
export const savePost = async (userId:string,content: string,colorR:number,colorG:number,colorB:number,size:number,isBold:boolean,isOutline:boolean): Promise<Post | null> => {
  try {
    //サニタイズを実施
    const sanitizedContent = DOMPurify.sanitize(content); //contentをサニタイズ

    // Firestoreにドキュメントを追加し、そのリファレンスを取得
    const docRef = await addDoc(collection(db, "posts"), {
      userId: userId,
      content: sanitizedContent,
      colorR:colorR,
      colorG:colorG,
      colorB:colorB,
      size:size,
      isBold:isBold,
      isOutline:isOutline,
      createdAt: serverTimestamp(), //サーバータイムスタンプ
    });

    //追加したドキュメントのデータを取得
    const savedDoc = await getDoc(docRef);

    if (savedDoc.exists()) {
      //Post型としてdataを構成
      const data = savedDoc.data();

      // Post型に変換
      const post: Post = {
        id: savedDoc.id, //ドキュメントIDはDocから取るらしい
        content: data.content as string,
        colorR : data.colorR as number,
        colorG : data.colorG as number,
        colorB : data.colorB as number,
        size:data.size as number,
        isBold:data.isBold as boolean,
        isOutline:data.isOutline as boolean,
        createdAt: data.createdAt as Timestamp, 
      };

      return post; //保存した投稿を返す
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error adding post: ", error);
    return null;
  }
};