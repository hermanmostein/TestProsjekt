import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header/>
      </div>
    </main>
  )
}
