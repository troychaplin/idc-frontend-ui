import React from 'react';

export interface HeroMediaProps {
  /**
   * The media content to be displayed
   */
  children: React.ReactNode;
  /**
   * The type of mask to apply to the media
   */
  mask?: 'oval' | 'slanted-lines' | 'rectangle';
  /**
   * The background color of the media container
   */
  backgroundColor?: string;
  /**
   * The base path to the SVG mask assets
   * @default '/assets'
   */
  assetsPath?: string;
  /**
   * Additional class names to apply to the container
   */
  className?: string;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({
  children,
  mask,
  backgroundColor = 'bg-white',
  assetsPath = '/assets',
  className,
}) => {
  const getMaskUrl = () => {
    if (!mask) return undefined;
    return `url(${assetsPath}/${mask}-mask.svg)`;
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${backgroundColor} ${className || ''}`}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage: getMaskUrl(),
          WebkitMaskImage: getMaskUrl(),
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        {children}
      </div>
    </div>
  );
}; 