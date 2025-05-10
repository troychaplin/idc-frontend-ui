import { useEffect, useState } from 'react'

export interface HeroMediaProps {
  imageUrl: string
  imageShape?: 'rectangle' | 'radial-fade' | 'dotted-corners' | 'slanted-lines' | 'oval-edges'
  imageZoom?: number
  focalPointX?: number
  focalPointY?: number
  basePath?: string
}

export const HeroMedia = ({
  imageUrl,
  imageZoom = 0,
  imageShape = 'rectangle',
  focalPointX = 50,
  focalPointY = 50,
  basePath = '',
}: HeroMediaProps) => {
  const [maskSvg, setMaskSvg] = useState<string | null>(null)

  useEffect(() => {
    const loadMaskSvg = async () => {
      if (imageShape === 'rectangle') {
        setMaskSvg(null)
        return
      }

      try {
        const maskPath = `${basePath}/assets/hero/${imageShape}.svg`
        const response = await fetch(maskPath)
        const svgText = await response.text()
        
        // Create a temporary div to parse the SVG
        const div = document.createElement('div')
        div.innerHTML = svgText
        
        // Get the SVG element
        const svg = div.querySelector('svg')
        if (svg) {
          // Convert the SVG to a data URL
          const svgString = new XMLSerializer().serializeToString(svg)
          const encodedSvg = encodeURIComponent(svgString)
          setMaskSvg(`data:image/svg+xml,${encodedSvg}`)
        }
      } catch (error) {
        console.error('Error loading mask SVG:', error)
        setMaskSvg(null)
      }
    }

    loadMaskSvg()
  }, [imageShape, basePath])

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
