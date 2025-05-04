/**
 * Utility functions for handling navigation in the application
 */

/**
 * Handles client-side navigation when clicking links
 */
export const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  window.location.href = href;
};