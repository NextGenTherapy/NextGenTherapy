import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
    <main>
      <div>
        <h1>Andreea Horhocea</h1>
        <h2>Next Generation Counselling & Psychotherapy</h2>
      </div>
      
      <div className="button-links">
        <h4>Come explore a new path to healing with a safe space for growth and self-discovery!</h4>
        <button>Learn More</button>
        <button>Services</button>
        </div>

        <div className="intro">
          <p>
          <span>Hi! I am Andreea Horhocea.</span>
          </p>
              <p>
               <span>
                 A psychodynamic psychotherapist. I am offering 1 to 1 sessions in Colchester, Chelmsford and online. I work with people of any age who are looking to address mental health related challenges such as anxiety, depression, stress, eating disorders and more. I focus on creating a safe, compassionate and supportive environment where you can feel comfortable to achieve a meaningful and lasting change. 
              </span>
            </p> 
            <div className={"styles.imageContainer"}>
              <Image
                src="/../../public/images/andreea.jpg"
                alt="Andreea Horhochea"
                height={300}
                width={300}
                className={"styles.image"}
              />
            </div>
        </div>
    </main>
    </div>
  );
}
