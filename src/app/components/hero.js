'use client';
import styles from '../page.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div>
    <motion.div
            initial={{ opacity: 0, y: 20, scale:1.2 }}
            animate={{ opacity: 1, y: 0, scale:1 }}
            transition={{ duration: 0.4 }}
            className={styles.hero}>
            <h2>
            <i>Data-driven <span> product designer </span>, crafting seamless digital experiences that delight users - and businesses</i>
            </h2>
            <div className={styles.experiences}>
            <p>
             Currently Designing OTT Exprience @ Stage 
            </p>
            <p>
             Prev. @ nurture.farm
            </p>
            </div>
            </motion.div>
            </div>
    
      
  );
}
