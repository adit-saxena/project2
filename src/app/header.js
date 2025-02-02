'use client';

import Tabs from './tabs';
import styles from './page.module.css';

export default function Header({ BGColor, DSColor }) {
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: BGColor,
        boxShadow: DSColor ? `0px 1px 0px ${DSColor}` : 'none',
      }}
    >
      <p>
        <i>Hi! I’m </i><b>Adit Saxena</b>
      </p>
      <nav>
        <a href="https://drive.google.com/file/d/1ooPnLnsSZYvygRQ34I-Na2zm7TqgI6Yc/view?usp=drive_link" target='blank' className={styles.resumeButton}>Resume</a>
      </nav>
    </header>
  );
}
