"use client"
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';
import Hero from '../components/hero/hero';
import Body from '../components/body/body';
import Footer from '../components/footer/footer';
import MenuButton from '../components/menubutton/menubutton';
import MegaMenu from '../components/menu/menu';
import Header from '../components/header/header';
import Link from 'next/link';

export default function About() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setShowMegaMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMegaMenu = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  return (
    <main className={styles.main}>
      <div>
        <Header/>
        {!showMegaMenu && windowWidth <= 768 && (
          <MenuButton onClick={handleToggleMegaMenu} isVisible={!showMegaMenu} color="teal" />
        )}
        {showMegaMenu ? (
          <MegaMenu onClose={handleToggleMegaMenu} />
        ) : (
          <div></div>
        )}
        <Hero text="OM MEG" color="teal" />
        <Body
          title="Min bakgrunn"
          text="Jeg har en bachelorgrad i medievitenskap og en pågående master i medier og interaksjonsdesign. Det siste året har jeg vært ansatt som trainee i Visito, hvor jeg har vært så heldig å påta meg rollen som UX-lead i et samarbeidsprosjekt med Norsk Klimastiftelse. Jeg brenner for gode brukeropplevelser og minimalistisk design, som gjør det enkelt for brukeren å navigere mellom nødvendig informasjon."
          imagePath="/images/projects.svg"
          altText="Denne seksjonen har et illustrasjonsbilde og tekst som viser hva jeg er utdannet som og er opptatt av."
        />
        <div>
          <Link className={styles.link} href="/projects/[slug]" as="/projects">Mine Prosjekter</Link>
        </div>
        <Footer />
      </div>
    </main>
  );
}
