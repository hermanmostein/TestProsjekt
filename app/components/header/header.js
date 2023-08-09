
"use client"
import { useRouter } from 'next/navigation';
import styles from './header.module.css'
import Link from "next/link";


export default function Header() {
  const router = useRouter();
    return (
      <header className={styles.container}>
        <nav className={styles.nav}>
          <div className={router.pathname === '/' ? styles.linkActive : styles.link}>
            <Link href="/">Home</Link>
          </div>
          <div className={router.pathname === '/' ? styles.linkActive : styles.link}>
            <Link href="/about">About</Link>
          </div>
          <div className={router.pathname === '/' ? styles.linkActive : styles.link}>
            <Link href="/resume">Resume</Link>
          </div>
          <div className={router.pathname === '/' ? styles.linkActive : styles.link}>
            <Link href="/fetch">Fetch</Link>
          </div>
        </nav>
      </header>
    );
  };
  
