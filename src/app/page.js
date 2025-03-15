'use client';
import Header from './components/header';
import Hero from './components/hero';
import styles from './page.module.css';
import Work from './components/work'
import Tags from './components/tags'
import Footer from './components/footer'
import Workdrive from './components/workdrive';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      
      <Hero />
        <section className={styles.work}>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 1 }}
          animate={{
          opacity: 1,
          y: [0, -5, 0], // Floating effect after initial drop
          scale: 1,
          }}
          transition={{
          duration: 0.4, // Initial drop duration
          y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
    },
  }}
  whileHover={{ scale: 0.98, opacity: 0.9 }}
>
          
          <Work 
        Tag1="Wireframing"
        Tag2="Prototyping"
        Tag3="Under NDA"
        Title="Judging a movie by its cover made easy & convenient"
        Url="./stagecover.png"
        PageUrl="/stage"
        backgroundColor="#670000"
        />

        </motion.div>
        

        
        <motion.div
        initial={{ opacity: 0, y: 200, scale:1 }}
        animate={{ opacity: 1, y: 0, scale:1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 0.98, opacity: 0.9, }}
        
        >
        <Workdrive 
        Tag1="In-Depth Interviews"
        Tag2="Wireframing"
        Tag3="UI Design"
        Title="Matchmaking done right - evaluating how Schmooze could do it better"
        Url="./schmoozecover.png"
        PageUrl="https://drive.google.com/file/d/1W_xGIY-43EVgrNdcKGNusVVSsSbO2a1S/view?usp=sharing"
        backgroundColor="#07008C"
      
        />
        </motion.div>

        
        <motion.div
        initial={{ opacity: 0, y: 200, scale:1 }}
        animate={{ opacity: 1, y: 0, scale:1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 0.98, opacity: 0.9, }}
        
        >

        <Workdrive 
        Tag1="Survey Design"
        Tag2="Wireframing"
        Tag3="Concept Testing"
        Title="Making gaming a bit more relaxing - and a lot less toxic"
        Url="./valorantcover.png"
        PageUrl="https://drive.google.com/file/d/1McBTaejw2VjvLo55hTbPdVNZnL8hfAUS/view"
        backgroundColor="#230000"
      
        />

        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 200, scale:1 }}
        animate={{ opacity: 1, y: 0, scale:1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 0.98, opacity: 0.9, }}
        
        >

       

        <Workdrive 
        Tag1="Internship"
        Tag2="Stakeholders Collab"
        Tag3="Research"
        Title="Building to improve efficiency of our on-field sales team"
        Url="./nurturecover.png"
        PageUrl="https://drive.google.com/file/d/1hibXJyl-nEYUOsyLJK21vgVIH_F57JVx/view"
        backgroundColor="#200054"
      
        />
         </motion.div>
        </section>
        <Footer />

        
      
    </div>
  );
}

