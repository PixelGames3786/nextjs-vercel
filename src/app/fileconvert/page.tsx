'use client';

import { useState, ChangeEvent, MouseEvent } from 'react';

interface ConvertResponse {
  fileUrl: string;
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [convertedFileUrl, setConvertedFileUrl] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleConvert = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      alert('ファイルを選択してください');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string+"/api/convert", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('ファイル変換に失敗しました');
      }

      const data: ConvertResponse = await response.json();
      setConvertedFileUrl(data.fileUrl);
      
    } catch (error) {
      console.error(error);
      alert('ファイル変換中にエラーが発生しました');
    }
  };

  return (
    <div>
      <h1>ファイル拡張子変換</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleConvert}>変換</button>
      {convertedFileUrl && <a href={`${process.env.NEXT_PUBLIC_API_URL}${convertedFileUrl}`} download>ダウンロード</a>}
    </div>
  );
}