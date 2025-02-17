import { NavigationAsideProps } from './types'

export const NavigationAside = ({ isOpen, onToggle }: NavigationAsideProps) => {
  return (
    <div className="flex items-center gap-2.5 4xl:gap-5">
      <button
        type="button"
        className="block 4xl:hidden"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open menu</span>
        {isOpen ? (
          <svg className="w-6 h-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      <button className="hidden 4xl:block" aria-label="Search">
        <svg
          className="fill-idc-black-300 hover:fill-idc-orange-500 w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>

      <button
        className="idc-button idc-button--xs idc-button--dark-orange idc-button--solid"
        aria-label="Switch to French"
      >
        FR
      </button>
      
    </div>
  )
} 