import React, { Component } from "react";
import Popup from "Component/header/Popup";
import { Link } from 'react-router-dom';
class IndexHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
    this.closeFunction = this.closeFunction.bind(this);
  }
  closeFunction() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  showLoginForm() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    document.body.classList.toggle("modal-open");
  }
  handleSubmit() {
    console.log(this.state.name);
  }
  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="w3layouts_logo">
              <Link to="/">
                <h1>
                  One<span>Movies</span>
                </h1>
              </Link>
            </div>
            <div className="w3_search">
              <form action="" method="post">
                <input
                  type="text"
                  name="Search"
                  placeholder="Search"
                  required=""
                  onChange={this.handleChange}
                />
                <input type="submit" value="Go" onClick={this.handleSubmit} />
              </form>
            </div>
            <div className="w3l_sign_in_register">
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i> (+000) 123
                  345 653
                </li>
                <li>
                  <Link
                    to="#"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={this.showLoginForm}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div> 
          <Popup isOpen={this.state.isOpen} closeFunc={this.closeFunction} />
        </div>
      </div>
    );
  }
}

export default IndexHeader;
