import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap-theme.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name:'',
            email:'',
            message:''
        };

    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log('hello', this.refs.name.value);
        this.setState({
            name: this.refs.name.value,
            email: this.refs.email.value,
            message: this.refs.message.value
        });
        // this.refs.name.value='',
        // this.refs.email.value='',
        // this.refs.message.value=''
        
    }
  render() {
    return (
      <div className="bg-wrap">
        <div className="container">
          <div className="content">
            <h2>Contact</h2>
            <div className="m-c row">
               <div className="col-xs-6">
                   <form onSubmit={this.handleSubmit}> 
                        <input
                        id="formControlsText"
                        type="text"
                        label="Text"
                        ref="name"
                        required
                        placeholder="Enter Name"
                        className="form-control"
                        />
                        
                        <input
                        id="formControlsEmail"
                        type="email"
                        label="Email address"
                        ref="email"
                        required
                        placeholder="Enter email"
                        className="form-control"
                        />

                        <textarea 
                        type="text"
                        placeholder="Enter Message"
                        required
                        ref="message"
                        className="form-control"
                        />

                        <button type="submit" className="btn btn-success">
                           <span className="glyphicon glyphicon-envelope"></span> Submit
                        </button>
                    </form>
                </div>
               <div className="col-xs-6">
                   <h4>Output</h4>
                   <p>Name: {this.state.name} </p>
                   <p>Email: {this.state.email} </p>
                   <p>Message: {this.state.message} </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
