import styles from "./privacy-policy.module.scss";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <main className={styles.privacyPolicy}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.updated}>
          <strong>Last updated: 28 May 2025</strong>
        </p>

        <p>
          Next Generation Therapy (“we”, “us”, or “our”) is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and safeguard your information when you visit our website.
        </p>

        <h2 className={styles.sectionHeading}>Information We Collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Personal Information:</strong> When you fill out our contact
            form, we collect your name, email address, and any information you
            include in your message.
          </li>
          <li>
            <strong>Usage Data:</strong> We use Google Analytics to collect
            anonymized data about how visitors use our site (such as pages
            visited, device type, and general location). This data does not
            personally identify you.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to improve your experience
            and for analytics purposes. You can control cookies through your
            browser settings.
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>How We Use Your Information</h2>
        <ul className={styles.list}>
          <li>To respond to your enquiries submitted via our contact form.</li>
          <li>To improve our website and services.</li>
          <li>To analyze website usage via Google Analytics.</li>
        </ul>

        <h2 className={styles.sectionHeading}>Sharing Your Information</h2>
        <p>
          We do not sell or share your personal information with third parties
          except as necessary to provide our services (for example, email
          delivery via Resend) or as required by law.
        </p>

        <h2 className={styles.sectionHeading}>Your Rights</h2>
        <ul className={styles.list}>
          <li>
            You can request access to, correction of, or deletion of your
            personal data by contacting us.
          </li>
          <li>
            You can opt out of Google Analytics tracking using{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              this browser add-on
            </a>
            .
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a
            href="mailto:andreeatherapytoday@gmail.com"
            className={styles.link}
          >
            andreeatherapytoday@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
