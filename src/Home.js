import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="bg-wrap">
        <div className="container">
          <div className="content">
            <h2>Home</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="row">
                <div className="col-sm-6 col-md-4">
                        <div className="thumbnail btn-warning">
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Lorem Ispum Text </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p><button className="btn btn-lg"> <span className="glyphicon glyphicon-triangle-right"></span>Button</button></p>
                        </div>
                        </div>
                </div>
                <div className="col-sm-6 col-md-4">
                        <div className="thumbnail btn-success">
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Lorem Ispum Text </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p><button className="btn btn-lg"><span className="glyphicon glyphicon-triangle-right"></span> Button</button></p>
                        </div>
                        </div>
                </div>
                <div className="col-sm-6 col-md-4">
                        <div className="thumbnail btn-warning">
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Lorem Ispum Text </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p><button className="btn btn-lg"><span className="glyphicon glyphicon-triangle-right"></span>Button</button></p>
                        </div>
                        </div>
                </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
