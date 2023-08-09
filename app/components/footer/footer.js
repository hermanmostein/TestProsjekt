import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
      <div className={styles.container}>
         <h1 className={styles.text}>Tips til forbedringer?</h1>
         <Link href="mailto:henrik@visito.no" className={styles.button}>Ta Kontakt</Link>
      </div>
      );
    };