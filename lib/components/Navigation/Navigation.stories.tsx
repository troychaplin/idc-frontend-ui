import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from './Navigation'

// Navigation items data
const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faqs' },
]

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="pb-16">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  render: () => <Navigation />
}

// Example with custom logo
// export const CustomLogo: Story = {
//   render: () => (
//     <Navigation>
//       <img 
//         src="https://via.placeholder.com/120x40" 
//         alt="Custom Logo" 
//         className="w-auto h-8"
//       />
//     </Navigation>
//   ),
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
