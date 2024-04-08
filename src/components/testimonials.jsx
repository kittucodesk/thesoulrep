import React from "react";

export const Testimonials = (props) => {
  return (
    // <div id="testimonials">
    //   <div className="container">
    //     <div className="section-title text-center">
    //       <h2>What our clients say</h2>

    //     </div>
    //     <div className="row">
    //       {props.data
    //         ? props.data.map((d, i) => (
    //             <div key={`${d.name}-${i}`} className="col-md-4">
    //               <div className="testimonial">
    //                 <div className="testimonial-image">
    //                   {" "}
    //                   <img src={d.img} alt="" />{" "}
    //                 </div>
    //                 <div className="testimonial-content">
    //                   <p>"{d.text}"</p>
    //                   <div className="testimonial-meta"> - {d.name} </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))
    //         : "loading"}
    //     </div>
    //   </div>
    // </div>
    <div style={{ backgroundColor:"#fbf7f2"}}>
      <div style={{padding: 20}}>
    <h2 className="font-bold text-2xl" style={{color:"#7c522a",marginLeft: 20}}>WHY CHOOSE US</h2>
    </div>

    
      <div style={{width:'100%'}}>
        <p style={{fontWeight:"-moz-initial", color:"#7c522a", fontSize: 30 , paddingLeft: 40, paddingRight:20}}>
        At The Soul Reps, we specialize in data-driven sales strategies, prioritizing high
yield segments to maximize results and foster brand loyalty across India’s major
 markets
         
        </p>
      </div>

      
      <div style={{width:'100%',}} >
        <img style={{ width: '100%', height: '100%' }} src="../img/thesoulrepimage.jpg" alt="Globe" />
        
      </div>
      <div style={{alignItems:"center", paddingTop:30,paddingBottom: 30}}> 
      <p style={{fontWeight:"bold",fontSize: 30 , paddingLeft: 40, paddingRight:20, color:"#6a684c" , fontStyle:"italic"}}>
      Join us on an extraordinary journey and
      <br />
 let our expertise unleash your brand's true potential
        </p>
      </div>
    </div>

  );
};
