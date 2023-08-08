'use server';

import Link from "next/link";
import Image from 'next/image'
import styles from './components.css'

const Header = () => {
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
  
  export default Header;