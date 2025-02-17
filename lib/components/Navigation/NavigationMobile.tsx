import { NavigationMobileProps } from './types'

export const NavigationMobile = ({ isOpen, onClose, items }: NavigationMobileProps) => {
  return (
    <div
      className={`absolute left-0 right-0 top-full transform transition-all duration-300 ease-in-out 4xl:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="absolute w-full shadow-lg bg-idc-blue-50">
        <div className="px-6 py-8">

          {/* Mobile menu items */}
          <div className="space-y-4">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block text-base font-semibold leading-7 text-gray-900"
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* FR Button in mobile menu */}
          <div className="pt-8 mt-8 border-t border-gray-200">
            <a
              href="/fr"
              className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-gray-900 rounded-lg shadow-sm hover:bg-gray-700"
              onClick={onClose}
            >
              FR
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  )
} 