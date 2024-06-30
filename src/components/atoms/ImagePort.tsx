"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ImagePortProps {
  images: { src: string }[];
  alt: string;
}

const ImagePort = ({ images, alt }: ImagePortProps) => {
  const [randomImage, setRandomImage] = useState<{ src: string } | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, [images]);

  return (
    <div className="relative w-full h-[250px] flex items-center justify-center">
      {randomImage && (
        <div className="w-auto h-auto   overflow-hidden bg-white mx-2">
          <Image
            src={randomImage.src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            loading="eager"
            className="rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default ImagePort;
