interface GoogleMapEmbedProps {
  className?: string;
}

export default function GoogleMapEmbed({ className }: GoogleMapEmbedProps) {
  return (
    <div className={className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7831946785746!2d0.9013397!3d51.8958747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c6e7b8b6e5b7%3A0x4c1e6f8a0b2c3d4e!2sColchester%20Business%20Centre%2C%201%20George%20Williams%20Way%2C%20Colchester%20CO1%202JS!5e0!3m2!1sen!2suk!4v1693507200000!5m2!1sen!2suk"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '8px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Next Generation Therapy Location - Colchester Business Centre"
        aria-label="Map showing location of Next Generation Therapy at Colchester Business Centre"
      />
      <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem', textAlign: 'center' }}>
        <strong>Our Location:</strong> Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
      </p>
    </div>
  );
}
