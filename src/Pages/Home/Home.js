import React, { Children } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Card-1_Hero/Hero';
import EnjoyYourTV from './Components/Card-2_EnjoyYourTV/EnjoyYourTV';
import Download from './Components/CArd-3_Download/Download';
import ChildrenProfile from './Components/Card-5_Children/ChildrenProfile';
import WatchEverywhere from './Components/Card-4_WatchEverywhere/WatchEverywhere';
import FAQ from './Components/Card-6_FAQ/FAQ';
import Footer from './Components/CArd-7_Footer/Footer';




function Home() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <EnjoyYourTV/>
       <Download/>
       <WatchEverywhere/>
       <ChildrenProfile/>
       <FAQ/>
       <Footer/>
    </>
  )
}

export default Home