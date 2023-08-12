import React from 'react';
import styles from './menubutton.module.css';
import Image from 'next/image';

export default function MenuButton({ onClick, isVisible, color }){
    return(
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`} onClick={onClick} style={{backgroundColor: color}}>
        <img className={styles.icon} src='/icons/menu.svg' alt="Menu"></img>
    </div>
    );
 }
