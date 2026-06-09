/**
 * Theme Manager - Handles Dark/Light Mode
 * Automatically detects system preference and respects user's choice
 */

class ThemeManager {
  constructor() {
    this.storageKey = 'theme-preference';
    this.init();
  }

  init() {
    // Get stored preference or use system preference
    const storedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme
    if (storedTheme) {
      this.setTheme(storedTheme);
    } else if (prefersDark) {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }

  toggleTheme() {
    const currentTheme = localStorage.getItem(this.storageKey) || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  getTheme() {
    return localStorage.getItem(this.storageKey) || 'dark';
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});

// Initialize immediately if DOM is already loaded
if (document.readyState !== 'loading') {
  new ThemeManager();
}
