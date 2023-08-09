import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Body from './components/body/body'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header/>
        <Hero text="HENRIK LEVLIN SINGSTAD NORDBERG" color="coral"/>
        <Body 
        title="Min portefølje"
        text="Heisann, så hyggelig at du plumpet innom! Mitt navn er Henrik, og jeg er en 25 år gammel UX-designer. Denne siden er laget i Next.js og er et øvingsprosjekt i JavaScript, Next.js og Front-End generelt. Bruk menyen øverst for å lese mer om hvilke andre prosjekter jeg er involvert i."
        imagePath="/images/henrik_landingpage.svg"
        altText="Denne seksjonen har et illustrasjonsbilde og tekst som viser hvem jeg er"
        />
        <Footer/>
      </div>
    </main>
  )
}

//https://kinsta.com/blog/next-js-portfolio/
