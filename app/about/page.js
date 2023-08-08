import Header from '../components/header/header'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Header />
        <h1 className={[styles.h1]}>
            Hei
        </h1>
    </div>
  )
}
