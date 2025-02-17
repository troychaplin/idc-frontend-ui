import { NavigationMenuProps } from './types'

export const NavigationMenu = ({ items }: NavigationMenuProps) => {
  return (
    <>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="px-3.5 py-1.5 text-sm font-light rounded-md text-idc-black-800 hover:bg-idc-blue-50"
        >
          {item.label}
        </a>
      ))}
    </>
  )
} 