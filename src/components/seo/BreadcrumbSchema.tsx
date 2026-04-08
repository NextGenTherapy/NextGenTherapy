'use client';

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
  } else if (pathname === '/therapy-for-women') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Therapy for Women', url: 'https://nextgentherapy.co.uk/therapy-for-women' });
  } else if (pathname === '/neurodiversity') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Neurodiversity', url: 'https://nextgentherapy.co.uk/neurodiversity' });
  } else if (pathname === '/teen-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Teen Therapy', url: 'https://nextgentherapy.co.uk/teen-therapy' });
  } else if (pathname === '/child-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Child Therapy', url: 'https://nextgentherapy.co.uk/child-therapy' });
  } else if (pathname === '/romanian-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Romanian Therapy', url: 'https://nextgentherapy.co.uk/romanian-therapy' });
  } else if (pathname === '/online-therapy') {
    defaultItems.push({ name: 'Services', url: 'https://nextgentherapy.co.uk/services' });
    defaultItems.push({ name: 'Online Therapy', url: 'https://nextgentherapy.co.uk/online-therapy' });
  } else if (pathname === '/location') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
  } else if (pathname === '/is-this-right-for-you') {
    defaultItems.push({ name: 'Is This Right for You?', url: 'https://nextgentherapy.co.uk/is-this-right-for-you' });
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
  } else if (pathname === '/privacy-policy') {
    defaultItems.push({ name: 'Privacy Policy', url: 'https://nextgentherapy.co.uk/privacy-policy' });
  } else if (pathname === '/terms') {
    defaultItems.push({ name: 'Terms & Conditions', url: 'https://nextgentherapy.co.uk/terms' });
  } else if (pathname === '/therapy-in-colchester') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Colchester', url: 'https://nextgentherapy.co.uk/therapy-in-colchester' });
  } else if (pathname === '/therapy-in-wivenhoe') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Wivenhoe', url: 'https://nextgentherapy.co.uk/therapy-in-wivenhoe' });
  } else if (pathname === '/therapy-in-mersea') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Mersea', url: 'https://nextgentherapy.co.uk/therapy-in-mersea' });
  } else if (pathname === '/therapy-in-tiptree') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Tiptree', url: 'https://nextgentherapy.co.uk/therapy-in-tiptree' });
  } else if (pathname === '/therapy-in-marks-tey') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Marks Tey', url: 'https://nextgentherapy.co.uk/therapy-in-marks-tey' });
  } else if (pathname === '/therapy-in-manningtree') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Manningtree', url: 'https://nextgentherapy.co.uk/therapy-in-manningtree' });
  } else if (pathname === '/therapy-in-clacton') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Clacton', url: 'https://nextgentherapy.co.uk/therapy-in-clacton' });
  } else if (pathname === '/therapy-in-ipswich') {
    defaultItems.push({ name: 'Location', url: 'https://nextgentherapy.co.uk/location' });
    defaultItems.push({ name: 'Ipswich', url: 'https://nextgentherapy.co.uk/therapy-in-ipswich' });
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
