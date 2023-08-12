"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.css'
import Image from 'next/image'; 


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 600) {
        setIsMenuOpen(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.link}>
          <Link href="/">Home</Link>
        </div>
        <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? (
            <img src="/icons/menu.svg" alt="Icon" className="icon" width={34}></img>
          ) : (
            <img src="/icons/close.svg" alt="Icon" className="icon" width={34}></img>
          )}
          </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <Link className={styles.link} href="/">Home</Link>
          <Link className={styles.link} href="/about">About</Link>
          <Link className={styles.link} href="/resume">Resume</Link>
          <Link className={styles.link} href="/fetch">Fetch</Link>
        </div>
      </nav>
    </header>
  );
};