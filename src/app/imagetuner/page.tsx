'use client'
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image";

import { Slider } from "@/components/ui/slider"
import { settings } from 'firebase/analytics';

export interface TuneSetting {
  reduceColorNum: number,
  compression: boolean,
}

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isProcessed, setIsProcessed] = useState<boolean>(false);
  const [tuneSetting, setTuneSetting] = useState<TuneSetting>({
    reduceColorNum: 8, // 初期値を設定
    compression: false,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // プレビュー用URLを生成
      setIsProcessed(false);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSetting = tuneSetting;
    const newReduceColorNum=parseInt(event.target.value);
    tuneSetting.reduceColorNum = newReduceColorNum;
    setTuneSetting(newSetting);
    if(selectedFile) handleUpload();
  };

  const handleCompressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSetting = tuneSetting;
    tuneSetting.compression = event.target.value.toLowerCase() === "true";
    setTuneSetting(newSetting);
    if(selectedFile) handleUpload();
  };

  const handleUpload = async () => {
    if (isProcessing) return;
    if (!selectedFile) return alert('画像を選択してください');

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('tuneSetting', JSON.stringify(tuneSetting));

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error);
        setIsProcessing(true);
        return;
      }

      // バイナリデータをBlobとして受け取る
      const blob = await response.blob();

      // Blob URLを生成して画像表示に利用
      const objectUrl = URL.createObjectURL(blob);
      setPreviewUrl(objectUrl);
      setIsProcessed(true);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('画像のアップロードに失敗しました');
    }
  };

  return (
    <main>
      <Analytics />
      <header className="w-full h-20 items-center z-10 pointer-events-none bg-sky-500">
        <div className="flex mx-auto h-full px-3 sm:px-8 text-base sm:text-xl">
          <span className="flex-grow text-center flex items-center justify-center">
            <div className="hover:border pointer-events-auto rounded px-1 text-black">ImageTuner</div>
          </span>
        </div>
      </header>

      {/*ファイル選択*/}
      <div className='flex justify-center w-full outline py-5 space-x-10'>
        <div className="flex flex-col items-center">
          <label
            htmlFor="fileInput"
            className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600"
          >
            ファイルを選択
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden" // 完全に非表示
          />
        </div>
        <label
          className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600"
          onClick={() => (previewUrl ? handleUpload() : null)}
        >
          処理
        </label>
      </div>

      {/*設定*/}
      <div className='w-full bg-[#1D6CB1] py-3'>
        <div className='flex w-full justify-center'>設定</div>
        <div className='flex justify-center'>
          <div className='space-x-2'>
            <span className='pr-2'>色数制限</span>
            <label>
              <input
                type="radio"
                name="colorNum"
                value="2"
                onChange={handleRadioChange}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                name="colorNum"
                value="4"
                onChange={handleRadioChange}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name="colorNum"
                value="8"
                onChange={handleRadioChange}
                defaultChecked
              />
              8
            </label>
            <label>
              <input
                type="radio"
                name="colorNum"
                value="16"
                onChange={handleRadioChange}
              />
              16
            </label>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='space-x-2'>
            <span className='pr-2'>圧縮</span>
            <label>
              <input
                type="radio"
                name="compression"
                value="true"
                onChange={handleCompressChange}
              />
              する
            </label>
            <label>
              <input
                type="radio"
                name="compression"
                value="false"
                onChange={handleCompressChange}
                defaultChecked
              />
              しない
            </label>
          </div>
        </div>
      </div>

      {/*プレビュー*/}
      <div className='flex justify-center w-full outline'>
        {previewUrl && (
          <div>
            <h2>Preview</h2>
            <div className="relative w-1/3 mx-auto overflow-hidden">
              <img
                src={previewUrl}
                alt="Selected Preview"
                className="w-full h-auto rounded shadow object-contain"
              />
            </div>
            {isProcessed && (
              <a href={previewUrl} download="processed-image.png">
                ダウンロード
              </a>
            )}
          </div>

        )}
      </div>

      <footer className="fixed text-sm sm:text-base text-slate-500 z-10 bottom-0 w-full">
          <div className='flex text-center items-center justify-center'>
            <span className="hover:border rounded px-1 text-black">&copy; 2024 Kaiu Tomozawa. All Rights Reserved</span>
          </div>
        </footer>
    </main>
  );
}
