import React, { Component } from "react";
import "./resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Texas At Dallas</h3>
                  <p className="info">
                    Master in Computer Science Design <span>•</span>
                    <em className="date">May 2021</em>
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>B.V. Bhoomraddi College of Engineering and Technology</h3>
                  <p className="info">
                    Bachelor of Engineering in Information Science<span>•</span>
                    <em className="date">June 2017</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Mercedes Benz Research and Development India</h3>
                  <p className="info">
                    Software Developer <span>•</span>
                    <em className="date">July 2017 - July 2021</em>
                  </p>
                  <div className ="exp">
                    <ul>
                      <li>
                        Developed a REST based microservice web application
                        using SpringBoot framework.This web application reduced
                        the overall development of design phase of the car by
                        7%.
                      </li>
                      <li>
                        Implemented and written unit tests for the microservices
                        and achieved upto 90% test coverage using junit and
                        mockito framework.
                      </li>
                      <li>
                        Built single-page in house applications using ReacJS and
                        JavaScript.Improving product aesthetic and UX of the
                        inhouse web application resulting in 30% increase in
                        user retention.
                      </li>
                      <li>
                        Responsible for deployment of applications in RedHat
                        Openshift by creating Docker images PODs, Services, and
                        Routes which nearly reduced the deployment time by 40%.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row skill">
           
          </div>
        </section>
      </div>
    );
  }
}
