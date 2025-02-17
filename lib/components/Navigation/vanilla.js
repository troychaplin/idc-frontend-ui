/**
 * Navigation functionality for vanilla JavaScript
 */
class Navigation {
  constructor(selector) {
    this.header = document.querySelector(selector)
    this.isOpen = false
    this.lastScrollY = 0
    this.visible = true

    if (this.header) {
      this.init()
    }
  }

  init() {
    // Handle scroll
    window.addEventListener('scroll', () => this.handleScroll())
    
    // Handle menu toggle
    const toggleButton = this.header.querySelector('[data-nav-toggle]')
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.handleToggle())
    }
    
    // Handle menu close
    const closeButton = this.header.querySelector('[data-nav-close]')
    if (closeButton) {
      closeButton.addEventListener('click', () => this.handleClose())
    }

    // Handle all nav links
    const navLinks = this.header.querySelectorAll('[data-nav-link]')
    navLinks.forEach(link => {
      link.addEventListener('click', () => this.handleClose())
    })
  }

  handleScroll() {
    const currentScrollY = window.scrollY
    
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      this.setVisible(false)
    } else {
      this.setVisible(true)
    }
    
    this.lastScrollY = currentScrollY
  }

  setVisible(visible) {
    this.visible = visible
    this.header.classList.toggle('-translate-y-4', !visible)
    this.header.classList.toggle('opacity-0', !visible)
  }

  handleToggle() {
    this.isOpen = !this.isOpen
    this.header.classList.toggle('nav-open', this.isOpen)
    document.body.style.overflow = this.isOpen ? 'hidden' : ''
  }

  handleClose() {
    this.isOpen = false
    this.header.classList.remove('nav-open')
    document.body.style.overflow = ''
  }
}

// Make it available globally
window.IDC = window.IDC || {}
window.IDC.Navigation = Navigation
