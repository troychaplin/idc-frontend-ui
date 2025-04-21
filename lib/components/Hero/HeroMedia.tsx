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
  imageShape = 'rectangle',
  focalPointX = 50,
  focalPointY = 50, }: HeroMediaProps) => {
  
  // Define the mask SVG based on shape
  const getMaskSvg = (shape: string) => {
    switch (shape) {
      case 'oval':
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='470' height='386' fill='none'%3E%3Cellipse cx='234.886' cy='193.008' fill='%23E6EDF8' rx='241' ry='185.044' transform='rotate(-20.724 234.886 193.008)'/%3E%3C/svg%3E`;
      case 'slanted-lines':
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='472' height='392' fill='none'%3E%3Cpath fill='%23E6EDF8' d='M464 0a8 8 0 0 1 8 8v286.622L108.584 392H8a8 8 0 0 1-8-8V118.945L443.913 0H464Zm8 352.623L325.042 392h-23.276L472 346.386v6.237ZM472 384a8 8 0 0 1-8 8H363.679L472 362.976V384ZM188.817 0 0 50.593V8a8 8 0 0 1 8-8h180.817ZM0 108.593v-6.237L382 0h23.275L0 108.593Z'/%3E%3C/svg%3E`;
      case 'rectangle':
      default:
        return null; // No mask for rectangle
    }
  };

  const maskSvg = getMaskSvg(imageShape);
  
  // Combined styles for the background image with mask
  const containerStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: `scale(1.${imageZoom})`,
    ...(maskSvg ? {
      maskImage: `url("${maskSvg}")`,
      WebkitMaskImage: `url("${maskSvg}")`,
      maskSize: '100% 100%',
      WebkitMaskSize: '100% 100%',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
    } : {})
  };
    
  return (
    <div className="flex-1 not-prose">
      <div className="relative w-full h-full">
        <div 
          className="absolute inset-0 rounded-lg"
          style={containerStyles}
        />
      </div>
    </div>
  );
};

HeroMedia.displayName = "Hero.Media";
