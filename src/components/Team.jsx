import React from "react";

export const Team = (props) => {
  return (
    // <div id="team" className="text-center">
    //   <div className="container">
    //     <div className="col-md-8 col-md-offset-2 section-title">
    //       <h2>Meet the Team</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
    //         dapibus leonec.
    //       </p>
    //     </div>
    //     <div id="row">
    //       {props.data
    //         ? props.data.map((d, i) => (
    //             <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
    //               <div className="thumbnail">
    //                 {" "}
    //                 <img src={d.img} alt="..." className="team-img" />
    //                 <div className="caption">
    //                   <h4>{d.name}</h4>
    //                   <p>{d.job}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           ))
    //         : "loading"}
    //     </div>
    //   </div>
    // </div>
    <div style={{ backgroundColor:"#fbf7f2"}}>
    <h2 className="font-bold text-2xl" style={{color:"#7c522a",marginLeft: 20}}>Our Team</h2>

   
<p style={{fontWeight:"-moz-initial", color:"#7c522a", fontSize: 30, marginLeft:50, marginRight:40}}>
    In the bustling heart of the travel industry, amidst a whirlwind of destinations and
 the quest for luxury and authenticity, there exists a beacon of unparalleled
 hospitality representation known as The Soul Reps.
          <br />
          <br />
          Step into a world where experience intertwines with expertise, with every detail,
 thoughtfully crafted. With over a quarter of a century of experience behind them,
 The Soul Reps team weaves magic in the realm of luxury travel, to craft
 unforgettable experiences, bridging the gap between world-class travel brands
 and the eager hearts of Indian travellers.

 </p>
 <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{width:'60%'}}>
       
        
 <p style={{fontWeight:"-moz-initial", color:"#7c522a", fontSize: 30}}>
        
        <br />
          <br />
          The team is led by Ansh Khanijo, a visionary
 graduate from the University of Toronto, who
 enjoys a family legacy of hospitality for over
 40 years. Alongside Ansh is a seasoned
 industry expert and celebrated business
 woman, known for her trailblazing
 contributions to outbound tourism, and a
 strategic marketing virtuoso, whose portfolio
 includes prestigious names such as Belmond,
 Armani, Virgin Limited Edition, Cheval Blanc,
 Chiva Som and more, ensuring a tenacity for
 exceptional results.
 <br />
 <br />
 Together, this triumvirate forms the backbone
 of the team, united by a shared vision and an
 unwavering commitment to excellence. With
 their expertise, The Soul Reps stand poised to
 redefine the standards of hospitality
 representation, delivering unparalleled service
 and value to partners.
 </p>
      </div>
      <div style={{width:'30%'}} >
        <img style={{ width: '100%', height: '80%', borderRadius: 30 , marginTop: 80}} src="../img/_Ansh.jpg" alt="Globe" />
      </div>
    </div>
  </div>
  );
};
