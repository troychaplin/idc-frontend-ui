/**
 * Navigation functionality for vanilla JavaScript
 */
class Navigation {
  constructor(options = {}) {
    // Default options
    this.options = {
      menuButtonSelector: '[data-nav-button]',
      menuSelector: '[data-nav-menu]',
      menuItemSelector: '[data-nav-item]',
      activeClass: 'is-active',
      openClass: 'translate-y-0',
      closedClass: '-translate-y-full',
      ...options,
    }

    // Elements
    this.menuButton = document.querySelector(this.options.menuButtonSelector)
    this.menu = document.querySelector(this.options.menuSelector)
    this.menuItems = document.querySelectorAll(this.options.menuItemSelector)
    this.isOpen = false

    // Initialize
    this.init()
  }

  init() {
    if (!this.menuButton || !this.menu) return

    // Add event listeners
    this.menuButton.addEventListener('click', () => this.toggleMenu())
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.menu.contains(e.target) && !this.menuButton.contains(e.target)) {
        this.closeMenu()
      }
    })

    // Close menu when pressing escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu()
      }
    })

    // Handle menu item clicks
    this.menuItems.forEach(item => {
      item.addEventListener('click', () => this.closeMenu())
    })
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu()
  }

  openMenu() {
    this.isOpen = true
    this.menuButton.setAttribute('aria-expanded', 'true')
    this.menu.classList.remove(this.options.closedClass)
    this.menu.classList.add(this.options.openClass)
    document.body.style.overflow = 'hidden'
    
    // Update button icon (assuming SVG toggle)
    this.updateButtonIcon(true)
  }

  closeMenu() {
    this.isOpen = false
    this.menuButton.setAttribute('aria-expanded', 'false')
    this.menu.classList.remove(this.options.openClass)
    this.menu.classList.add(this.options.closedClass)
    document.body.style.overflow = ''
    
    // Update button icon (assuming SVG toggle)
    this.updateButtonIcon(false)
  }

  updateButtonIcon(isOpen) {
    const openIcon = this.menuButton.querySelector('[data-nav-icon-open]')
    const closeIcon = this.menuButton.querySelector('[data-nav-icon-close]')
    
    if (openIcon && closeIcon) {
      openIcon.style.display = isOpen ? 'none' : 'block'
      closeIcon.style.display = isOpen ? 'block' : 'none'
    }
  }
}

// Usage example:
/*
const nav = new Navigation({
  menuButtonSelector: '#mobileMenuButton',
  menuSelector: '#mobileMenu',
  menuItemSelector: '.mobile-menu-item'
})
*/

export default Navigation
