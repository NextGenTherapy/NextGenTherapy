import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GoogleMapEmbed from '../../src/components/ui/GoogleMapEmbed';

describe('GoogleMapEmbed Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      const { container } = render(<GoogleMapEmbed />);
      expect(container).toBeInTheDocument();
    });

    it('renders iframe element', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );
      expect(iframe).toBeInTheDocument();
      expect(iframe.tagName.toLowerCase()).toBe('iframe');
    });

    it('renders location description', () => {
      render(<GoogleMapEmbed />);
      expect(screen.getByText(/our location:/i)).toBeInTheDocument();
      expect(screen.getByText(/colchester business centre/i)).toBeInTheDocument();
      expect(screen.getByText(/1 george williams way/i)).toBeInTheDocument();
      expect(screen.getByText(/colchester co1 2js/i)).toBeInTheDocument();
    });
  });

  describe('Iframe Attributes', () => {
    it('has correct Google Maps embed URL', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      const expectedSrcPattern =
        /^https:\/\/www\.google\.com\/maps\/embed\?pb=.*colchester.*business.*centre/i;
      expect(iframe).toHaveAttribute('src');
      expect(iframe.getAttribute('src')).toMatch(expectedSrcPattern);
    });

    it('has proper dimensions', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      expect(iframe).toHaveAttribute('width', '100%');
      expect(iframe).toHaveAttribute('height', '300');
    });

    it('has proper security and performance attributes', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      expect(iframe).toHaveAttribute('allowFullScreen');
      expect(iframe).toHaveAttribute('loading', 'lazy');
      expect(iframe).toHaveAttribute('referrerPolicy', 'no-referrer-when-downgrade');
    });

    it('has proper styling', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      const style = iframe.style;
      expect(style.border).toBe('0px');
      expect(style.borderRadius).toBe('8px');
    });
  });

  describe('Accessibility', () => {
    it('has descriptive title attribute', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      expect(iframe).toHaveAttribute(
        'title',
        'Next Generation Therapy Location - Colchester Business Centre'
      );
    });

    it('has descriptive aria-label', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByLabelText(
        'Map showing location of Next Generation Therapy at Colchester Business Centre'
      );

      expect(iframe).toHaveAttribute(
        'aria-label',
        'Map showing location of Next Generation Therapy at Colchester Business Centre'
      );
    });

    it('provides text alternative for map content', () => {
      render(<GoogleMapEmbed />);

      // The location text serves as a text alternative for users who cannot see the map
      expect(screen.getByText(/our location:/i)).toBeInTheDocument();
      expect(
        screen.getByText(/colchester business centre, 1 george williams way, colchester co1 2js/i)
      ).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className when provided', () => {
      const { container } = render(<GoogleMapEmbed className="custom-map-class" />);
      const wrapper = container.firstChild as HTMLElement;

      expect(wrapper).toHaveClass('custom-map-class');
    });

    it('renders without className when not provided', () => {
      const { container } = render(<GoogleMapEmbed />);
      const wrapper = container.firstChild as HTMLElement;

      expect(wrapper.className).toBe('');
    });
  });

  describe('Location Information', () => {
    it('references business in iframe title and aria-label', () => {
      render(<GoogleMapEmbed />);
      expect(screen.getByTitle(/next generation therapy/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/next generation therapy/i)).toBeInTheDocument();
    });

    it('displays complete address', () => {
      render(<GoogleMapEmbed />);

      expect(screen.getByText(/colchester business centre/i)).toBeInTheDocument();
      expect(screen.getByText(/1 george williams way/i)).toBeInTheDocument();
      expect(screen.getByText(/colchester co1 2js/i)).toBeInTheDocument();
    });

    it('formats location text with proper styling', () => {
      render(<GoogleMapEmbed />);

      const locationText = screen.getByText(/our location:/i).closest('p');
      expect(locationText).toHaveStyle({ fontSize: '0.875rem' });
      expect(locationText).toHaveStyle({ color: '#666' });
      expect(locationText).toHaveStyle({ marginTop: '0.5rem' });
      expect(locationText).toHaveStyle({ textAlign: 'center' });
    });

    it('emphasizes location label', () => {
      render(<GoogleMapEmbed />);

      const strongElement = screen.getByText('Our Location:');
      expect(strongElement.tagName.toLowerCase()).toBe('strong');
    });
  });

  describe('Performance Optimization', () => {
    it('uses lazy loading for iframe', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      expect(iframe).toHaveAttribute('loading', 'lazy');
    });

    it('has proper referrer policy for privacy', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      expect(iframe).toHaveAttribute('referrerPolicy', 'no-referrer-when-downgrade');
    });
  });

  describe('Map Functionality', () => {
    it('allows full screen mode', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );

      expect(iframe).toHaveAttribute('allowFullScreen');
    });

    it('contains expected location coordinates in URL', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );
      const src = iframe.getAttribute('src');

      // Check for Colchester-area coordinates (roughly 51.8958747, 0.9013397)
      expect(src).toMatch(/51\.89/); // Latitude
      expect(src).toMatch(/0\.90/); // Longitude
    });

    it('embeds correct business location', () => {
      render(<GoogleMapEmbed />);
      const iframe = screen.getByTitle(
        'Next Generation Therapy Location - Colchester Business Centre'
      );
      const src = iframe.getAttribute('src');

      // Check that the URL contains references to the business location
      expect(src).toMatch(/colchester.*business.*centre/i);
      expect(src).toMatch(/george.*williams.*way/i);
    });
  });

  describe('HTML Structure', () => {
    it('has proper semantic structure', () => {
      const { container } = render(<GoogleMapEmbed />);

      // Should have a wrapper div
      expect(container.firstChild?.nodeName.toLowerCase()).toBe('div');

      // Should contain an iframe
      const iframe = container.querySelector('iframe');
      expect(iframe).toBeInTheDocument();

      // Should contain location text
      const paragraph = container.querySelector('p');
      expect(paragraph).toBeInTheDocument();
    });

    it('maintains proper hierarchy', () => {
      const { container } = render(<GoogleMapEmbed />);
      const wrapper = container.firstChild as HTMLElement;

      expect(wrapper.children).toHaveLength(2); // iframe + paragraph
      expect(wrapper.children[0].tagName.toLowerCase()).toBe('iframe');
      expect(wrapper.children[1].tagName.toLowerCase()).toBe('p');
    });
  });

  describe('Error Handling', () => {
    it('renders gracefully with undefined className', () => {
      expect(() => {
        render(<GoogleMapEmbed className={undefined} />);
      }).not.toThrow();
    });

    it('renders consistently across multiple renders', () => {
      const { rerender } = render(<GoogleMapEmbed />);

      expect(
        screen.getByTitle('Next Generation Therapy Location - Colchester Business Centre')
      ).toBeInTheDocument();

      rerender(<GoogleMapEmbed className="test" />);

      expect(
        screen.getByTitle('Next Generation Therapy Location - Colchester Business Centre')
      ).toBeInTheDocument();
    });
  });
});
