import Image from "next/image";
import styles from './body.module.css'
import Link from "next/link";

export default function Body({title, text, imagePath, altText}) {
    return (
    <div className={styles.container}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.h2}>{text}</p>
        <div className={styles.imageContainer}>
            <Image className={styles.image} src={imagePath} alt={altText} width={400} height={300} />
        </div> 
    </div>
 );
};
