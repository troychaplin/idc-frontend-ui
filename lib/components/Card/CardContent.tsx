export interface CardContentProps {
  children?: React.ReactNode;
  text?: string
  link?: string
  linkText?: string
  isExcerpt?: boolean
  hideMobile?: boolean
}

export const CardContent = ({ text, link, linkText, isExcerpt = false, hideMobile = false, children }: CardContentProps) => {
  const hideMobileClass = hideMobile ? 'hidden md:block' : ''

  return (
    <>
      {children ? (
        <div className="mt-4 space-y-4">
          {children}
        </div>
      ) : (
        <p className={`${hideMobileClass} mt-2 text-base font-normal leading-7 md:mt-3`}>
          {isExcerpt && text && text.length > 280 ? (
            <>
              {text.substring(0, 280)}...
            </>
          ) : (
            text
          )}
          {link && (
            <a href={link} className="ml-1.5 p-0.5 font-semibold text-idc-orange-700 bg-idc-orange-50 hover:text-idc-blue-900 hover:bg-idc-blue-100">
              {linkText ? linkText : "Read full post"}
            </a>
          )}
        </p>
      )}
    </>
  )
}

CardContent.displayName = 'Card.Content'
