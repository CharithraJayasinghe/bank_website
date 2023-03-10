import React from 'react'
import styles from './style';
import { Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, GetStarted, Hero, NavBar, FeedBackCard} from './components';
import './index.css';




const App = () =>  (
  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Stats/>
       <Business/>
       <Billing/>
       <CardDeal/>
       <Testimonials/>
       <Clients/>
       <CTA/>
       <Footer/>
       {/* <GetStarted/> */}
       <FeedBackCard/>
       
      </div>
    </div>

  </div>
  );


export default App