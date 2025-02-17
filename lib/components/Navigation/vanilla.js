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
      headerSelector: '[data-nav-header]',
      activeClass: 'is-active',
      openClass: 'opacity-100 visible',
      closedClass: 'opacity-0 invisible',
      hideClass: '-translate-y-4 opacity-0',
      showClass: 'translate-y-0 opacity-100',
      scrollThreshold: 100,
      scrollDebounce: 10, // ms
      ...options,
    }

    // Elements
    this.menuButton = document.querySelector(this.options.menuButtonSelector)
    this.menu = document.querySelector(this.options.menuSelector)
    this.menuItems = document.querySelectorAll(this.options.menuItemSelector)
    this.header = document.querySelector(this.options.headerSelector)
    this.isOpen = false
    this.lastScrollY = 0
    this.scrollTimer = null

    // Initialize
    this.init()
  }

  init() {
    if (!this.menuButton || !this.menu) return

    // Add event listeners
    this.menuButton.addEventListener('click', () => this.toggleMenu())
    
    // Add scroll listener with debounce
    window.addEventListener('scroll', () => {
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer)
      }
      this.scrollTimer = setTimeout(() => this.handleScroll(), this.options.scrollDebounce)
    })

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

  handleScroll() {
    const currentScrollY = window.scrollY
    
    if (currentScrollY > this.lastScrollY && currentScrollY > this.options.scrollThreshold) {
      this.header.classList.remove(this.options.showClass)
      this.header.classList.add(this.options.hideClass)
    } else {
      this.header.classList.remove(this.options.hideClass)
      this.header.classList.add(this.options.showClass)
    }
    
    this.lastScrollY = currentScrollY
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
    document.body.style.overflow = this.isOpen ? 'hidden' : ''
    
    this.menuButton.setAttribute('aria-expanded', this.isOpen)
    this.menu.classList.toggle(this.options.openClass)
    this.menu.classList.toggle(this.options.closedClass)
  }

  closeMenu() {
    this.isOpen = false
    document.body.style.overflow = ''
    
    this.menuButton.setAttribute('aria-expanded', false)
    this.menu.classList.remove(this.options.openClass)
    this.menu.classList.add(this.options.closedClass)
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
