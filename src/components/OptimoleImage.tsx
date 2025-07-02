import React from 'react';

interface OptimoleImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const OptimoleImage: React.FC<OptimoleImageProps> = ({ 
  src, 
  width, 
  height, 
  alt, 
  className = '',
  ...props 
}) => {
  return (
    <img
      data-opt-src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default OptimoleImage;