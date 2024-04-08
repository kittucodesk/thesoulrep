import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{backgroundColor:'#6a684c'}}>
      <div className="container " >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll"style={{color:"white"}} href="#page-top">
            TheSoulRep
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll" style={{color:"white"}}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" style={{color:"white"}}>
                Our Services
              </a>
            </li>
            <li>

              <a href="#features" className="page-scroll" style={{color:"white"}}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" style={{color:"white"}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
