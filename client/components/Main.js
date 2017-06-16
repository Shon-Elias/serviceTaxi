import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';

// Component //

const Main = props => {

  const { children, handleClick, loggedIn } = props;

  return (

        <div className="top-content">

<div className="inner-bg">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">

                            <h1>Welcome to Service-Taxi</h1>
                              <p>
                                By clicking Sign Up, you agree to our <Link href="https://www.fullstackacademy.com/"><strong>Terms</strong></Link> and that you have read our <Link href="">Data Use Policy</Link>, including our <Link>Cookie</Link> Use.
                              </p>
                          </div>
                      </div>
                  </div>
                <div className="row">
                   - <div className="col-sm-6 col-sm-offset-3 form-box">
                      <div className="form-top">
                        <div className="form-top-left">
                          <h3>Login</h3>
                            <p>Enter your email and password to log on:</p>
                        </div>
                        <div className="form-top-right">
                          <i className="fa fa-key"></i>
                        </div>
                      </div>
                    <div className="form-bottom">
                      <form role="form" action="" method="post" className="login-form">
                        <div className="form-group">
                          <label className="sr-only" htmlFor="form-username">E-mail</label>
                            <input type="text" name="form-username" placeholder="E-mail..." className="form-username form-control" id="form-username"/>
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="form-password">Password</label>
                            <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password"/>
                        </div>
                          <button type="submit" className="btn">Sign in!</button>
                      </form>
                    </div>

                 </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 social-login">
                        	<h3>...or login with:</h3>
                        	<div className="social-login-buttons">
	                        	<Link className="btn btn-link-1 btn-link-1-facebook" to="#">
	                        		<i className="fa fa-facebook"></i> Facebook
	                        	</Link>
	                        	<Link className="btn btn-link-1 btn-link-1-twitter" to="#">
	                        		<i className="fa fa-twitter"></i> Twitter
	                        	</Link>
	                        	<Link className="btn btn-link-1 btn-link-1-google-plus" to="#">
	                        		<i className="fa fa-google-plus"></i> Google Plus
	                        	</Link>
                        	</div>

                        </div>
                    </div>
                    :
                </div>
      </div>
      </div>
  );

};



Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};


// Container //

const mapState = ({ user }) => ({
  loggedIn: !!user.id
});

const mapDispatch = dispatch => ({
  handleClick () {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);







