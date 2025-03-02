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
      className="relative flex items-center justify-center w-full h-full bg-no-repeat bg-cover rounded-lg bg-white/50"
      style={{
        ...inlineImageStyles,
        maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 472 392'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M301.327 368.751c123.508-46.728 194.316-162.095 158.152-257.68-36.163-95.584-165.602-135.19-289.111-88.462C46.86 69.336-23.947 184.704 12.216 280.288c36.163 95.584 165.602 135.191 289.111 88.463Z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 472 392'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M301.327 368.751c123.508-46.728 194.316-162.095 158.152-257.68-36.163-95.584-165.602-135.19-289.111-88.462C46.86 69.336-23.947 184.704 12.216 280.288c36.163 95.584 165.602 135.191 289.111 88.463Z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  </div>;
};

HeroMedia.displayName = "Hero.Media";
