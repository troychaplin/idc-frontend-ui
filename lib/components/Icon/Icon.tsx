import { useEffect, useState } from 'react'

export interface IconProps {
  name: string
  color?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  align?: 'none' | 'left' | 'center' | 'right'
  basePath?: string
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
}

const alignIcon = {
  none: 'm-0',
  left: 'ml-0',
  center: 'mx-auto',
  right: 'mr-0'
}

export const Icon = ({ 
  name, 
  color = 'currentColor',
  size = 'md',
  align = 'none',
  basePath = ''
}: IconProps) => {
  const [svgContent, setSvgContent] = useState<string>('')
  
  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const iconPath = `${basePath}/assets/icons/${name}.svg`
        const response = await fetch(iconPath)
        const svgText = await response.text()
        
        // Create a temporary div to parse the SVG
        const div = document.createElement('div')
        div.innerHTML = svgText
        
        // Get the SVG element
        const svg = div.querySelector('svg')
        if (svg) {
          // Remove any existing classes and add our new ones
          svg.setAttribute('class', `${sizeMap[size]} ${alignIcon[align]} m-0`)
          
          // Set the fill color
          svg.setAttribute('fill', color)

          // Remove any hardcoded dimensions
          svg.removeAttribute('width')
          svg.removeAttribute('height')
          
          setSvgContent(svg.outerHTML)
        }
      } catch (error) {
        console.error('Error loading SVG:', error)
      }
    }

    fetchSvg()
  }, [name, size, color, align, basePath])

  // Use dangerouslySetInnerHTML to render the SVG
  return <span dangerouslySetInnerHTML={{ __html: svgContent }} />
} 