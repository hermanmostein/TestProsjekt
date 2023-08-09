import Hero from '../components/hero/hero'
import Header from '../components/header/header'
import styles from '../page.module.css'
import Image from 'next/image'
import Body from '../components/body/body'


export default function Resume() {
  return (
    <main className={styles.main}>
      <div>
        <Header/>
        <Hero text="MIN CV" color="brown"/>
        <Body 
        title="Kunnskap og erfaring"
        text="Jeg har en tverrfaglig utdannelse som har gitt meg bred kunnskap om alt i fra mediepolitikk og estetikk, til informasjonssystemer og Augmented Reality. Dessuten har jeg jobbet i flere ulike bransjer, deriblant som salgskonsulent og kunstskribent. Trykk på knappen under for å lese min fullstendige CV i PDF-format"
        imagePath="/images/skills.svg"
        altText="Denne seksjonen har et illustrasjonsbilde og tekst som trekker fram nøkkelkompetanse fra CV-en min."
        />
      </div>
    </main>
  )
}
