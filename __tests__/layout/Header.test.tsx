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

  it('renders main navigation links', () => {
    render(<Header />);

    // Main nav links (not in dropdown)
    const mainLinks = [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Book a Free Call', href: '/book-now' },
    ];

    mainLinks.forEach((link) => {
      const linkElement = screen.getByRole('link', { name: link.name });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });

  it('renders dropdown service links', () => {
    render(<Header />);

    // Service links in dropdown (appear twice - desktop and mobile)
    const serviceLinks = [
      { name: 'Therapy for Women', href: '/therapy-for-women' },
      { name: 'ADHD & Autism in Adults', href: '/neurodiversity' },
      { name: 'Therapy for Teenagers', href: '/teen-therapy' },
      { name: 'Therapy for Children', href: '/child-therapy' },
      { name: 'Therapy in Romanian', href: '/romanian-therapy' },
      { name: 'Online Therapy', href: '/online-therapy' },
    ];

    serviceLinks.forEach((link) => {
      // Multiple instances due to desktop and mobile dropdowns
      const linkElements = screen.getAllByRole('link', { name: link.name });
      expect(linkElements.length).toBeGreaterThan(0);
      expect(linkElements[0]).toHaveAttribute('href', link.href);
    });
  });

  it('renders Is This Right For You link in dropdown', () => {
    render(<Header />);
    const links = screen.getAllByRole('link', { name: /Is This Right For You\?/i });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute('href', '/is-this-right-for-you');
  });

  it('renders the hamburger menu button with correct aria attributes', () => {
    render(<Header />);
    // Get hamburger button by aria-label (not the dropdown triggers)
    const menuButton = screen.getByRole('button', { name: /navigation menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'main-navigation');
  });

  it('renders dropdown trigger buttons', () => {
    render(<Header />);
    // Multiple dropdown triggers (desktop and mobile)
    const dropdownButtons = screen.getAllByRole('button', { name: /What I Work With/i });
    expect(dropdownButtons.length).toBeGreaterThan(0);
  });

  it('toggles menu when hamburger button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /navigation menu/i });

    // Initially menu should be closed
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

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

    const menuButton = screen.getByRole('button', { name: /navigation menu/i });
    const aboutLink = screen.getByRole('link', { name: 'About' });

    // Open menu first
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Click a navigation link
    await user.click(aboutLink);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes menu when clicking outside', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /navigation menu/i });

    // Open menu first
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Click outside the navigation
    fireEvent.mouseDown(document.body);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('does not close menu when clicking inside navigation', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /navigation menu/i });
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
    const menuButton = screen.getByRole('button', { name: /navigation menu/i });
    const navList = document.getElementById('main-navigation');

    expect(navigation).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-controls', 'main-navigation');
    expect(navList).toBeInTheDocument();
    expect(navList).toHaveAttribute('id', 'main-navigation');
  });

  it('contains hamburger icon spans', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /navigation menu/i });
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
    const menuButton = screen.getByRole('button', { name: /navigation menu/i });
    const navList = document.getElementById('main-navigation');

    // Find the logo div by class
    const logoDiv = header.querySelector('.logo');

    expect(header.className).toContain('header');
    expect(navigation.className).toContain('nav');
    expect(logoDiv?.className).toContain('logo');
    expect(menuButton.className).toContain('menuButton');
    expect(navList?.className).toContain('navList');
  });

  it('has semantic HTML structure', () => {
    render(<Header />);

    // Should have header element
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Should have navigation element
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Should have logo link
    expect(screen.getByRole('link', { name: /nextgentherapy/i })).toBeInTheDocument();

    // Should have lists (main nav + dropdown menus)
    const lists = screen.getAllByRole('list');
    expect(lists.length).toBeGreaterThan(0);

    // Should have list items
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);
  });

  it('dropdown trigger has proper aria-haspopup attribute', () => {
    render(<Header />);
    const dropdownButtons = screen.getAllByRole('button', { name: /What I Work With/i });
    // Desktop dropdown has aria-haspopup
    const desktopDropdown = dropdownButtons.find((btn) => btn.getAttribute('aria-haspopup') === 'true');
    expect(desktopDropdown).toBeInTheDocument();
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
