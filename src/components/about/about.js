import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <div className="aboutme">
              <h2>About Me</h2>
            </div>
            <div className="aboutContent">
              <p>
                Currently pursuing a Master of Science in Computer Science
                Engineering at University of Texas At Dallas.I have done several
                projects that included designing UI wire-frames, creating
                back-ends, designing databases, creating front-ends, creating
                data analytical dashboards, predicting insights and hosting the
                web applications.I am always looking for new and
                challenging tasks. My goal is to make valuable contribution in
                all the fields I am working on. 
              </p>
            </div>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Akash Prakash Akki</span>
                  <br />
                  <span>
                    Richardson,
                    <br />
                    TX 75080 US
                  </span>
                  <br />
                  <span>(469)920-0617</span>
                  <br />
                  <span>akashpakki@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
