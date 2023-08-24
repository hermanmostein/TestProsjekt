"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import Logo from '../logo/logo';

export default function Header({ color }) {
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Fetch', href: '/fetch' },
  ];

  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
      {isLandingPage ? (
          <img
          src="/icons/henrik_home.SVG"
          alt="Logo"
          className={styles.logoImage}
          width={200}
          height={50}
        />
        ) : (
        <Link href="/">
            <img
              src="/icons/Hjemrik_.SVG"
              alt="Logo"
              className={styles.logoImage}
              width={200}
              height={50}
            />
            {!isLandingPage && (
                <img
                  src="/icons/hjem.svg"
                  alt="Hover Logo"
                  className={styles.hoverLogo}
                  width={200}
                  height={50}
                  />
            )}
        </Link>
       )}
      </div>
      <nav className={styles.nav}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link href={link.href} key={link.name} className={`${styles.link} ${isActive ? styles.active : ''}`} style={{ color }}>
                {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
