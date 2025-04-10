// pages/project/my-project.js

import HeaderP from '../components/headerProjects';
import Hero from '../components/hero';
import styles from '../page.module.css';
import stylesw from './watchlist.module.css';
import Work from '../components/work';
import Tags from '../components/tags'
import Workrow from './workrow'


export default function Watchlist() {
    return (
    
      <div className={stylesw.container}>
      <HeaderP
      BGColor={"#ffffff"}
      DSColor={"rgba(0, 0, 0, 0.05 )"}
      />
      
      <div className={stylesw.hero}>
        <div className={stylesw.herotext}>
          <p>
            STAGE, 2025
          </p>
          <h5>
            Made judging a movie by its cover easy and convenient - redesigning the content platter
          </h5>
        </div>
        <div className={stylesw.heroimg}>
        <img src="/synopsysstage.png" alt="Project Image"/>
        </div>
      </div>
       
      <section className={stylesw.work}>
        
        <Workrow 
          serial="01"
          heading="INTRODUCTION"
          description={<span>Stage is a regional dialect based <strong>OTT platform</strong> creating movies and web-series for Haryanvi, Rajasthani and Bhojpuri viewers. Back when I joined Stage, there was a huge <strong>stakeholder demand for a fresh UI</strong> to the homescreen. Since the platter is source to <strong> 17% of the total consumption </strong>, redesigning it was a major chunk of the larger homescreen redesign project</span>}
        />
          
        <Workrow 
          serial="02"
          heading="TEAM"
          description={<span>Me + Senior Product Designer +  Product Manager + 6 Developers</span>}
        />

        <Workrow 
          serial="03"
          heading="TOOLS"
          description={<span>Figma + ProtoPie + Amplitude + Slack + Notion</span>}
        />

        <Workrow 
          serial="04"
          heading="MY ROLE"
          description={<span>Competitive Audit + Wireframing + Prototyping + Usability Testing + Dev Handoff </span>}
        />

        <Workrow 
          serial="05"
          heading="SETTING THE TONE"
          description={<span>While starting off, I had a few early ideations from my senior product designer from how she visualized it based on her understanding. Having a firm enough point to build on, I thought of primarily getting myself comfortable with how things are being done in the industry and decided to get some <strong>competitive audit for 6+ OTT platforms like Disney Hotstar, Netflix, SonyLiv etc. </strong></span>}
        />
        <Workrow 
          serial="06"
          heading="UNDERSTANDING THE TRENDS"
          description={<span>During the competitive audit, we realised how many OTT platforms have switched to <strong>showing trailers in the platter</strong> itself to build good initial engagement for the users. We <strong>pitched the idea to the stakeholders</strong>, and got an initial nod along with a huge buy-in.</span>}
        />
        <Workrow 
          serial="07"
          heading="INITIAL IDEATION"
          description={<span>We started some <strong>early ideations </strong>on how a trailer can be integrated into our platter - and came up with a few different <strong>animations</strong> that could greatly boost our UI - while also helping the user judge the content better. While we had a lot and lot of questions while executing this phase, we focussed on <strong> quick iterations</strong> based on the past researches and user data.</span>}
        />

        <Workrow 
          serial="08"
          heading="BUT - THE NDA"
          description={<span>Hey! Thanks for scrolling this far. As of 20th Feb, this project is under NDA, but I would still love the opportunity to discuss it in person. Also, if I could make you scroll this far, that means <strong>I am worth a shot for the role you're considering. Thanks!</strong></span>}
        />
      </section>
      </div>
    );
  }
  