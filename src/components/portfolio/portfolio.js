import React, { Component } from "react";
import "./portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <section>
        <div className="projects">
          <div className="parent-container">
            <div className="project">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="hovereffect">
                  <img
                    className="stock-img"
                    src="images/portfolio/modals/stock.jpg"
                    alt=""
                  />
                  <div className="overlay">
                    <a className="info" href="https://github.com/akash-akki">
                      Go
                    </a>
                  </div>
                </div>
              </div>

              {/* <a href="http://github.com/akash-akki" target="_blank">
              <img
                className="stock-img"
                src="images/portfolio/modals/stock.jpg"
                alt=""
              />
              </a> */}
              <div className="contentWork">
                <h2>Stock Brokerage</h2>
                <ul>
                  <li>
                    Designed and implementesocial-img website and scalable
                    web application based on service-oriented architecture.
                  </li>
                  <li>
                    Visualized historical and real-time stock data using third
                    party api
                  </li>
                  <li>
                    Technologies: SOA, SpringBoot, React JS, PostgreSQL,JAVA
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="parent-container">
            <div className="project">  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="hovereffect">
                <img
                  className="twitter-img"
                  src="images/portfolio/modals/overlay-bg.png"
                  alt=""
                />
                <div className="overlay">
                  <a className="info" href="https://github.com/akash-akki">
                   Go
                    </a>
                </div>
              </div>
            </div>
              <div className="contentWork">
                <h2> Sentimental Analysis</h2>
                <ul>
                  <li>
                    Made use of twitter APIs and spark streaming to fetch and
                    filter real time tweets
                  </li>
                  <li>
                    Analyzed the subjectivity and polarity of covid-19 related
                    tweets.
                  </li>
                  <li>
                    Technologies: Apache Spark, Sentiment Analyzer, Elastic
                    Search, Kibana
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="parent-container">
            <div className="project">
              <div className="hovereffect">
                <img
                  className="red-img"
                  src="images/portfolio/modals/red-black.png"
                  alt=""
                />
                <div className="overlay">
                  <a className="info" href="https://github.com/akash-akki">
                    Go
                    </a>
                </div>
              </div>
          
              <div className="contentWork">
                <h2> Red Black Tree and Skip list</h2>
                <ul>
                  <li>
                    Implemented red-black tree and skip lists to support various
                    operations like add, remove, contains, get, ceiling etc.
                  </li>
                  <li>
                    Analyzed the performance of two data structures for very
                    large input sizes such as 16M, 64M, 256M
                  </li>
                  <li>Technology:Java</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="parent-container">
            <div className="project">
              <div className="hovereffect">
                <img
                  className="social-img"
                  src="images/portfolio/modals/social.png"
                  alt=""
                />
                <div className="overlay">
                  <a className="info" href="https://github.com/akash-akki">
                    Go
                    </a>
                </div>
              </div>
            
              <div className="contentWork">
                <h2>Social Network Analysis</h2>
                <ul>
                  <li>
                    Analyzed facebook social network data of size 50,000 in
                    finding the mutual friends;dkj
                  </li>
                  <li>
                    Worked on designing the map, reduce, partitioning
                    methodologies to segregate the huge data and obtain the
                    relevant information
                  </li>
                  <li>
                    Technologies: Linux, Single Cluster Hadoop Framework, Map
                    Reduce, JAVA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
