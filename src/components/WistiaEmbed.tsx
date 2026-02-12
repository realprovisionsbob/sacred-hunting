import React, { useEffect } from 'react';

declare global {
  interface Window {
    _wq: any[];
  }
}

interface WistiaEmbedProps {
  videoId: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  playerColor?: string;
}

const WistiaEmbed: React.FC<WistiaEmbedProps> = ({ 
  videoId, 
  className = '', 
  autoPlay = false, 
  muted = true,
  playerColor = '#e74c3c'
}) => {
  useEffect(() => {
    // Load Wistia scripts
    const script1 = document.createElement('script');
    script1.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.head.appendChild(script2);

    // Configure Wistia settings
    window._wq = window._wq || [];
    window._wq.push({
      [videoId]: {
        playerColor,
        autoPlay,
        muted,
        resumable: true,
        controlsVisibleOnLoad: true,
        copyLinkAndThumbnailEnabled: true
      }
    });

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [videoId, autoPlay, muted, playerColor]);

  return (
    <div className={`wistia_responsive_padding ${className}`} style={{padding:'56.25% 0 0 0', position:'relative'}}>
      <div className="wistia_responsive_wrapper" style={{height:'100%', left:0, position:'absolute', top:0, width:'100%'}}>
        <div 
          className={`wistia_embed wistia_async_${videoId} seo=true videoFoam=true`} 
          style={{height:'100%', position:'relative', width:'100%'}}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default WistiaEmbed;