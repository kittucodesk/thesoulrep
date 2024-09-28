import React from "react";

export const Testimonials = (props) => {
  return (
    <div style={{ backgroundColor: "#fbf7f2" }}>
      <div style={{ padding: 20 }}>
        <h2 className="font-bold text-2xl" style={{ color: "#7c522a", marginLeft: 20 }}>WHY CHOOSE US</h2>
      </div>
      <div style={{ width: '100%' }}>
        <p style={{ fontWeight: "-moz-initial", color: "#7c522a", fontSize: 30, paddingLeft: 40, paddingRight: 20 }}>
          At The Soul Reps, we specialize in data-driven sales strategies, prioritizing high
          yield segments to maximize results and foster brand loyalty across India’s major
          markets
        </p>
      </div>
      <div style={{ width: '100%', }} >
        <img style={{ width: '100%', height: 'auto' }} src="../img/thesoulrep16.png" alt="Globe" />
      </div>
      <div style={{ alignItems: "center", paddingTop: 30, paddingBottom: 30 }}>
        <p style={{ fontWeight: "bold", fontSize: 30, paddingLeft: 40, paddingRight: 20, color: "#6a684c", fontStyle: "italic" }}>
          Join us on an extraordinary journey and let our expertise unleash your brand's true potential
        </p>
      </div>
    </div>
  );
};
