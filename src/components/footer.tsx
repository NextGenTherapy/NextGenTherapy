import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumn}>
                <Link href="/contact">
                        <h3>Location</h3>
                    </Link>
                <ul>
                    <li>
                        <a href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
                                target="_blank"
                                rel="noopener noreferrer">
                                Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
                            </a>
                        Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
                        </li>
                    <li>
                    <a
                                href="https://www.google.com/maps?q=The+Henry+Centre,+Rochester+House,+145+New+London+Rd,+Chelmsford+CM2+0QT"
                                target="_blank"
                                rel="noopener noreferrer">
                        The Henry Centre, Rochester House, 145 New London Rd, Chelmsford CM2 0QT
                        </a>
                        </li>
                </ul>
            </div>

            <div className={styles.footerColumn}>
                <h3>Hours</h3>
                <ul className="weekday">
                    <li>
                        Monday — Tuesday
                    </li>
                    <li>
                    10am - 7pm 
                    </li>
                    <li>
                    Friday
                    </li>
                    <li>
                    9am-2pm 
                    </li>
                    <li>
                    Saturday - Chelmsford
                    </li>
                    <li>
                    9am - 3pm 
                    </li>
                </ul>
            </div>

            <div className={styles.footerColumn}>
            <Link href="/contact">
                        <h3>Contact me</h3>
                    </Link>
                <p>
                    Email: <a href="mailto:andreeatherapytoday@gmail.com">andreeatherapytoday@gmail.com</a>
                </p>
                <p>
                    Phone: <a href="tell:+447448036017">+447448036017</a>
                </p>
                <div className={styles.socialLinks}>
                    <a href="https://www.facebook.com/share/16dg5gpZRo/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Vist our Facebook page">
                        <Image src="/../../public/images/facebook.png" alt="Instagram" width={30} height={30} />
                    </a>
                    <a href="https://www.instagram.com/nextgentherapycolchester?igsh=MWx2N2g0NnI0eTVveQ%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Vist our Instagram page">
                        <Image src="/../../public/images/instagram.png" alt="Instagram" width={30} height={30} />
                    </a>
                    <a href="https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       title="Vist our BACP page">
                        <Image src="/../../public/images/bacp.png" alt="Instagram" width={30} height={30} />
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
}