'use client';

import styles from '../page.module.css';
import { motion } from 'framer-motion';

export default function Header({ BGColor, DSColor }) {
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: BGColor,
        boxShadow: DSColor ? `0px 1px 0px ${DSColor}` : 'none',
      }}
    >
      <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}>
      <p>
        <i>Hi! I'm </i><b>Adit Saxena</b>
      </p>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 20, scale:1 }}
      animate={{ opacity: 1, x: 0, scale:1 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9}}>
      <nav>
        <a href="/Resume_AditSaxena.pdf" target='_blank' className={styles.resumeButton}>Resume</a>
      </nav>
      </motion.div>
    </header>
  );
}
