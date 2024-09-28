import React from "react";

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top m-2"
      style={{ backgroundColor: "#000 " }}
    >
      <div className="container ">
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
          <a
            className="navbar-brand page-scroll"
            style={{ color: "white" }}
            href="#page-top"
          >
            <img
              style={{ width: "100%", height: "100%" , marginBottom: "200"}}
              src="images/3.png"
              alt="logo"
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li style={{marginTop: 15}}>
              <a
                href="#header"
                className="page-scroll"
                style={{ color: "white" }}
              >
                Home
              </a>
            </li>
            {/* <li>
              <a
                href="#services"
                className="page-scroll"
                style={{ color: "white" }}
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="page-scroll"
                style={{ color: "white" }}
              >
                About Us
              </a>
            </li> */}
            <li style={{marginTop: 15}}>
              <a
                href="#contact"
                className="page-scroll"
                style={{ color: "white" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
