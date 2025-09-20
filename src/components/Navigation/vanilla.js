/**
 * Navigation functionality for vanilla JavaScript
 * Matches functionality of React Navigation component
 */
class Navigation {
  constructor(selector) {
    this.header = document.querySelector(selector);
    this.isOpen = false;
    this.lastScrollY = 0;
    this.visible = true;
    this.scrollThreshold = 100;

    if (this.header) {
      this.init();
    }
  }

  init() {
    // Handle scroll with throttle for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Handle menu toggle
    const toggleButton = this.header.querySelector('[data-nav-toggle]');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.handleToggle());
    }

    // Handle all nav links
    const navLinks = this.header.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => this.handleClose());
    });

    // Handle initial visibility
    this.setVisible(true);
  }

  handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.lastScrollY && currentScrollY > this.scrollThreshold) {
      this.setVisible(false);
    } else {
      this.setVisible(true);
    }

    this.lastScrollY = currentScrollY;
  }

  setVisible(visible) {
    this.visible = visible;
    this.header.classList.toggle('nav-hidden', !visible);

    if (!visible) {
      this.header.style.transform = 'translateY(-1rem)';
      this.header.style.opacity = '0';
    } else {
      this.header.style.transform = 'translateY(0)';
      this.header.style.opacity = '1';
    }
  }

  handleToggle() {
    this.isOpen = !this.isOpen;
    this.header.classList.toggle('nav-open', this.isOpen);

    // Toggle mobile menu visibility
    const mobileMenu = this.header.querySelector('[data-nav-mobile]');
    if (mobileMenu) {
      mobileMenu.classList.toggle('visible', this.isOpen);
      mobileMenu.classList.toggle('invisible', !this.isOpen);
      mobileMenu.style.opacity = this.isOpen ? '1' : '0';
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }

  handleClose() {
    if (this.isOpen) {
      this.isOpen = false;
      this.header.classList.remove('nav-open');

      const mobileMenu = this.header.querySelector('[data-nav-mobile]');
      if (mobileMenu) {
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('invisible');
        mobileMenu.style.opacity = '0';
      }

      document.body.style.overflow = '';
    }
  }
}

// Make it available globally
window.IDC = window.IDC || {};
window.IDC.Navigation = Navigation;
