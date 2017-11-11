          import React, { Component } from 'react';
          import './App.css';
          import 'bootstrap/dist/css/bootstrap.css'; 
          import 'bootstrap/dist/css/bootstrap-theme.css';
          import {Link } from 'react-router-dom';


          class App extends Component {
            render() {
              return (
                <div className=" navbar-inverse ">
                  <div className="container">
                    <div className="menu">
                    <nav className="navbar">
                      <div className="container-fluid">
                      
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand">LOGO</a>
                        </div>

                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                    </div>
                    
                    {/* display output of page content*/}
                    <div className="o-p">
                      {this.props.children}
                    </div>
                      
                      
                    
                  </div>
                </div>
              );
            }
          }

          export default App;
