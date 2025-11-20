import React, { useState, useCallback } from 'react';

interface BackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  fallbackSrc?: string;
  overlayClassName?: string;
  blur?: boolean;
  loadingStrategy?: 'lazy' | 'eager';
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt = 'Background image',
  className = '',
  children,
  fallbackSrc,
  overlayClassName = '',
  blur = false,
  loadingStrategy = 'lazy',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(false);
    
    // Try fallback image if available
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  }, [currentSrc, fallbackSrc]);

  // Preload image for better performance
  React.useEffect(() => {
    if (loadingStrategy === 'eager') {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      img.src = src;
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [src, handleImageLoad, handleImageError, loadingStrategy]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className={`
          absolute inset-0 bg-cover bg-center transition-opacity duration-500
          ${blur ? 'blur-sm' : ''}
          ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        style={{
          backgroundImage: `url('${currentSrc}')`,
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
        role="img"
        aria-label={alt}
      />
      
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
      )}
      
      {/* Error state fallback */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900" />
      )}
      
      {/* Overlay gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 ${overlayClassName}`}
      />
      
      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};