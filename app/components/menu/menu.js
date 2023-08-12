import React from 'react';
import Link from 'next/link';
import styles from './menu.module.css'

export default function MegaMenu({ onClose }){
    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className="container" onClick={onClose}>
                    <img className={styles.icon} src='/icons/close.svg' alt="Close"></img>
                </div>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/about">About</Link>
                <Link className={styles.link} href="/resume">Resume</Link>
                <Link className={styles.link} href="/fetch">Fetch</Link>
            </nav>
        </div>
    );
}

