import React from "react";
import Clock from "react-live-clock";

export default function MyClock() {
    return (
        <div className={styles.clock}>
            <Clock
            format={'h:mm:ssa'}   
            />  
        </div>
    )
}