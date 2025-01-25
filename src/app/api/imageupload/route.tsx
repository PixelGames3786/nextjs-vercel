import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import sharp from 'sharp';
import * as Jimp from 'jimp';
import MedianCut from 'mediancut';
import { createCanvas, CanvasRenderingContext2D } from 'canvas';
import { TuneSetting } from '@/app/imagetuner/page';

export async function POST(req: Request) {
  try {
    // FormData を取得
    const formData = await req.formData();
    const file = formData.get('file') as Blob;
    const tuneSettingJson = formData.get('tuneSetting') as string;

    if (!file || !tuneSettingJson) {
      return new Response('Invalid request', { status: 400 });
    }

    const Setting: TuneSetting = JSON.parse(tuneSettingJson);

    let buffer = Buffer.from(await file.arrayBuffer());

    //jimpで減色
    const jimpImage = await Jimp.Jimp.read(buffer);

    if(Setting.reduceColorNum!=0) jimpImage.quantize({ colors: Setting.reduceColorNum });
    
    //jimpImage.posterize(Setting.reduceColorNum);

    //色反転するなら
    if(Setting.invert) jimpImage.invert();

    //モノクロにするなら
    if(Setting.grayScale) jimpImage.greyscale();

    const promise = await jimpImage.getBuffer('image/png');
    buffer = promise;

    //圧縮するなら
    if (Setting.compressionNum!=0) {
      const compressRatio=1/Setting.compressionNum;

      const newWidth = Math.round(jimpImage.bitmap.width * compressRatio);
      const newHeight = Math.round(jimpImage.bitmap.height * (newWidth / jimpImage.bitmap.width));
      buffer = await sharp(buffer)
        .resize(newWidth, newHeight)
        .toBuffer();

      buffer = await sharp(buffer)
        .resize(jimpImage.bitmap.width, jimpImage.bitmap.height, {
          kernel: sharp.kernel.nearest
        })
        .toBuffer();
    }


    // レスポンスヘッダーを設定して画像データを直接返す
    return new Response(buffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `inline; filename="${uuidv4()}.png"`, // ダウンロード用のファイル名
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}