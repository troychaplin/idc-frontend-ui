import { NavigationMenuProps } from './types'

export const NavigationMenu = ({ items }: NavigationMenuProps) => {
  return (
    <div className="hidden 4xl:flex 4xl:gap-x-2">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="px-3.5 py-1.5 text-sm font-light rounded-md text-idc-black-800 hover:bg-idc-blue-50"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
} 