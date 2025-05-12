// pages/project/my-project.js

import HeaderP from '../components/headerProjects';
// import styles from '../page.module.css'; // Assuming this is not the primary style source for this page structure
import stylesw from './watchlist.module.css'; // Using watchlist.module.css as in the Schmooze page
import Workrow from './workrow'; // Assuming Workrow component exists and works as before
import SolutionBlock from '../components/SolutionBlock';

// Import the Next.js Image component if you plan to use it for optimization
// import Image from 'next/image';

export default function MyProject() {
    // --- Style Definitions (similar to Schmooze page) ---
     const heroImageStyle = {
        width: '100%',
        height: '30vh',
        objectFit: 'cover',
        display: 'block',
        borderRadius: '8px',
        border: '1px solid #eee',
        marginTop: '0px'
    };

    const otherImageStyle = {
        width: '70%', // Consistent with Schmooze
        height: 'auto',
        maxHeight: '50vh', // Consistent with Schmooze
        display: 'block',
        borderRadius: '8px',
        border: '1px solid #eee',
        margin: '2vh auto' // Added some vertical margin for spacing within Workrow
    };

    const figureStyle = {
        textAlign: 'center',
        margin: '3vh auto'
    };

    const figcaptionStyle = {
        marginTop: '0.5em',
        fontSize: '0.9em',
        color: '#555'
    };

    const listItemStyle = {
        marginBottom: '0.5em' // Consistent with Schmooze
    };

    const ulStyle = {
        listStyleType: 'disc', // Or 'circle', 'square'. Schmooze used 'none' for some lists, but 'disc' is a common default. Adjust if needed.
        listStylePosition: 'outside', // 'inside' as in Schmooze, or 'outside'
        marginTop: '1em',
        paddingLeft: '20px' // Indent list items if not using list-style-position: inside;
    };


    return (
        <div className={stylesw.container}>
            <HeaderP
                BGColor={"#ffffff"}
                DSColor={"rgba(0, 0, 0, 0.05 )"}
            />

            {/* Hero Section: Updated to reflect the broader scope of personalization and retention */}
            <div className={stylesw.hero}>
                <div className={stylesw.herotext}>
                    <p>STAGE, 2025</p>
                    <h5>Building a Personalized OTT Experience for Bharat: Driving Engagement and Retention through Strategic Design Initiatives</h5>
                    <hr />
                </div>
                <div className={stylesw.heroimg}>
                    <figure style={figureStyle}>
                     <img
                         src="/StageWorksAnimations.gif"
                         alt="Schmooze Project Hero Banner"
                         style={heroImageStyle}
                     />
                     <figcaption style={figcaptionStyle}>
                          {/* Caption for hero banner */}
                     </figcaption>
                   </figure>
                </div>
            </div>
           

            <section className={stylesw.work}>
                 
                {/*
                    -------------------------------------------------------------------
                    PRIMARY CASE STUDY: Building Explicit Feedback Mechanism for Better Personalization & Retention
                    -------------------------------------------------------------------
                */}
                <Workrow
                    serial="01"
                    heading="OVERVIEW & BUSINESS PROBLEM"
                    description={
                        <span>
                            {"Stage is a regional SVOD OTT platform with 4M+ subscribers. A core challenge was "}<strong>58% of trial users declined autopay</strong>{", citing a "}<strong>lack of relevant content</strong>{" despite a large library. This project aimed to solve this by "}<strong>improving content personalization and engagement</strong>{"."}
                            
                        </span>
                    }
                />
                <figure style={figureStyle}>
                                <img src="/stagetrialplan.png" alt="Stage's Pricing" style={otherImageStyle} />
                                <figcaption style={figcaptionStyle}>Stage's Pricing</figcaption>
                </figure>
                

                <Workrow
                    serial="02"
                    heading="MY ROLE & TEAM"
                    description={
                        <span>
                            {"As a "}<strong>Product Designer, I drove this initiative</strong>{", focusing on "}<strong>competitive audit, research, wireframing, prototyping, usability testing, and dev handoff</strong>{". I collaborated with a Senior Product Designer, Product Manager, and 6 Developers."}
                        </span>
                    }
                />

                <Workrow
                    serial="03"
                    heading="RESEARCH & INSIGHTS"
                    description={
                        <span>
                            {"We conducted "}<strong>extensive secondary research, including a competitive audit of 6+ leading SVOD platforms</strong>{" to analyze content surfacing strategies. We also "}<strong>researched recommendation engine models</strong>{" (Collaborative, Content, Hybrid Filtering) to inform our personalization strategy."}
                            
                        </span>
                    }
                />

                <Workrow
                    serial="04"
                    heading="STRATEGIC NEED FOR EXPLICIT FEEDBACK"
                    description={
                        <span>
                            {"Our existing recommendations lacked objective cues. Explicit feedback (like/dislike) was identified as the '"}<strong>ultimate source of truth</strong>{"' for user interest, serving as the "}<strong>backbone for a robust recommendation engine</strong>{", and directly "}<strong>improving retention and conversion</strong>{"."}
                        </span>
                    }
                />

                <Workrow
                    serial="05"
                    heading="STAKEHOLDER COLLABORATION & PROPOSALS"
                    description={
                        <span>
                            {"We proposed two feedback collection methods: simple voluntary interactions for overall satisfaction, and objective Likert scales for ML algorithms. We "}<strong>aligned with stakeholders</strong>{" to "}<strong>prioritize a user-friendly, industry-standard interaction model for higher adoption</strong>{"."}
                        </span>
                    }
                />

                <Workrow
                    serial="06"
                    heading="USER FLOWS & TOUCHPOINTS"
                    description={
                        <span>
                            {"User flows were designed to "}<strong>integrate feedback collection seamlessly into key user journeys</strong>{", such as post-content viewing and on content detail screens, based on competitive analysis."}
                            <figure style={figureStyle}>
                                <img src="/UserTouchPoints.png" alt="User Touchpoints for Feedback Collection" style={otherImageStyle} />
                                <figcaption style={figcaptionStyle}>User Touchpoints for Feedback Collection</figcaption>
                            </figure>
                        </span>
                    }
                />

                <Workrow
                    serial="07"
                    heading="ICON RESEARCH & USABILITY TESTING"
                    description={
                        <span>
                            {"A "}<strong>rigorous on-ground research (two rounds)</strong>{" was conducted to identify "}<strong>culturally appropriate and intuitive icons for our regional audience</strong>{". This "}<strong>directly impacted usability and data quality</strong>{"."}
                            <figure style={figureStyle}>
                                <img src="/EarlyStageIcons.png" alt="Early Ideations and Concepts for Feedback Icons" style={otherImageStyle} />
                                <figcaption style={figcaptionStyle}>Initial Icon Ideations</figcaption>
                            </figure>
                            <figure style={figureStyle}>
                                <img src="/StageLaterIcons.png" alt="Icons Considered During Research for Cultural Relevance" style={otherImageStyle} />
                                <figcaption style={figcaptionStyle}>Icons Considered During Research for Cultural Relevance</figcaption>
                            </figure>
                        </span>
                    }
                />

                <Workrow
                    serial="08"
                    heading="DESIGN DETAILS: FINAL UI (Feedback Mechanism)"
                    description={
                        <span>
                            {"The final UI was designed for "}<strong>seamless integration and ease of use across Mobile, Web, and TV</strong>{". "}<strong>Strategic placement</strong>{" on content detail screens, within the video player, and on home screens ensures intuitive user interaction."}
                            
                        </span>
                    }
                />

                <figure style={figureStyle}>
                    <img src="/StageMobile.png" alt="Final UI of Feedback Mechanism on Mobile Details Screen" style={otherImageStyle} />
                    <figcaption style={figcaptionStyle}>Mobile UI</figcaption>
                </figure>

                <figure style={figureStyle}>
                    <img src="/StageTV.png" alt="Final UI of Feedback Mechanism on Mobile Home Screen" style={otherImageStyle} />
                    <figcaption style={figcaptionStyle}>TV UI</figcaption>
                </figure>

                <figure style={figureStyle}>
                    <img src="/StageWeb.png" alt="Final UI of Feedback Mechanism on Web Details Screen" style={otherImageStyle} />
                    <figcaption style={figcaptionStyle}>Web UI</figcaption>
                </figure>
                

                <Workrow
                    serial="09"
                    heading="OUTCOME & IMPACT"
                    description={
                        <span>
                            {"This feedback mechanism is a "}<strong>foundational element for Stage's growth</strong>{". By collecting direct user preferences, we've established a "}<strong>crucial data source for our recommendation engine</strong>{", leading to:"}
                            <ul style={ulStyle}>
                                <li style={listItemStyle}><strong>Better Recommendations:</strong>{"More precise and personalized content discovery."}</li>
                                <li style={listItemStyle}><strong>Enhanced Engagement:</strong> {"Increased time on platform due to relevant content."}</li>
                                <li style={listItemStyle}><strong>Improved Retention:</strong> {"Reduced trial-to-paid subscriber churn."}</li>
                                <li style={listItemStyle}><strong>Increased Conversions:</strong> {"Directly impacting business goals."}</li>
                            </ul>
                           
                        </span>
                    }
                />

                {/*
                    -------------------------------------------------------------------
                    SECONDARY PROJECTS & KEY INITIATIVES
                    -------------------------------------------------------------------
                */}
                <hr />
                
            </section>
        </div>
    );
}