import React, { useState } from 'react';
import { Image } from 'antd';

const ImageWithFallback = ({ src, alt, style, ...props }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div 
        style={{
          ...style,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f2f5',
          color: '#999',
          fontSize: '14px'
        }}
      >
        图片加载失败
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      style={style}
      onError={handleError}
      preview={false}
      {...props}
    />
  );
};

export default ImageWithFallback;