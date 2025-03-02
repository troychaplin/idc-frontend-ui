export interface HeroMediaProps {
  imageUrl: string
  imageZoom?: number
  focalPointX?: number
  focalPointY?: number
}

export const HeroMedia = ({ imageUrl,
  imageZoom = 0,
  focalPointX = 50,
  focalPointY = 50, }: HeroMediaProps) => {
    const inlineImageStyles = {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: `${focalPointX}% ${focalPointY}%`,
      transform: `scale(1.${imageZoom})`,
    }
    
  return <div className="flex-1 not-prose">
    <div
      className="flex items-center justify-center w-full h-full bg-no-repeat bg-cover rounded-lg bg-white/50"
      style={inlineImageStyles}
    />
  </div>;
};

HeroMedia.displayName = "Hero.Media";
