'use client'
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image";

import { Slider } from "@/components/ui/slider"
import { settings } from 'firebase/analytics';

export interface TuneSetting {
  reduceColorNum: number,
  compressionNum: number,
  invert: boolean,
}

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isProcessed, setIsProcessed] = useState<boolean>(false);
  const [tuneSetting, setTuneSetting] = useState<TuneSetting>({
    reduceColorNum: 8,
    compressionNum: 2,
    invert: false,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // プレビュー用URLを生成
      setIsProcessed(false);
    }
  };

  const handleReduceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSetting = tuneSetting;
    const newReduceColorNum = parseInt(event.target.value);
    tuneSetting.reduceColorNum = newReduceColorNum;
    setTuneSetting(newSetting);
  };

  const handleCompressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSetting = tuneSetting;
    const newCompressNum = parseInt(event.target.value);
    tuneSetting.compressionNum = newCompressNum;
    setTuneSetting(newSetting);
  };

  const handleInvertChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSetting = tuneSetting;
    tuneSetting.invert = event.target.value.toLowerCase() === "true";
    setTuneSetting(newSetting);
  };

  const handleUpload = async () => {
    if (isProcessing) return;
    if (!selectedFile) return alert('画像を選択してください');

    setIsProcessing(true);

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
        setIsProcessing(false);
        return;
      }

      // バイナリデータをBlobとして受け取る
      const blob = await response.blob();

      // Blob URLを生成して画像表示に利用
      const objectUrl = URL.createObjectURL(blob);
      setPreviewUrl(objectUrl);
      setIsProcessed(true);
      setIsProcessing(false);
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
            <div className="caret-transparent rounded px-1 text-black">ImageTuner</div>
          </span>
        </div>
      </header>

      {/*ファイル選択*/}
      <div className='flex justify-center w-full py-5 space-x-10'>
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

      <div className='w-full h-[500px] flex'>
        {/*設定*/}
        <div className='w-[25%] h-full bg-[#1D6CB1] py-3 space-y-2'>
          <div className='flex w-full justify-center'>設定</div>
          {/*色数制限*/}
          <div className='flex space-x-2 mx-6 justify-center'>
            <div className='flex w-[30%] items-center'>色数制限</div>
            <div className='flex w-[70%] items-center justify-center space-x-1'>
              <label>
                <input
                  type="radio"
                  name="colorNum"
                  value="2"
                  onChange={handleReduceChange}
                  className="hidden peer"
                />
                <div className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >2</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="colorNum"
                  value="4"
                  onChange={handleReduceChange}
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >4</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="colorNum"
                  value="8"
                  onChange={handleReduceChange}
                  defaultChecked
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >8</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="colorNum"
                  value="16"
                  onChange={handleReduceChange}
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >16</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="colorNum"
                  value="0"
                  onChange={handleReduceChange}
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-12 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >なし</div>
              </label>
            </div>
          </div>
          {/*圧縮*/}
          <div className='flex space-x-2 mx-6 justify-center'>
            <span className='w-[30%] flex items-center'>圧縮</span>
            <span className='w-[70%] flex items-center justify-center space-x-1'>
              <label>
                <input
                  type="radio"
                  name="compressNum"
                  value="2"
                  onChange={handleCompressChange}
                  className="hidden peer"
                />
                <div className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >2</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="compressNum"
                  value="4"
                  onChange={handleCompressChange}
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >4</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="compressNum"
                  value="8"
                  onChange={handleCompressChange}
                  defaultChecked
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >8</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="compressNum"
                  value="16"
                  onChange={handleCompressChange}
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-8 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >16</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="compressNum"
                  value="0"
                  onChange={handleCompressChange}
                  className="hidden peer"
                />
                <div
                  className="caret-transparent w-12 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >なし</div>
              </label>
            </span>
          </div>
          {/*反転*/}
          <div className='flex space-x-2 mx-6 justify-center'>
            <span className='w-[30%] flex items-center'>色反転</span>
            <span className='w-[70%] flex items-center justify-center space-x-1'>
              <label>
                <input
                  type="radio"
                  name="invert"
                  value="true"
                  onChange={handleInvertChange}
                  className='hidden peer'
                />
                <div
                  className="caret-transparent w-16 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >する</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="invert"
                  value="false"
                  onChange={handleInvertChange}
                  defaultChecked
                  className='hidden peer'
                />
                <div
                  className="caret-transparent w-16 h-8 border-2 border-blue-500 rounded-md flex items-center justify-center peer-checked:bg-rose-400 peer-checked:border-transparent"
                >しない</div>
              </label>
            </span>
          </div>
        </div>

        {/*プレビュー*/}
        <div className='justify-center w-[75%] h-full bg-sky-200'>
          <div className='w-full h-[5%] justify-center flex'>
            {previewUrl ? 'Preview' : '使い方'}
          </div>
          {previewUrl ? (
            <div className="flex justify-center items-center w-full h-[90%] overflow-hidden">
              <img
                src={previewUrl}
                alt="Selected Preview"
                className={`w-full h-[85%] object-contain pointer-none ${isProcessing ? "brightness-50" : "brightness-100"}`}
              />
              {isProcessing && <ClipLoader color="#36d7b7" size={50} className='fixed' />}
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-[90%] overflow-hidden">
              まずは上部にあるアップロードフォームから画像をアップロードしよう！<br/>
              その後、左側の設定で処理設定を行い、処理ボタンを押して待てば出来上がり！<br/>
              あまり大きなサイズの画像だと処理に時間がかかってタイムアウトになったりするので、そこそこのサイズがおすすめ<br/>
              （1000*1000以下くらいがおすすめ）
            </div>
          )}

          {isProcessed && (
            <div className='justify-center flex w-full h-[5%]'><a href={previewUrl} download="processed-image.png">
              ダウンロード
            </a></div>
          )}

        </div>
      </div>

      <div className='flex justify-center'>

      </div>

      <footer className="fixed text-sm sm:text-base text-slate-500 z-10 bottom-0 w-full">
        <div className='flex text-center items-center justify-center'>
          <span className="px-1 text-black">&copy; 2024-2025 Kaiu Tomozawa. All Rights Reserved</span>
        </div>
      </footer>
    </main>
  );
}
