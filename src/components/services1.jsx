import React from "react";

export const Services1 = (props) => {
  return (
    <div style={{backgroundColor:"#ebe7df"}} >

     
      
       
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
          <div style={{ width: '60%', padding: 40 }}>
            <div style={{backgroundColor: "#6a684c", height:'30%', width:"45%" , display: "flex", justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:10}} >
              <p style={{fontSize:30, color: "#fbf7f2"}}>Studio & Digital Marketing</p>
            </div>
            <p style={{ fontWeight: "-moz-initial", color: "#727059", fontSize: 25 }}>
            From content creation to branding, our creative
 team delivers innovative solutions and keeps you
 ahead of the curve. Expect innovative digital
 marketing solutions including social media
 management, email marketing and SEO/SEM
 strategies </p>
          </div>
          <div style={{ width: '40%' }} className="text-center">
            <img style={{ width: '60%', height: '60%' }} src="../img/highres-08.png" alt="Globe" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
        <div style={{ width: '40%' }} className="text-center">
            <img style={{ width: '60%', height: '60%' }} src="../img/highres-07.png" alt="Globe" />
          </div>
          <div style={{ width: '60%', padding: 40 }}>
            <div style={{backgroundColor: "#6a684c", height:'25%', width:"45%" , display: "flex", justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:10}} >
              <p style={{fontSize:30, color: "#fbf7f2"}}>Market Research</p>
            </div>
            <p style={{ fontWeight: "-moz-initial", color: "#727059", fontSize: 25 }}>
            Gain insights into market trends, consumer
 behaviour and competitors so you can
 maximize partnerships and develop integrated
 marketing plans for business growth </p>
          </div>
          
          {/* <div style={{ width: '40%' }} className="text-center">
            <img style={{ width: '60%', height: '60%' }} src="../img/highres-03.png" alt="Globe" />
          </div> */}
        </div>
        {/* <div  >
          <img style={{ width: '100%', height: '100%' }} src="../img/globe.png" alt="Globe" />
        </div> */}

        {/* <div style={{width:'40%'}} >
          <img style={{ width: '100%', height: '100%' }} src="../img/globe.png" alt="Globe" />
        </div> */}
      
    </div>
  );
};