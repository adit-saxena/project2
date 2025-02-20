import Header from './header';
import Hero from './hero';
import styles from './page.module.css';
import Work from './work'
import Tags from './tags'
import Footer from './footer'
import Clarity from '@microsoft/clarity';
import Workdrive from './workdrive';
import Hotjar from '@hotjar/browser';

const siteId = 5290994;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const projectId = "q3rubtkac"

Clarity.init(projectId);

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      
      <Hero />

        <section className={styles.work}>
        <Work 
        Tag1="Wireframing"
        Tag2="Prototyping"
        Tag3="Under NDA"
        Title="Judging a movie by its cover made easy & convenient"
        Url="./stagecover.png"
        PageUrl="/stage"
        backgroundColor="#670000"
        />

        <Workdrive 
        Tag1="In-Depth Interviews"
        Tag2="Wireframing"
        Tag3="UI Design"
        Title="Matchmaking done right - evaluating how Schmooze could do it better"
        Url="./schmoozecover.png"
        PageUrl="https://drive.google.com/file/d/1W_xGIY-43EVgrNdcKGNusVVSsSbO2a1S/view?usp=sharing"
        backgroundColor="#07008C"
      
        />

        <Workdrive 
        Tag1="Survey Design"
        Tag2="Wireframing"
        Tag3="Concept Testing"
        Title="Making gaming a bit more relaxing - and a lot less toxic"
        Url="./valorantcover.png"
        PageUrl="https://drive.google.com/file/d/1McBTaejw2VjvLo55hTbPdVNZnL8hfAUS/view"
        backgroundColor="#230000"
      
        />

        <Workdrive 
        Tag1="Internship"
        Tag2="Stakeholders Collab"
        Tag3="Research"
        Title="Building to improve efficiency of our on-field sales team"
        Url="./nurturecover.png"
        PageUrl="https://drive.google.com/file/d/1hibXJyl-nEYUOsyLJK21vgVIH_F57JVx/view"
        backgroundColor="#200054"
      
        />
        </section>
        <Footer />

        
      
    </div>
  );
}

