import Header from './header';
import Hero from './hero';
import styles from './page.module.css';
import Work from './work'
import Tags from './tags'


export default function() {
  return (
    <div className={styles.container}>
      <Header/>
      
      <Hero />

        <Work 
        Tag1="Wireframing"
        Tag2="Prototyping"
        Title="Re-engaging users through content watchlist"
        Url="./image 8.png"
        />
        

        <section className={styles.work}>
        <img 
            src="Schmooze.png"
            alt="Descriptive Alt Text"
            className={styles.heroimage}
          />
          <h2>Postman, 2023</h2>
          <p>
            Helped API developers find content they're already working with and discover relevant
            content in new workspaces fast.
          </p>
        </section>
      
    </div>
  );
}

