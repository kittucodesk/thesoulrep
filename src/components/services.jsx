import React from "react";

export const Services = (props) => {
  return (
    <div id="services" >

      <div style={{ padding: 20 }}>
        <h2 className="font-bold text-2xl" style={{ color: "#7c522a", marginLeft: 20 }}>Our Services</h2>
      </div>
      
        <div style={{ width: '100%', padding: 40 }}>

          <p style={{ fontWeight: "-moz-initial", color: "#7c522a", fontSize: 30 }}>
            At The Soul Rep, we are committed to providing a comprehensive suite of services
            tailored to meet the distinct needs of our clients. Here's how we can assist you in
            enhancing your brand presence and achieving your business goals

          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
          <div style={{ width: '60%', padding: 40 }}>
            <div style={{backgroundColor: "#7f8b81", height:'20%', width:"45%" , display: "flex", justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:10}} >
              <p style={{fontSize:30, color: "#fbf7f2"}}>Sales And Marketing</p>
            </div>
            <p style={{ fontWeight: "-moz-initial", color: "#15445b", fontSize: 25 }}>
            Our expert team provides strategic guidance to
 optimize your sales and marketing efforts, ensuring
 maximum ROI and audience reach </p>
          </div>
          <div style={{ width: '40%' }} className="text-center">
            <img style={{ width: '60%', height: '60%' }} src="../img/highres-03.png" alt="Globe" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
        <div style={{ width: '40%' }} className="text-center">
            <img style={{ width: '60%', height: '60%' }} src="../img/highres-04.png" alt="Globe" />
          </div>
          <div style={{ width: '60%', padding: 40 }}>
            <div style={{backgroundColor: "#7f8b81", height:'25%', width:"45%" , display: "flex", justifyContent:"center", alignItems:"center", borderRadius:30, marginBottom:10}} >
              <p style={{fontSize:30, color: "#fbf7f2"}}>Market Representations</p>
            </div>
            <p style={{ fontWeight: "-moz-initial", color: "#15445b", fontSize: 25 }}>
            We act as dedicated representatives in key
 markets, leveraging our extensive network and
 industry expertise to promote your brand and
 drive business growth </p>
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
