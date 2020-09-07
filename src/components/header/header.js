import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Akash Akki.</h1>
              <h3>
                I'm a <span>Full Stack Devloper </span>{" "} and a {" "}
                <span>Software Engineer.</span> Let's{" "}
                <a className="smoothscroll" href="#about">
                  start scrolling
                </a>{" "}
                and learn more{" "}
                <a className="smoothscroll" href="#about">
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a href="https://linkedin.com/in/akash-akki">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/akash-akki">
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/8918611/akash">
                    <i className="fa fa-stack-overflow" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </div>
    );
  }
}
