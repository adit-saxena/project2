// Make sure this line is at the very top
'use client';

import styles from '../page.module.css'; // Assuming your styles are here
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from "react-icons/io5"; // 1. Import an icon

export default function HeaderP({ BGColor, DSColor }) {
  const router = useRouter();

  const handleBackClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: BGColor,
        boxShadow: DSColor ? `0px 1px 0px ${DSColor}` : 'none',
      }}
    >
      <motion.div>
        {/* 2. Add icon and apply styles for alignment */}
        <motion.a
          onClick={handleBackClick}
          style={{ cursor: 'pointer' }}
          className={styles.backLink} // Add a class for styling
        >
          <IoArrowBack /> {/* Add the icon */}
          <span>Back to projects</span> {/* Keep text in a span for potential spacing */}
        </motion.a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <nav>
          <a
            href="https://drive.google.com/file/d/1ooPnLnsSZYvygRQ34I-Na2zm7TqgI6Yc/view?usp=drive_link"
            target='_blank'
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            Resume
          </a>
        </nav>
      </motion.div>
    </header>
  );
}