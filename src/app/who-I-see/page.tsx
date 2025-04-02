import type { Metadata } from "next";
import Image from "next/image";
import styles from "./who-i-see.module.css";
import Button from "../../components/button";


export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "Why Therapy - Next Generation Therapy",
    description: "Learn why therapy is important and how it can help you achieve personal growth and emotional well-being.",
  };


export default function WhoISee() {
return (
    <div className={styles.page}>
        <main className={styles.main}>
                <div className={styles.header}>
                    <h1> Who do I work with? Where do I work?</h1>
                </div>
                
                <div className={styles.intro}>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/images/andreea.jpg"
                        alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                        height={300}
                        width={300}
                        className={styles.image}
                     />
                        <div className={styles.list}>
                            <ul>
                                <li>Children and young people</li>
                                <li>Adults experiencing anxiety</li>
                                <li>Clients dealing with depression</li>
                                <li>Individuals who have suffered abuse</li>
                                <li>Trauma survivors</li>
                                <li>People grieving or experiencing loss</li>
                                <li>Individuals with eating disorders</li>
                                <li>Clients facing identity issues</li>
                                <li>People with low self-esteem</li>
                                <li>Clients experiencing emotional distress</li>
                                <li>ADD/ ADHD related struggles</li>
                                <li>Neurodiversity</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.photoGallery}>
                <Image
                        src="/images/andreea.jpg"
                        alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                        height={300}
                        width={300}
                        className={styles.image}
                     />
                <Image
                        src="/images/andreea.jpg"
                        alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                        height={300}
                        width={300}
                        className={styles.image}
                     />
                <Image
                        src="/images/andreea.jpg"
                        alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                        height={300}
                        width={300}
                        className={styles.image}
                     /> 
                <Image
                        src="/images/andreea.jpg"
                        alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                        height={300}
                        width={300}
                        className={styles.image}
                     />
                <Image
                        src="/images/andreea.jpg"
                        alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                        height={300}
                        width={300}
                        className={styles.image}
                     />
                <Image
                        src="/images/andreea.jpg"
                        alt="Andreea Horhocea - Psychodynamic Psychotherapist"
                        height={300}
                        width={300}
                        className={styles.image}
                     />                       
                </div>
            <div className={styles.location}>
                <div className={styles.textContainer}>
                    <h2>This is the Google map location, so you can get to me easily and as stress free as possible.</h2>
                </div>
                <div className={styles.map}>
                  <iframe
                    src="https://maps.app.goo.gl/wYpBfy1MWHHvVFYWA"
                    className={styles.iframe}
                    allowFullScreen={true}
                    title="Google Map showing San Francisco, CA, USA"
                  ></iframe>
                </div>
            </div>

            <div className={styles.buttonLink}>
                <Button href="/about">About Me</Button>
                <Button href="/services">Services</Button>
                <Button href="/book-now">Book Now</Button>
            </div>
        </main>
    </div>
)
}