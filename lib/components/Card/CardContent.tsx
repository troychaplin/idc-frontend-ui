export interface CardContentProps {
  text?: string
  isExcerpt?: boolean
  hideMobile?: boolean
}

export const CardContent = ({ text, isExcerpt = false, hideMobile = false }: CardContentProps) => {
  const hideMobileClass = hideMobile ? 'hidden md:block' : ''

  return (
    <p className={`${hideMobileClass} mt-2 text-base font-normal leading-7 md:mt-3`}>
      {isExcerpt && text && text.length > 280 ? (
        <>
          {text.substring(0, 280)}...
        </>
      ) : (
        text
      )}
    </p>
  )
}

CardContent.displayName = 'Card.Content'
