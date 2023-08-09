import Hero from '../components/hero/hero'
import Header from '../components/header/header'
import styles from '../page.module.css'
import Image from 'next/image'
import Body from '../components/body/body'
import ListOfUsers from '../components/userList/user'


export default function Fetch() {
  return (
    <main className={styles.main}>
      <div>
        <Header/>
        <Hero text="DATA FETCHING" color="#B94358"/>
        <Body 
        title="UX Developer in the making"
        text="Denne siden har ingenting med porteføljen å gjøre, men hensikten er å vise at jeg mestrer å hente JSON-objekter fra et åpent API, som du kan se i kildekoden og animasjonen under. I dette tilfellet har jeg brukt følgende: https://jsonplaceholder.typicode.com/users"
        imagePath="/images/logoAPI.svg"
        altText="Denne seksjonen har et illustrasjonsbilde og en beskrivelse av en fiktiv navneliste."
        />
        <ListOfUsers/>
      </div>
    </main>
  )
}
