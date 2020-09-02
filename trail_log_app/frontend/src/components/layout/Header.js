import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/auth';

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object,
        logoutUser: PropTypes.func
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <span className="navbar-text font-weight-light mr-3">
                    <strong>
                        {user ? `Welcome ${user.username}` : ""}
                    </strong>
                </span>
                <li className="nav-item">
                    <button onClick={this.props.logoutUser} 
                    className="nav-link btn btn-info btn-sm text-light">
                        Logout
                    </button>
                </li> 
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>   
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Trail Log App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    { isAuthenticated? authLinks : guestLinks }
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps, { logoutUser })(Header);
