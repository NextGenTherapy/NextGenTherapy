import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const pathname = usePathname();

  // Default breadcrumb items based on pathname
  const defaultItems: BreadcrumbItem[] = [{ name: 'Home', url: 'https://nextgentherapy.co.uk' }];

  // Add current page based on pathname
  if (pathname === '/services') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
  } else if (pathname === '/pricing') {
    defaultItems.push({ name: 'Pricing', url: 'https://nextgentherapy.co.uk/pricing' });
  } else if (pathname === '/about') {
    defaultItems.push({ name: 'About', url: 'https://nextgentherapy.co.uk/about' });
  } else if (pathname === '/faq') {
    defaultItems.push({ name: 'FAQ', url: 'https://nextgentherapy.co.uk/faq' });
  } else if (pathname === '/trust') {
    defaultItems.push({ name: 'Trust & Care', url: 'https://nextgentherapy.co.uk/trust' });
  } else if (pathname === '/book-now') {
    defaultItems.push({ name: 'Book Now', url: 'https://nextgentherapy.co.uk/book-now' });
  } else if (pathname === '/child-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Child Therapy', url: 'https://nextgentherapy.co.uk/child-therapy' });
  } else if (pathname === '/teenage-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Teenage Therapy', url: 'https://nextgentherapy.co.uk/teenage-therapy' });
  } else if (pathname === '/young-adult-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Young Adult Therapy', url: 'https://nextgentherapy.co.uk/young-adult-therapy' });
  } else if (pathname === '/lgbtq-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'LGBTQ+ Therapy', url: 'https://nextgentherapy.co.uk/lgbtq-therapy' });
  } else if (pathname === '/neurodiversity-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Neurodiversity Therapy', url: 'https://nextgentherapy.co.uk/neurodiversity-therapy' });
  } else if (pathname === '/parent-support') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Parent Support', url: 'https://nextgentherapy.co.uk/parent-support' });
  } else if (pathname === '/location') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
  } else if (pathname === '/about-therapy') {
    defaultItems.push({ name: 'About Therapy', url: 'https://nextgentherapy.co.uk/about-therapy' });
  } else if (pathname === '/youth-family-faq') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Youth & Family FAQ', url: 'https://nextgentherapy.co.uk/youth-family-faq' });
  } else if (pathname === '/blog') {
    defaultItems.push({ name: 'Blog', url: 'https://nextgentherapy.co.uk/blog' });
  } else if (pathname?.startsWith('/blog/')) {
    defaultItems.push({ name: 'Blog', url: 'https://nextgentherapy.co.uk/blog' });
    const slug = pathname.split('/blog/')[1];
    const title = slug?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) || 'Article';
    defaultItems.push({ name: title, url: `https://nextgentherapy.co.uk${pathname}` });
  }

  const breadcrumbItems = items || defaultItems;

  if (breadcrumbItems.length <= 1) return null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}
