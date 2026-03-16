"use client"
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface CustomImageProps extends ImageProps {
  fallbackSrc?: string;
}

const CustomImage = ({
  src,
  alt,
  fallbackSrc = "/images/fallback.png", // Assure-toi d'avoir une image locale ici
  className = "",
  ...props
}: CustomImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      // Si l'image échoue, on bascule sur le fallback
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default CustomImage;