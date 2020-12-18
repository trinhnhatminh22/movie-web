import React, { Component } from "react";
import { Link } from 'react-router-dom';

class  Navbar extends Component {
   render() {
    return (
      <div className="movies_nav">
        <div className ="container">
          <nav className ="navbar navbar-default">
            <div
              className ="collapse navbar-collapse navbar-right"
              id="bs-example-navbar-collapse-1"
            >
              <nav>
                <ul className ="nav navbar-nav">
                  <li className ="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li className ="dropdown">
                    <Link to="" className ="dropdown-toggle" data-toggle="dropdown">
                      Genres <b className ="caret"></b>
                    </Link>
                    <ul className ="dropdown-menu multi-column columns-3">
                      <li>
                        <div className ="col-sm-4">
                          <ul className ="multi-column-dropdown">
                            <li>
                              <Link to="/">Action</Link>
                            </li>
                            <li>
                            <Link to="/">Biography</Link>
                            </li>
                            <li>
                              <Link to="/">Crime</Link>
                            </li>
                            <li>
                              <Link to="/">Family</Link>
                            </li>
                            <li>
                              <Link to="/">Horror</Link>
                            </li>
                            <li>
                              <Link to="/">Romance</Link>
                            </li>
                            <li>
                              <Link to="/">Sports</Link>
                            </li>
                            <li>
                              <Link to="/">War</Link>
                            </li>
                          </ul>
                        </div>
                        <div className ="col-sm-4">
                          <ul className ="multi-column-dropdown">
                            <li>
                              <Link to="/">Adventure</Link>
                            </li>
                            <li>
                              <Link to="/">Comedy</Link>
                            </li>
                            <li>
                              <Link to="/">Documentary</Link>
                            </li>
                            <li>
                              <Link to="/">Fantasy</Link>
                            </li>
                            <li>
                              <Link to="/">Thriller</Link>
                            </li>
                          </ul>
                        </div>
                        <div className ="col-sm-4">
                          <ul className ="multi-column-dropdown">
                            <li>
                              <Link to="/">Animation</Link>
                            </li>
                            <li>
                              <Link to="/">Costume</Link>
                            </li>
                            <li>
                              <Link to="/">Drama</Link>
                            </li>
                            <li>
                              <Link to="/">History</Link>
                            </li>
                            <li>
                              <Link to="/">Musical</Link>
                            </li>
                            <li>
                              <Link to="/">Psychological</Link>
                            </li>
                          </ul>
                        </div>
                        <div className ="clearfix"></div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="series.html">tv - series</a>
                  </li>
                  <li>
                    <a href="news.html">news</a>
                  </li>
                  <li className ="dropdown">
                    <Link to="/" className ="dropdown-toggle" data-toggle="dropdown">
                      Country <b className ="caret"></b>
                    </Link>
                    <ul className ="dropdown-menu multi-column columns-3">
                      <li>
                        <div className ="col-sm-4">
                          <ul className ="multi-column-dropdown">
                            <li>
                              <Link to="/">Asia</Link>
                            </li>
                            <li>
                              <Link to="/">France</Link>
                            </li>
                            <li>
                              <Link to="/">Taiwan</Link>
                            </li>
                            <li>
                              <Link to="/">United States</Link>
                            </li>
                          </ul>
                        </div>
                        <div className ="col-sm-4">
                          <ul className ="multi-column-dropdown">
                            <li>
                              <Link to="/">China</Link>
                            </li>
                            <li>
                              <Link to="/">HongCong</Link>
                            </li>
                            <li>
                              <Link to="/">Japan</Link>
                            </li>
                            <li>
                              <Link to="/">Thailand</Link>
                            </li>
                          </ul>
                        </div>
                        <div className ="col-sm-4">
                          <ul className ="multi-column-dropdown">
                            <li>
                              <Link to="/">Euro</Link>
                            </li>
                            <li>
                              <Link to="/">India</Link>
                            </li>
                            <li>
                              <Link to="/">Korea</Link>
                            </li>
                            <li>
                              <Link to="/">United Kingdom</Link>
                            </li>
                          </ul>
                        </div>
                        <div className ="clearfix"></div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Short Codes</Link>
                  </li>
                  <li>
                    <Link to="/">A - z list</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
