import React from "react";

export const Features = (props) => {
  return (
    <div id="features" style={{ backgroundColor:"#fbf7f2", paddingBottom: 0}}>
      <div style={{padding: 20}}>
      <h2 className="font-bold text-2xl" style={{color:"#7c522a",marginLeft: 20}}>WHO WE ARE</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{width:'50%'}}>
          <p style={{fontWeight:"-moz-initial", color:"#7c522a", fontSize: 30}}>
            Step into the realm of the Soul Reps, where personalization fuels every interaction, and every connection is a stride toward triumph in the vibrant hospitality industry.
            <br />
            <br />
            Our mission is simple yet profound: to fortify your preference in the fiercely competitive hospitality sector through personalized engagement and visionary creativity.
          </p>
        </div>
        <div style={{width:'40%'}} >
          <img style={{ width: '100%', height: '100%' }} src="../img/globe.png" alt="Globe" />
        </div>
      </div>
    </div>
  );
};

export default Features;
