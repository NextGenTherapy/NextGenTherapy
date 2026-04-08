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

  describe('Brand Section', () => {
    it('displays the brand name', () => {
      render(<Footer />);
      expect(screen.getByText('NextGenTherapy')).toBeInTheDocument();
    });

    it('has a link to the homepage', () => {
      render(<Footer />);
      const brandLink = screen.getByRole('link', { name: /nextgentherapy/i });
      expect(brandLink).toHaveAttribute('href', '/');
    });

    it('displays the tagline', () => {
      render(<Footer />);
      expect(
        screen.getByText(/psychodynamic therapy for women, neurodivergent adults/i)
      ).toBeInTheDocument();
    });

    it('has BACP badge with correct link', () => {
      render(<Footer />);
      const bacpLink = screen.getByRole('link', {
        name: /view andreea's bacp registration/i,
      });
      expect(bacpLink).toHaveAttribute(
        'href',
        'https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16'
      );
      expect(bacpLink).toHaveAttribute('target', '_blank');
      expect(bacpLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('has BACP badge image', () => {
      render(<Footer />);
      const bacpImage = screen.getByRole('img', { name: /bacp registered member/i });
      expect(bacpImage).toHaveAttribute('src', '/images/bacp.jpg');
    });
  });

  describe('What I Work With Section', () => {
    it('displays section heading', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /what i work with/i })).toBeInTheDocument();
    });

    it('renders service links', () => {
      render(<Footer />);
      const expectedLinks = [
        { name: 'Therapy for Women', href: '/therapy-for-women' },
        { name: 'ADHD & Autism', href: '/neurodiversity' },
        { name: 'Teen Therapy', href: '/teen-therapy' },
        { name: 'Child Therapy', href: '/child-therapy' },
        { name: 'Romanian Therapy', href: '/romanian-therapy' },
        { name: 'Online Therapy', href: '/online-therapy' },
      ];

      expectedLinks.forEach((link) => {
        const linkElement = screen.getByRole('link', { name: link.name });
        expect(linkElement).toHaveAttribute('href', link.href);
      });
    });
  });

  describe('Service Areas Section', () => {
    it('displays section heading', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /service areas/i })).toBeInTheDocument();
    });

    it('renders location links', () => {
      render(<Footer />);
      const expectedLocations = [
        { name: 'Colchester', href: '/therapy-in-colchester' },
        { name: 'Wivenhoe', href: '/therapy-in-wivenhoe' },
        { name: 'Mersea', href: '/therapy-in-mersea' },
        { name: 'Tiptree', href: '/therapy-in-tiptree' },
        { name: 'Marks Tey', href: '/therapy-in-marks-tey' },
        { name: 'Manningtree', href: '/therapy-in-manningtree' },
        { name: 'Clacton', href: '/therapy-in-clacton' },
        { name: 'Ipswich', href: '/therapy-in-ipswich' },
      ];

      expectedLocations.forEach((link) => {
        const linkElement = screen.getByRole('link', { name: link.name });
        expect(linkElement).toHaveAttribute('href', link.href);
      });
    });
  });

  describe('Site Section', () => {
    it('displays section heading', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /^site$/i })).toBeInTheDocument();
    });

    it('renders site links', () => {
      render(<Footer />);
      const expectedLinks = [
        { name: 'About', href: '/about' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Is This Right For You?', href: '/is-this-right-for-you' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Book a Free Call', href: '/book-now' },
      ];

      expectedLinks.forEach((link) => {
        const linkElement = screen.getByRole('link', { name: link.name });
        expect(linkElement).toHaveAttribute('href', link.href);
      });
    });
  });

  describe('Contact Section', () => {
    it('displays section heading', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /^contact$/i })).toBeInTheDocument();
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

    it('displays phone number with correct link', () => {
      render(<Footer />);

      const phoneLink = screen.getByRole('link', { name: /call andreea/i });
      expect(phoneLink).toHaveAttribute('href', 'tel:+447448036017');
    });

    it('displays email with correct link', () => {
      render(<Footer />);

      const emailLink = screen.getByRole('link', { name: /email andreea/i });
      expect(emailLink).toHaveAttribute('href', 'mailto:andreeatherapytoday@gmail.com');
    });
  });

  describe('Social Media Links', () => {
    it('renders Facebook link with correct attributes', () => {
      render(<Footer />);

      const facebookLink = screen.getByRole('link', { name: /andreea on facebook/i });
      expect(facebookLink).toHaveAttribute(
        'href',
        'https://www.facebook.com/share/16dg5gpZRo/?mibextid=wwXIfr'
      );
      expect(facebookLink).toHaveAttribute('target', '_blank');
      expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders Instagram link with correct attributes', () => {
      render(<Footer />);

      const instagramLink = screen.getByRole('link', { name: /andreea on instagram/i });
      expect(instagramLink).toHaveAttribute(
        'href',
        'https://www.instagram.com/nextgentherapycolchester?igsh=MWx2N2g0NnI0eTVveQ%3D%3D&utm_source=qr'
      );
      expect(instagramLink).toHaveAttribute('target', '_blank');
      expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Legal Links Section', () => {
    it('renders legal links correctly', () => {
      render(<Footer />);

      const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' });
      expect(privacyLink).toHaveAttribute('href', '/privacy-policy');

      const termsLink = screen.getByRole('link', { name: 'Terms' });
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

    it('displays BACP credentials', () => {
      render(<Footer />);

      expect(
        screen.getByText(/bacp registered member.*psychodynamic psychotherapy/i)
      ).toBeInTheDocument();
    });

    // Developer credit removed from footer in redesign
  });

  describe('Accessibility and SEO', () => {
    it('uses semantic footer element', () => {
      render(<Footer />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('has proper heading structure', () => {
      render(<Footer />);

      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings).toHaveLength(4);

      const headingTexts = headings.map((h) => h.textContent);
      expect(headingTexts).toContain('What I Work With');
      expect(headingTexts).toContain('Service Areas');
      expect(headingTexts).toContain('Site');
      expect(headingTexts).toContain('Contact');
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

      // Should have BACP link, Maps link, Facebook, and Instagram
      expect(externalLinks.length).toBeGreaterThanOrEqual(4);
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
      expect(footerColumns).toHaveLength(5);

      const footerBottom = footer.querySelector('.footerBottom');
      expect(footerBottom).toBeInTheDocument();
    });
  });

  describe('Content Validation', () => {
    it('contains therapy-specific content', () => {
      render(<Footer />);

      expect(screen.getByText(/next generation therapy/i)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /bacp/i })).toBeInTheDocument();
    });

    it('contains complete contact information', () => {
      render(<Footer />);

      // Address
      expect(screen.getByText(/colchester business centre/i)).toBeInTheDocument();

      // Email
      expect(screen.getByText(/andreeatherapytoday@gmail.com/i)).toBeInTheDocument();

      // Phone
      expect(screen.getByText(/07448 036017/)).toBeInTheDocument();
    });
  });
});
