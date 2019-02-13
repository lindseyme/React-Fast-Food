import React, { Component } from "react";
//import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { menuPage } from "../actions/MenuActions";
import { withRouter, Link } from "react-router-dom";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: "",
      price: "",
      errors: {}
    };
    /**
     * binds this operator to onchange and onSubmit.
     */
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const menu = {
      item_name: this.state.item_name,
      price: this.state.price
    };
    this.props.menuPage(menu, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">APL Fast Food Dealers</a>
            </li>
            <div id="items-right">
              <li>
                <a href="#" id="makeOrder">
                  make order
                </a>
              </li>
              <li>
                <a href="#">order history</a>
              </li>
              <li>
                <a
                  href=""
                  onClick={() => {
                    localStorage.removeItem("token");
                    this.props.history.push("/");
                  }}
                >
                  logout
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div id="main">
          <center>
            <h1>Menu - All Categories</h1>

            <hr />
            <div id="items-list" />
          </center>
        </div>

        <div id="simpleModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="closeBtn">&times;</span>
              <h2>
                <span id="it_name" />
              </h2>
            </div>
            <div className="modal-body">
              <div id="detailsModal">
                <div id="part1" />

                <div id="part2">
                  <h3>Details</h3>
                  <p>Specifically prepared to leave you wanting more.</p>
                  <hr />
                  <p>
                    Price:
                    <span id="price" />
                  </p>
                  <div className="form-group">
                    <input
                      type="hidden"
                      className="form-control"
                      id="item_name"
                      name="item_name"
                    />
                    <div className="col-xs-3">
                      <label>Quantity:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        min="0"
                        style={{ width: "50px" }}
                        required
                      />
                      <br />
                      <div className="col-xs-9">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button>Submit order</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Menu.propType = {
  menuPage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  message: state.message,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { menuPage }
)(withRouter(Menu));
