# Navigation Component

A responsive navigation component that can be used in both React and vanilla JavaScript projects.

## React Usage

```jsx
import { Navigation } from '@idc/components';
import { navItems } from '@idc/data/navigation';

export const Header = () => (
  <Navigation>
    <Navigation.Desktop>
      <Navigation.Logo siteUrl="/" />
      <Navigation.Menu items={navItems} />
      <Navigation.Aside />
    </Navigation.Desktop>
    <Navigation.Mobile items={navItems} />
  </Navigation>
);
```

## Vanilla JavaScript Usage

### 1. Include the Script

```html
<script src="path/to/navigation.js"></script>
```

### 2. HTML Structure

```html
<header class="idc-header" data-nav>
  <!-- Desktop Navigation -->
  <nav class="nav-desktop">
    <!-- Logo -->
    <a href="/" data-nav-logo>
      <svg class="idc-logo">...</svg>
    </a>

    <!-- Desktop Menu -->
    <div class="nav-menu">
      <a href="/services">Services</a>
      <a href="/process">Process</a>
      <a href="/documents">Documents</a>
      <a href="/embassies">Embassies</a>
      <a href="/resources">Resources</a>
    </div>

    <!-- Toggle Button (Mobile) -->
    <button data-nav-toggle aria-label="Toggle menu">
      <span class="sr-only">Open menu</span>
      <svg>...</svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div data-nav-mobile class="nav-mobile">
    <div class="nav-mobile-content">
      <a href="/services">Services</a>
      <a href="/process">Process</a>
      <a href="/documents">Documents</a>
      <a href="/embassies">Embassies</a>
      <a href="/resources">Resources</a>
    </div>
  </div>
</header>
```

### 3. Initialize Navigation

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const nav = new IDC.Navigation('[data-nav]');
});
```

### 4. Required CSS Classes

```css
.idc-header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: white;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.nav-hidden {
  transform: translateY(-1rem);
  opacity: 0;
}

.nav-mobile {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.nav-open .nav-mobile {
  visibility: visible;
  opacity: 1;
}
```

## Features

- Responsive desktop/mobile navigation
- Smooth scroll-based header visibility
- Mobile menu with toggle
- Performance optimized scroll handling
- Accessible markup structure
- Body scroll lock when mobile menu is open

## Data Attributes

- `data-nav`: Main navigation container
- `data-nav-logo`: Logo link
- `data-nav-toggle`: Mobile menu toggle button
- `data-nav-mobile`: Mobile menu container

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
