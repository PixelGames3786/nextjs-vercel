import { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton'; // shadcn/uiのSkeletonコンポーネントをインポート

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, width, height }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      {isLoading && (
        <Skeleton
          className="absolute inset-0"
          style={{ width, height }} // Skeletonのサイズを指定
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setIsLoading(false)} // 読み込み完了時にSkeletonを非表示にする
        objectFit="cover"
        className={`rounded-lg transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`} // アニメーション効果を追加
      />
    </div>
  );
};

export default ImageWithSkeleton;
