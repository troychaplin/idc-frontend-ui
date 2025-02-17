import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from './Navigation'
import type { NavigationProps } from './Navigation'

// Navigation items data
const navItems = [
  { id: 1, label: 'Services', href: '#' },
  { id: 2, label: 'Process', href: '#' },
  { id: 3, label: 'Documents', href: '#' },
  { id: 4, label: 'Embassies', href: '#' },
  { id: 5, label: 'Resources', href: '#' },
]

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Navigation>

export const Primary: Story = {
  args: {},
  render: () => (
    <Navigation>
      <Navigation.Desktop>
        <Navigation.Logo siteUrl="/" />
        <Navigation.Menu items={navItems} />
        <Navigation.Aside />
      </Navigation.Desktop>

      <Navigation.Mobile items={navItems} />
    </Navigation>
  ),
}

// export const Default: Story = {
//   render: () => <Navigation siteUrl="/" />
// }

// Example with custom menu items
// export const CustomMenuItems: Story = {
//   render: () => (
//     <Navigation>
//       {navItems.map((item) => (
//         <a
//           key={item.href}
//           href={item.href}
//           className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-gray-600"
//         >
//           {item.label}
//         </a>
//       ))}
//     </Navigation>
//   ),
// }

// Example with mobile menu open
// export const MobileMenuOpen: Story = {
//   parameters: {
//     viewport: {
//       defaultViewport: 'mobile2',
//     },
//   },
//   render: () => <Navigation />
// }
