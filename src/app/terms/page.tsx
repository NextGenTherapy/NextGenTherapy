import type { Metadata } from "next";
import styles from "./terms.module.scss";
import LegalNavigation from "../../components/layout/legal-navigation";

export const metadata: Metadata = {
  title: "Terms of Service - Next Generation Therapy",
  description: "Terms of service and conditions of use for Next Generation Therapy website and services.",
};

export default function Terms() {
  return (
    <div className={styles.page}>
      <main className={styles.terms}>
        <LegalNavigation currentPage="terms" />
        
        <h1>Terms of Service</h1>
        <p><strong>Last updated: January 1, 2025</strong></p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms 
            and conditions of this agreement. If you do not agree to abide by the above, please 
            do not use this service.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Next Generation 
            Therapy&apos;s website for personal, non-commercial transitory viewing only. This is the grant 
            of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2>3. Professional Services Disclaimer</h2>
          <p>
            Next Generation Therapy provides professional psychotherapy services. The information 
            on this website is for general informational purposes only and does not constitute 
            medical or therapeutic advice. Always consult with a qualified healthcare professional 
            for specific concerns.
          </p>
        </section>

        <section>
          <h2>4. Privacy</h2>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
            and protect your information when you use our Service.
          </p>
        </section>

        <section>
          <h2>5. Disclaimer</h2>
          <p>
            The materials on Next Generation Therapy&apos;s website are provided on an &apos;as is&apos; basis. 
            Next Generation Therapy makes no warranties, expressed or implied, and hereby disclaims 
            and negates all other warranties including without limitation, implied warranties or 
            conditions of merchantability, fitness for a particular purpose, or non-infringement 
            of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2>6. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us through 
            our contact form or at the address provided on our website.
          </p>
        </section>
        
        <LegalNavigation currentPage="terms" />
      </main>
    </div>
  );
}
