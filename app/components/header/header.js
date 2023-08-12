import React from 'react';
import Link from 'next/link';
import styles from './header.module.css'
import Image from 'next/image'; 

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">Logo Placeholder</Link>
        <Link className={styles.link} href="/about">About</Link>
        <Link className={styles.link} href="/resume">Resume</Link>
        <Link className={styles.link} href="/fetch">Fetch</Link>
      </nav>
    </header>
  );
};

