import React, { useRef, useEffect, useState } from "react";
import loading from '../../assets2/images/01427857bbf6c40000018c1bd3430f.jpeg'
import notFound from '../../assets2/images/404.jpg'
interface LazyImageProps {
  src: string;
  alt: string;
  loadingSrc?: string;
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  loadingSrc,
  onClick,
  className,
  style
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          loadImage(src).then(() => {
            lazyImage.src = src
          }).catch(() => {
            lazyImage.src = notFound
          })
          observer.unobserve(lazyImage);
        }
      });
    };

    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src
        console.log(src)
        img.addEventListener('load', resolve)
        img.addEventListener('error', reject)
      })
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return <img style={ style ? { ...style, objectFit: 'cover' } : { objectFit: 'cover' }} className={className} onClick={onClick}  ref={imageRef} data-src={src} alt={alt} src={loadingSrc || loading }/>;
};

export default LazyImage;
