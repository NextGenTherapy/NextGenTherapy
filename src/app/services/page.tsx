import type { Metadata } from "next";
import Image from "next/image";
import styles from "./services.module.css";
import Button from "../../components/button";

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "Services - Next Generation Therapy",
    description:
      "Explore the therapy services offered by Andreea Horhocea, including play therapy for children and talking therapy for adults. Sessions are available in-person in Colchester or online, tailored to help with anxiety, self-esteem, body image, relationships, and more.",
  };
  
export default function Services () {
return (
    <div className={styles.page}>
        <main className={styles.main}>
            <div className={styles.intro}>
                <div className={styles.introHeading}>
                    <h1>Services provided</h1>
                </div>
                <div className={styles.introContent}>
                    <div className={styles.introText}>
                        <h2>I offer personalized therapy sessions tailored to anyone facing:</h2>
                        <ul>
                            <li>Anxiety & Overwhelm: Managing persistent worry and finding calm.</li>
                            <li>Self-Esteem & Confidence: Building a stronger sense of self-worth.</li>
                            <li>Body Image & Eating Concerns: Developing a healthier relationship with food and your body.</li>
                            <li>Relationship Patterns: Understanding and improving interpersonal dynamics.</li>
                            <li>Or for Teenagers struggling with the complexities of becoming who they want to be.</li>
                            <li>Sessions are available in-person in Colchester or online, providing flexibility to suit your lifestyle.</li>
                        </ul>
                    </div>
                    <div className={styles.introImage}>
                        <Image
                            src="/images/bacp.jpg"
                            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                            height={300}
                            width={300}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
                
                <div className={styles.children}>
                <div className={styles.childrenText}>
                        <h2>Play therapy for Children.</h2>
                        <p>£60 for the therapeutic hour (50 mins).</p>
                        <p>Discover the benefits in a safe space.</p>
                    </div>
                    <div className={styles.childrenImage}>
                    <Image
                       src="/images/bacp.jpg"
                       alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                       height={300}
                       width={300}
                       className={styles.image}
                    />
                    </div>
                    </div>
                    
                    <div className={styles.adults}>
                        <div className={styles.adultsImage}>
                        <Image
                          src="/images/bacp.jpg"
                          alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                          height={300}
                          width={300}
                          className={styles.image}
                         />
                        </div>
                        <div className={styles.adultsText}>
                            <h2>Talking therapy Online or In person.</h2>
                            <p>£60 for the therapeutic hour (50 mins).</p>
                            <p>Explore new perspectives and grow.</p>
                        </div>
                    </div>
                        
                        <div className={styles.buttonLinks}>
                            <Button href="/who-i-see">Who I See</Button>
                            <Button href="/about">About me</Button>
                            <Button href="/book-now">Book Now</Button>
                        </div>          
        </main>
    </div>
)
}