import React, { Component } from "react";
import { Link } from "react-router-dom";
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openOrNot: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.fixCloseModal = this.fixCloseModal.bind(this);
    this.showCreateAccount = this.showCreateAccount.bind(this);
  }
  showCreateAccount() {
    console.log("hello");
    this.setState({
      openOrNot: !this.state.openOrNot,
    });
  }
  handleClick() {
    this.props.closeFunc();
  }
  fixCloseModal(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <div
        className={`modal video-modal fade ${
          this.props.isOpen ? "in showinfo" : ""
        }`}
        onClick={this.handleClick}
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModal"
      >
        <div
          className="modal-dialog"
          role="document"
          onClick={this.fixCloseModal}
        >
          <div className="modal-content">
            <div className="modal-header">
              Sign In & Sign Up
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" onClick={this.handleClick}>
                  &times;
                </span>
              </button>
            </div>
            <section>
              <div className="modal-body">
                <div className="w3_login_module">
                  <div className="module form-module">
                    <div className="toggle">
                      <i
                        className="fa fa-times fa-pencil"
                        onClick={this.showCreateAccount}
                      ></i>
                      <div className="tooltip">Click Me</div>
                    </div>
                    <div
                      className={`form ${
                        this.state.openOrNot ? " showagain" : " hideinfo"
                      }`}
                    >
                      <h3>Login to your account</h3>
                      <form action="#" method="post">
                        <input
                          type="text"
                          name="Username"
                          placeholder="Username"
                          required=""
                        />
                        <input
                          type="password"
                          name="Password"
                          placeholder="Password"
                          required=""
                        />
                        <input type="submit" value="Login" />
                      </form>
                    </div>
                    <div
                      className={`form ${
                        !this.state.openOrNot ? " showagain" : " hideinfo"
                      }`}
                    >
                      <h3>Create an account</h3>
                      <form action="#" method="post">
                        <input
                          type="text"
                          name="Username"
                          placeholder="Username"
                          required=""
                        />
                        <input
                          type="password"
                          name="Password"
                          placeholder="Password"
                          required=""
                        />
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email Address"
                          required=""
                        />
                        <input
                          type="text"
                          name="Phone"
                          placeholder="Phone Number"
                          required=""
                        />
                        <input type="submit" value="Register" />
                      </form>
                    </div>
                    <div className="cta">
                      <Link to="">Forgot your password?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
