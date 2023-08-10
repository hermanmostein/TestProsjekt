import styles from './menu.module.css'
import Link from "next/link";
import Image from 'next/image';


export default function Menu() {
    return (
    <div className={styles.default}>
        <Image src={"/images.menu.svg"} width={32} height={32} />
         <div className={styles.dropdown}>
            <div className={styles.link}>
                <Link href="/about">About</Link>
            </div>
            <div className={styles.link}>
                <Link href="/resume">Resume</Link>
            </div>
            <div className={styles.link}>
                <Link href="/fetch">Fetch</Link>
            </div>
        </div>
    </div>
    );
 };
  
