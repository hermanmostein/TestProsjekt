"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Body from './components/body/body'
import Footer from './components/footer/footer'
import MenuButton from './components/menubutton/menubutton';
import MegaMenu from './components/menu/menu';
import Link from 'next/link';

export default function Home() {
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
        {!showMegaMenu && windowWidth <= 768 &&(
        <MenuButton onClick={handleToggleMegaMenu} isVisible={!showMegaMenu} color="coral"/>
        )}
        {showMegaMenu ? (
          <MegaMenu onClose={handleToggleMegaMenu} />
        ) : (
          <div></div>
        )}
        <Hero text="HENRIK SINGSTAD NORDBERG" color="coral"/>
        <Body 
        title="Min portefølje"
        text="Heisann, så hyggelig at du plumpet innom! Mitt navn er Henrik, og jeg er en 25 år gammel UX-designer. Denne siden er laget i Next.js og er et øvingsprosjekt i JavaScript, React og Front-End generelt. Bruk menyen øverst for å lese mer om hvilke andre prosjekter jeg er involvert i." 
        imagePath="/images/henrik_landingpage.svg"
        altText="Denne seksjonen har et illustrasjonsbilde og tekst som viser hvem jeg er"
        />
        <Footer/>
      </div>
    </main>
  )
}

//https://kinsta.com/blog/next-js-portfolio/
