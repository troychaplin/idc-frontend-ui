import { NavigationMobileProps } from './types'
import { useNavigation } from './context'

export const NavigationMobile = ({ items }: Omit<NavigationMobileProps, 'isOpen' | 'onClose'>) => {
  const { isOpen, setIsOpen } = useNavigation()

  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <div
      className={`absolute left-0 right-0 top-full transform transition-all duration-300 ease-in-out 4xl:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="absolute w-full bg-idc-blue-50 h-[calc(100vh-62px)] md:h-[calc(100vh-90px)]">
        <div className="flex flex-col justify-between h-full gap-4 px-6 py-8">

          {/* Mobile menu items */}
          <div className="space-y-4">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block text-base font-semibold leading-7 text-gray-900"
                onClick={handleClose}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* FR Button in mobile menu */}
          <div>
            <button
              className="w-full idc-button idc-button--xs idc-button--dark-orange idc-button--solid"
              aria-label="Switch to French"
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 