import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from '../../src/components/layout/header';

// Mock Next.js components
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mock the button component
jest.mock('../../src/components/ui/button', () => {
  return function MockButton({ children, onClick, className, ...props }: any) {
    return (
      <button onClick={onClick} className={className} {...props}>
        {children}
      </button>
    );
  };
});

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the logo with correct link', () => {
    render(<Header />);
    const logoLink = screen.getByRole('link', { name: /nextgentherapy/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders all navigation links', () => {
    render(<Header />);

    const expectedLinks = [
      { name: 'Home', href: '/' },
      { name: 'About Me', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'About Therapy', href: '/about-therapy' },
      { name: 'Blog', href: '/blog' },
      { name: 'Book Now', href: '/book-now' },
    ];

    expectedLinks.forEach((link) => {
      const linkElement = screen.getByRole('link', { name: link.name });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });

  it('renders the hamburger menu button', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-label', 'Open navigation menu');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'main-navigation');
  });

  it('toggles menu when hamburger button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByRole('button');

    // Initially menu should be closed
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-label', 'Open navigation menu');

    // Click to open menu
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(menuButton).toHaveAttribute('aria-label', 'Close navigation menu');

    // Click again to close menu
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-label', 'Open navigation menu');
  });

  it('closes menu when a navigation link is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByRole('button');
    const servicesLink = screen.getByRole('link', { name: 'Services' });

    // Open menu first
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Click a navigation link
    await user.click(servicesLink);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes menu when clicking outside', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button');

    // Open menu first
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Click outside the navigation
    fireEvent.mouseDown(document.body);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('does not close menu when clicking inside navigation', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button');
    const navigation = screen.getByRole('navigation');

    // Open menu first
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Click inside the navigation
    fireEvent.mouseDown(navigation);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('has proper ARIA attributes for accessibility', () => {
    render(<Header />);

    const navigation = screen.getByRole('navigation');
    const menuButton = screen.getByRole('button');
    const navList = document.getElementById('main-navigation');

    expect(navigation).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-controls', 'main-navigation');
    expect(navList).toBeInTheDocument();
    expect(navList).toHaveAttribute('id', 'main-navigation');
  });

  it('contains hamburger icon spans', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button');
    const hamburgerIcon = menuButton.querySelector('.hamburgerIcon');
    expect(hamburgerIcon).toBeInTheDocument();

    // Should have 3 span elements for hamburger lines
    const spans = hamburgerIcon?.querySelectorAll('span');
    expect(spans).toHaveLength(3);
  });

  it('applies correct CSS classes', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navigation = screen.getByRole('navigation');
    const menuButton = screen.getByRole('button');
    const navList = document.getElementById('main-navigation');

    // Find the logo div by class
    const logoDiv = header.querySelector('.logo');

    expect(header.className).toContain('header');
    expect(navigation.className).toContain('nav');
    expect(logoDiv?.className).toContain('logo');
    expect(menuButton.className).toContain('menuButton');
    expect(navList?.className).toContain('navList');
  });

  it('renders navigation items in correct order', () => {
    render(<Header />);

    const navItems = screen.getAllByRole('listitem');
    const expectedOrder = ['Home', 'About Me', 'Services', 'About Therapy', 'Blog', 'Book Now'];

    navItems.forEach((item, index) => {
      const link = item.querySelector('a');
      expect(link?.textContent).toBe(expectedOrder[index]);
    });
  });

  it('has semantic HTML structure', () => {
    render(<Header />);

    // Should have header element
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Should have navigation element
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Should have logo link
    expect(screen.getByRole('link', { name: /nextgentherapy/i })).toBeInTheDocument();

    // Should have unordered list for navigation
    expect(screen.getByRole('list')).toBeInTheDocument();

    // Should have list items
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });

  it('cleans up event listeners on unmount', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    const { unmount } = render(<Header />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
