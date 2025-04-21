export interface HeroMediaProps {
  imageUrl: string
  imageShape?: 'rectangle' | 'oval' | 'slanted-lines'
  imageZoom?: number
  focalPointX?: number
  focalPointY?: number
}

export const HeroMedia = ({
  imageUrl,
  imageZoom = 0,
  imageShape = 'slanted-lines',
  focalPointX = 50,
  focalPointY = 50, }: HeroMediaProps) => {
    const inlineImageStyles = {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: `${focalPointX}% ${focalPointY}%`,
      transform: `scale(1.${imageZoom})`,
    }

  const imageShapes: Record<string, React.CSSProperties> = {
    oval: {
      maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='386' fill='none'%3E%3Cellipse cx='234.886' cy='193.008' fill='%23E6EDF8' rx='241' ry='185.044' transform='rotate(-20.724 234.886 193.008)'/%3E%3C/svg%3E")`,
      WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='386' fill='none'%3E%3Cellipse cx='234.886' cy='193.008' fill='%23E6EDF8' rx='241' ry='185.044' transform='rotate(-20.724 234.886 193.008)'/%3E%3C/svg%3E")`,
    },
    'slanted-lines': {
      maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='392' fill='none'%3E%3Cpath fill='%23E6EDF8' d='M464 0a8 8 0 0 1 8 8v286.622L108.584 392H8a8 8 0 0 1-8-8V118.945L443.913 0H464Zm8 352.623L325.042 392h-23.276L472 346.386v6.237ZM472 384a8 8 0 0 1-8 8H363.679L472 362.976V384ZM188.817 0 0 50.593V8a8 8 0 0 1 8-8h180.817ZM0 108.593v-6.237L382 0h23.275L0 108.593Z'/%3E%3C/svg%3E")`,
      WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='392' fill='none'%3E%3Cpath fill='%23E6EDF8' d='M464 0a8 8 0 0 1 8 8v286.622L108.584 392H8a8 8 0 0 1-8-8V118.945L443.913 0H464Zm8 352.623L325.042 392h-23.276L472 346.386v6.237ZM472 384a8 8 0 0 1-8 8H363.679L472 362.976V384ZM188.817 0 0 50.593V8a8 8 0 0 1 8-8h180.817ZM0 108.593v-6.237L382 0h23.275L0 108.593Z'/%3E%3C/svg%3E")`,
    },
    rectangle: {},
  };

  const shapeStyles = imageShapes[imageShape] || imageShapes['slanted-lines'];
    
  return <div className="flex-1 not-prose">
    <div
      className="relative flex items-center justify-center w-full h-full bg-no-repeat bg-cover rounded-lg bg-white/50"
      style={{
        ...inlineImageStyles,
        ...shapeStyles,
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
