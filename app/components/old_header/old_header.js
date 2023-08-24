import React from 'react';
import styles from './old_header.module.css';
import useMegaMenuLogic from '../logic/logic';
import Link from 'next/link';

const Header = ({ color }) => {
  const { showMegaMenu, handleToggleMegaMenu, handleCloseMegaMenu } = useMegaMenuLogic();

  return (
    <header className={styles.header}>
      {showMegaMenu ? (
        <div className={styles.megaMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/fetch">Fetch</Link>
          <div className={styles.closeButton} onClick={handleCloseMegaMenu}>
            <img src='/icons/close.svg' alt="Close"></img>
          </div>
        </div>
      ) : (
        <nav className={styles.nav}>
          <Link href="/">Logo Placeholder</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/fetch">Fetch</Link>
          <div className={styles.menuButton}>
            <div className={`button-icon ${showMegaMenu ? 'open' : ''}`} onClick={handleToggleMegaMenu} style={{ backgroundColor: color }}>
              <img className={styles.icon} src='/icons/menu.svg' alt="Menu"></img>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
