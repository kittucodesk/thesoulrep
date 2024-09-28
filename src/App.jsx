import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";


import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      {/* <Header data={landingPageData.Header} /> */}
        <Features data={landingPageData.Features} />
    {/*   <Section2 data={landingPageData.Section2} />
    
      <Services data={landingPageData.Services} />
      <Services1 data={landingPageData.Services1 }/>
      <Services3 data={landingPageData.Services3} />
      <Section3 data={landingPageData.Section3} />
     
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Section4 data={landingPageData.Section4} />  */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
