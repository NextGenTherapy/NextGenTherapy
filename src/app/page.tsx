import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/button";

export default function Home() {
  return (
    <div className={styles.page}>
    <main>
      <div className={styles.imageLogoContainer}>
      
      
      <div className={styles.buttonLinks}>
        <h1>Come explore a new path to healing with a safe space for growth and self-discovery!</h1>
        <div className={styles.button}>
        <Button href="/therapy-101">Learn More</Button>
        <Button href="/services">Services</Button>
        </div>
        </div>
        </div>

        <div className={styles.introAndreea}>
          <div className={styles.textContainer}>
          <div className={styles.greeting}>
          <p>Hi! I am Andreea Horhocea.</p>
          </div>
          <div className={styles.description}>
              <p>
                 A psychodynamic psychotherapist. I am offering 1 to 1 sessions in Colchester, Chelmsford and online. I work with people of any age who are looking to address mental health related challenges such as anxiety, depression, stress, eating disorders and more. I focus on creating a safe, compassionate and supportive environment where you can feel comfortable to achieve a meaningful and lasting change. 
            </p> 
            </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/andreea.jpg"
                alt="Andreea Horhochea"
                height={300}
                width={300}
                className={styles.image}
              />
            </div>
        </div>
    </main>
    </div>
  );
}
