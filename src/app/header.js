'use client';

import Tabs from './tabs';
import styles from './page.module.css';

export default function Header(name) {
  return (
      <header className={styles.header}>
            <p>
                <i>Hi! I’m </i><b>Adit Saxena</b>
            </p>
            <nav>
                <a href="/resume" className={styles.resumeButton}>Resume</a>
            </nav>
        
       </header>
    
      
  );
} 
