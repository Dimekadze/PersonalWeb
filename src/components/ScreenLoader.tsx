import React, { useState, useEffect } from 'react';

interface ScreenLoaderProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

function ScreenLoader({ videoRef }: ScreenLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const hideLoader = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 600);
    };

    if (video) {
      if (video.readyState >= 0.5) {
        hideLoader();
      } else {
        video.addEventListener('canplaythrough', hideLoader);
        const fallbackTimeout = setTimeout(hideLoader, 3000);

        return () => {
          video.removeEventListener('canplaythrough', hideLoader);
          clearTimeout(fallbackTimeout);
        };
      }
    } else {
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, [videoRef]);

  return (
    <section 
      id="page__loader" 
      className={`page__loader ${!isVisible ? 'hidden' : ''}`}
    >
      <div className="loader__content">
        <h2 className="loader__greeting">Welcome</h2>
        <div className="spinner"></div>
      </div>
    </section>
  );
}

export default ScreenLoader;