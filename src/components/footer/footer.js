import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
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
            <ul className="copyright">
              <li></li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
