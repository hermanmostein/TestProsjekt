"use client"
import React, { useState, useEffect } from 'react';
import styles from './clock.module.css';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(formattedTime);
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className={styles.clock} dangerouslySetInnerHTML={{ __html: currentTime }} />;
};

export default Clock;
