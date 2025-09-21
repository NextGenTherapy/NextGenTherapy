import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../src/components/layout/footer';

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

jest.mock('next/image', () => {
  return function MockImage({ src, alt, width, height, ...props }: any) {
    return <img src={src} alt={alt} width={width} height={height} {...props} />;
  };
});

describe('Footer Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  describe('Location Section', () => {
    it('displays location heading and content', () => {
      render(<Footer />);

      // Find the location link within the footerColumn (not the one in quick links)
      const footerContent = screen.getByRole('contentinfo');
      const footerColumns = footerContent.querySelectorAll('.footerColumn');
      const locationLink = footerColumns[0].querySelector('a[href="/location"]');

      expect(locationLink).toBeInTheDocument();
      expect(locationLink).toHaveAttribute('href', '/location');

      // Check address components
      expect(screen.getByText('Colchester Business Centre,')).toBeInTheDocument();
      expect(screen.getByText('1 George Williams Way,')).toBeInTheDocument();
      expect(screen.getByText('Colchester')).toBeInTheDocument();
      expect(screen.getByText('CO1 2JS')).toBeInTheDocument();
    });

    it('has Google Maps link with correct attributes', () => {
      render(<Footer />);

      const mapsLink = screen.getByRole('link', { name: /colchester business centre/i });
      expect(mapsLink).toHaveAttribute(
        'href',
        'https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS'
      );
      expect(mapsLink).toHaveAttribute('target', '_blank');
      expect(mapsLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Hours Section', () => {
    it('displays working hours heading and schedule', () => {
      render(<Footer />);

      const hoursLink = screen.getByRole('link', { name: 'Hours' });
      expect(hoursLink).toBeInTheDocument();
      expect(hoursLink).toHaveAttribute('href', '/book-now#working-hours');

      expect(screen.getByText('Monday - Tuesday')).toBeInTheDocument();
      expect(screen.getByText('10am - 7pm')).toBeInTheDocument();
      expect(screen.getByText('Friday')).toBeInTheDocument();
      expect(screen.getByText('9am-2pm')).toBeInTheDocument();
    });
  });

  describe('Contact Section', () => {
    it('displays contact heading and information', () => {
      render(<Footer />);

      const contactLink = screen.getByRole('link', { name: 'Contact me' });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/book-now#contact-form');
    });

    it('displays email link with correct attributes', () => {
      render(<Footer />);

      const emailLink = screen.getByRole('link', { name: 'andreeatherapytoday@gmail.com' });
      expect(emailLink).toHaveAttribute('href', 'mailto:andreeatherapytoday@gmail.com');
    });

    it('displays phone link with correct attributes', () => {
      render(<Footer />);

      const phoneLink = screen.getByRole('link', { name: '+447448036017' });
      expect(phoneLink).toHaveAttribute('href', 'tel:+447448036017');
    });
  });

  describe('Social Media Links', () => {
    it('renders Facebook link with correct attributes', () => {
      render(<Footer />);

      const facebookLink = screen.getByRole('link', { name: 'Facebook' });
      expect(facebookLink).toHaveAttribute(
        'href',
        'https://www.facebook.com/share/16dg5gpZRo/?mibextid=wwXIfr'
      );
      expect(facebookLink).toHaveAttribute('target', '_blank');
      expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(facebookLink).toHaveAttribute('title', 'Visit our Facebook page');

      const facebookImage = screen.getByRole('img', { name: 'Facebook' });
      expect(facebookImage).toHaveAttribute('src', '/images/facebook-opt.png');
      expect(facebookImage).toHaveAttribute('width', '40');
      expect(facebookImage).toHaveAttribute('height', '40');
    });

    it('renders Instagram link with correct attributes', () => {
      render(<Footer />);

      const instagramLink = screen.getByRole('link', { name: 'Instagram' });
      expect(instagramLink).toHaveAttribute(
        'href',
        'https://www.instagram.com/nextgentherapycolchester?igsh=MWx2N2g0NnI0eTVveQ%3D%3D&utm_source=qr'
      );
      expect(instagramLink).toHaveAttribute('target', '_blank');
      expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(instagramLink).toHaveAttribute('title', 'Visit our Instagram page');

      const instagramImage = screen.getByRole('img', { name: 'Instagram' });
      expect(instagramImage).toHaveAttribute('src', '/images/instagram-opt.png');
    });

    it('renders BACP link with correct attributes', () => {
      render(<Footer />);

      const bacpLink = screen.getByRole('link', { name: 'BACP' });
      expect(bacpLink).toHaveAttribute(
        'href',
        'https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16'
      );
      expect(bacpLink).toHaveAttribute('target', '_blank');
      expect(bacpLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(bacpLink).toHaveAttribute('title', 'Visit our BACP page');

      const bacpImage = screen.getByRole('img', { name: 'BACP' });
      expect(bacpImage).toHaveAttribute('src', '/images/bacp.jpg');
    });
  });

  describe('Quick Links Section', () => {
    it('renders all quick navigation links', () => {
      render(<Footer />);

      // Find links specifically in the quickLinks section to avoid duplicates
      const quickLinksSection = screen.getByRole('contentinfo').querySelector('.quickLinks');

      const expectedQuickLinks = [
        { name: 'Therapy Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Trust & Care', href: '/testimonials' },
        { name: 'About Andreea', href: '/about' },
        { name: 'Location', href: '/location' },
      ];

      expectedQuickLinks.forEach((link) => {
        const linkElement = quickLinksSection?.querySelector(`a[href="${link.href}"]`);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent(link.name);
      });
    });
  });

  describe('Legal Links Section', () => {
    it('renders legal links correctly', () => {
      render(<Footer />);

      const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' });
      expect(privacyLink).toHaveAttribute('href', '/privacy-policy');

      const termsLink = screen.getByRole('link', { name: 'Terms of Service' });
      expect(termsLink).toHaveAttribute('href', '/terms');
    });
  });

  describe('Copyright Section', () => {
    it('displays current year in copyright notice', () => {
      render(<Footer />);

      const currentYear = new Date().getFullYear();
      const copyrightText = screen.getByText(
        `© ${currentYear} Next Generation Therapy. All rights reserved.`
      );
      expect(copyrightText).toBeInTheDocument();
    });

    it('displays developer credit with correct link', () => {
      render(<Footer />);

      expect(screen.getByText('Developed by')).toBeInTheDocument();

      const developerLink = screen.getByRole('link', { name: 'Luke Stevens' });
      expect(developerLink).toHaveAttribute('href', 'https://lstevens.dev');
      expect(developerLink).toHaveAttribute('target', '_blank');
      expect(developerLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Accessibility and SEO', () => {
    it('uses semantic footer element', () => {
      render(<Footer />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('has proper heading structure', () => {
      render(<Footer />);

      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings).toHaveLength(3);

      const headingTexts = headings.map((h) => h.textContent);
      expect(headingTexts).toContain('Location');
      expect(headingTexts).toContain('Hours');
      expect(headingTexts).toContain('Contact me');
    });

    it('uses proper list structure for working hours', () => {
      render(<Footer />);

      // Find the list by its className since there are multiple lists
      const container = screen.getByRole('contentinfo');
      const weekdayList = container.querySelector('.weekday');

      expect(weekdayList).toBeInTheDocument();
      expect(weekdayList?.tagName.toLowerCase()).toBe('ul');
    });

    it('all external links have security attributes', () => {
      render(<Footer />);

      // Get all external links (target="_blank")
      const externalLinks = screen
        .getAllByRole('link')
        .filter((link) => link.getAttribute('target') === '_blank');

      externalLinks.forEach((link) => {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });

      // Should have at least the social media links, maps link, and developer link
      expect(externalLinks.length).toBeGreaterThanOrEqual(5);
    });
  });

  describe('CSS Classes', () => {
    it('applies correct CSS classes to footer sections', () => {
      render(<Footer />);

      const footer = screen.getByRole('contentinfo');
      expect(footer.className).toContain('footer');

      // Check for main content classes
      const footerContent = footer.querySelector('.footerContent');
      expect(footerContent).toBeInTheDocument();

      const footerColumns = footer.querySelectorAll('.footerColumn');
      expect(footerColumns).toHaveLength(3);

      const footerBottom = footer.querySelector('.footerBottom');
      expect(footerBottom).toBeInTheDocument();
    });
  });

  describe('Content Validation', () => {
    it('contains therapy-specific content', () => {
      render(<Footer />);

      expect(screen.getByText(/next generation therapy/i)).toBeInTheDocument();
      expect(screen.getByText(/therapy services/i)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'BACP' })).toBeInTheDocument();
    });

    it('contains complete contact information', () => {
      render(<Footer />);

      // Address
      expect(screen.getByText(/colchester business centre/i)).toBeInTheDocument();

      // Email
      expect(screen.getByText(/andreeatherapytoday@gmail.com/i)).toBeInTheDocument();

      // Phone
      expect(screen.getByText(/\+447448036017/)).toBeInTheDocument();

      // Working hours
      expect(screen.getByText(/monday - tuesday/i)).toBeInTheDocument();
      expect(screen.getByText(/10am - 7pm/i)).toBeInTheDocument();
    });
  });
});
