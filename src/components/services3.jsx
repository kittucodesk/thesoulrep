import React from "react";

export const Services3 = (props) => {
  return (
    <div style={{backgroundColor:"#ebe7df"}} >

     
      
       
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
          <div style={{ width: '60%', padding: 40 }}>
            <div style={{backgroundColor: "#7f8b81", height:'30%', width:"45%" , display: "flex", justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:10}} >
              <p style={{fontSize:30, color: "#fbf7f2"}}>PR & Media Relations</p>
            </div>
            <p style={{ fontWeight: "-moz-initial", color: "#15445b", fontSize: 25 }}>
            Our PR experts elevate your brand's visibility
 through effective media relations, press trips,
 targeted media placements and strategic
 partnerships with influencers and opinion leaders. </p>
          </div>
          <div style={{ width: '40%' }} className="text-center">
            <img style={{ width: '60%', height: '60%' }} src="../img/highres-09.png" alt="Globe" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
        <div style={{ width: '40%' }} className="text-center">
            <img style={{ width: '60%', height: '60%' }} src="../img/highres-06.png" alt="Globe" />
          </div>
          <div style={{ width: '60%', padding: 40 }}>
            <div style={{backgroundColor: "#7f8b81", height:'25%', width:"45%" , display: "flex", justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:10}} >
              <p style={{fontSize:30, color: "#fbf7f2"}}>Consultancy</p>
            </div>
            <p style={{ fontWeight: "-moz-initial", color: "#15445b", fontSize: 25 }}>
            Harness our decades of luxury hospitality expertise
 for tailored sales, marketing, and PR solutions. Our
 services span from hotel openings to strategic
 planning, encompassing market analysis, affiliations,
 design, and social media. Supported by industry
 partners, we guarantee exceptional offerings and
 foster direct business growth. </p>
          </div>
          
          
        </div>
        
      
    </div>
  );
};