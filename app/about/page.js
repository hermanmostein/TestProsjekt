import Header from '../components/header/header'
import styles from '../page.module.css'
import Hero from '../components/hero/hero'
import Image from 'next/image'
import Body from '../components/body/body'



export default function About() {
  return (
    <main className={styles.main}>
      <div>
        <Header/>
        <Hero text="OM MEG" color="teal"/>
        <Body 
        title="Min bakgrunn"
        text="Jeg har en bachelorgrad i medievitenskap og en pågående master i medier og interaksjonsdesign. Det siste året har jeg vært ansatt som trainee i Visito, hvor jeg har vært så heldig å påta meg rollen som UX-lead i et samarbeidsprosjekt med Norsk Klimastiftelse. Jeg brenner for gode brukeropplevelser og minimalistisk design, som gjør det enkelt for brukeren å navigere mellom nødvendig informasjon."
        imagePath="/images/projects.svg"
        altText="Denne seksjonen har et illustrasjonsbilde og tekst som viser hva jeg er utdannet som og er opptatt av."
        />
      </div>
    </main>
  )
}
