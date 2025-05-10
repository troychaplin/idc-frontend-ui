export interface HeroMediaProps {
  imageUrl: string
  imageShape?: 'rectangle' | 'radial-fade' | 'slanted-lines' | 'oval-edges'
  imageZoom?: number
  focalPointX?: number
  focalPointY?: number
}

export const HeroMedia = ({
  imageUrl,
  imageZoom = 0,
  imageShape = 'rectangle',
  focalPointX = 50,
  focalPointY = 50,
}: HeroMediaProps) => {
  // Define the mask SVG based on shape
  const getMaskSvg = (shape: string) => {
    switch (shape) {
      case 'radial-fade':
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='512' fill='none'%3E%3Cpath fill='%23000' d='M580 0h180a8 8 0 0 1 8 8v496a8 8 0 0 1-8 8H580V0Z'/%3E%3Cpath fill='url(%23a)' d='M0 8a8 8 0 0 1 8-8h577v512H8a8 8 0 0 1-8-8V8Z'/%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='0' r='1' gradientTransform='matrix(-585 0 0 -1152 585 256)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.116'/%3E%3Cstop offset='.326' stop-color='%23191919'/%3E%3Cstop offset='.492' stop-color='%23232323' stop-opacity='.9'/%3E%3Cstop offset='.667' stop-color='%23313131' stop-opacity='.699'/%3E%3Cstop offset='.807' stop-color='%23666' stop-opacity='.51'/%3E%3Cstop offset='1' stop-color='%23555' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E`
      case 'slanted-lines':
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='512' fill='none'%3E%3Cpath fill='%23000' d='M221.181 0 0 59.548V8a8 8 0 0 1 8-8h213.181ZM768 459.432 573.897 512h-30.743L768 451.104v8.328ZM768 504a8 8 0 0 1-8 8H624.93L768 473.252V504ZM474.74 0 0 127.815v-7.34L447.475 0h27.265ZM760 0a8 8 0 0 1 8 8v374L288 512H8a8 8 0 0 1-8-8V140L520 0h240Z'/%3E%3C/svg%3E`
      case 'oval-edges':
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='512' fill='none'%3E%3Cpath fill='%23000' d='M0 512V172.5C96 74.9 210.667 16.834 256 0h512v339.5c-89.6 93.6-208.333 154-256.5 172.5H0Z'/%3E%3C/svg%3E`
      case 'rectangle':
      default:
        return null
    }
  }

  const maskSvg = getMaskSvg(imageShape)

  // Combined styles for the background image with mask
  const containerStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: `scale(1.${imageZoom})`,
    ...(maskSvg
      ? {
          maskImage: `url("${maskSvg}")`,
          WebkitMaskImage: `url("${maskSvg}")`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }
      : {}),
  }

  return (
    <div className="flex-1 not-prose">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-lg" style={containerStyles} />
      </div>
    </div>
  )
}

HeroMedia.displayName = 'Hero.Media'
