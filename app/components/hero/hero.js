import Image from "next/image";
import styles from './hero.module.css'

export default function Hero({text, color}) {
    return (
      <div className={styles.container} style={{backgroundColor: color}}>
         <h1 className={styles.text}>{text}</h1>
      </div>
      );
    };