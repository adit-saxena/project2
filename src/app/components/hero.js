'use client';
import styles from '../page.module.css'; // Use your provided CSS file
import { motion } from 'framer-motion';

  


// 1. Variants for the main container (orchestrates top-level stagger)
const containerVariants = {
  hidden: { opacity: 1 }, // No animation needed for the container itself
  visible: {
    opacity: 1,
    transition: {
      // Stagger the animation start times of direct children (h2, experiences div, recentwork div)
      staggerChildren: 0.2, // Adjust time as needed (e.g., 0.2 seconds between each)
    },
  },
};

// 2. Variants for individual text/link items (h2, p, a)
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible and original position
    transition: { duration: 0.4, ease: "easeOut" }, // Animation for each item
  },
};

// 3. Variants for the experiences WRAPPER div
const experiencesWrapperVariants = {
  hidden: { opacity: 0 }, // Wrapper starts hidden
  visible: {
    opacity: 1, // Wrapper fades in
    transition: {
      duration: 0.3, // Wrapper fade-in duration
      // Delay the animation of children (the p tags) slightly after the wrapper starts
      delayChildren: 0.1,
      // If you had multiple p tags and wanted them staggered *within* this div:
      // staggerChildren: 0.15
    },
  },
};

// 4. Variants for the cuttochase WRAPPER div (with highlight)
const cuttochaseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

  

export default function Hero() {
  return (
    
    // Outer non-motion div - kept as requested
    <div>
      {/* Main motion container applying containerVariants */}
      
      <motion.div
        className={styles.hero} // Your existing hero styles applied
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="/stage"
          variants={cuttochaseVariants}
          className={styles.cuttochase}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
>
  Shortcut to my best work yet →
</motion.a>

        {/* Direct Child 1: The h2 tag */}
        {/* Animates first based on containerVariants stagger */}
       
         <motion.h2 variants={itemVariants}>
          <i>
            Data-driven <span> product designer  </span>, crafting seamless
            digital experiences that delight users - and businesses
          </i>
        </motion.h2>

        {/* Direct Child 2: The experiences div wrapper */}
        {/* This wrapper itself is now animated sequentially */}
        <motion.div
          className={styles.experiences} // Your existing experiences styles applied
          variants={experiencesWrapperVariants} // Simple fade for the wrapper
          // Inherits initial/animate state from 
          
        >
          
          {/* Grandchild 1: The first p tag */}
          {/* Animates based on itemVariants, triggered slightly after wrapper by delayChildren */}
          <motion.p variants={itemVariants}>
            12+ months of helping app-newbies feel at home
          </motion.p>
          

          {/* Grandchild 2: The second p tag */}
          {/* Animates based on itemVariants, triggered slightly after wrapper by delayChildren */}
          <motion.p variants={itemVariants}>
            Prev. @ <a href='https://stage.in/' target='blank'>Stage OTT</a> & <a href='https://nurture.farm/' target='blank'> nurture.farm </a>
          </motion.p>
        </motion.div>
        

        {/* Direct Child 3: The recentwork div wrapper */}
        {/* This wrapper itself is animated sequentially with the highlight effect */}
        
      </motion.div>
    </div>
  );
}