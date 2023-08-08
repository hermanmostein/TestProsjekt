
import styles from './header.module.css'
import Link from "next/link";
import Image from 'next/image'

export default function Header() {
    return (
      <header className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.link}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.link}>
            <Link href="/about">About</Link>
          </div>
        </nav>
      </header>
    );
  };
  
