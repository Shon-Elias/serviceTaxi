import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout, auth } from '../reducer/user';
import Auth from './Auth'

// Component //

const Main = (props) => {
  console.log('the props', props)
  const { children, handleClick, loggedIn, handleSubmit } = props;

  return (

    <div className="inner-bg">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text">
              { loggedIn ?
                <div>
                  <h1>Welcome to Service-Taxi</h1>
                    <p>
                      By clicking Sign Up, you agree to our <Link to="https://www.fullstackacademy.com/"><strong>Terms</strong></Link
                      > and that you have read our <Link to="">Data Use Policy</Link>, including our <Link>Cookie</Link> Use.
                    </p>
                </div>

                :
                <div>
                  <form onSubmit={handleSubmit} name={name}>
                    <div>
                      <label htmlFor="email"><small>Email</small></label>
                      <input name="email" type="text" />
                    </div>
                    <div>
                      <label htmlFor="password"><small>Password</small></label>
                      <input name="password" type="password" />
                    </div>
                    <div>
                      <button type="submit">Login</button>
                    </div>

                  </form>
              </div>
            }
            </div>
        </div>
      </div>
    </div>
      );
};

// Main.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   loggedIn: PropTypes.bool.isRequired
// };

// Container //

const mapState = ({ user }) => ({
  loggedIn: !!user.id
});

const mapDispatch = dispatch => ({
  handleSubmit (evt) {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(auth(email, password, formName));
  },
  handleClick () {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);






{/*

    // <div>
    //   <h1>BOILERMAKER</h1>
    //   { loggedIn ?
  //         <nav>
  //           <Link to="/home">Home</Link>
  //           <a href="#" onClick={handleClick}>Logout</a>
  //         </nav> :
  //         <nav>
  //           <Link to="/login">Login</Link>
  //           <Link to="/signup">Sign Up</Link>
  //         </nav>
  //     }
  //     <hr />
  //     { children }
  //   </div>
  // );
};
*/}





<div id="app" class="clearfix">
  <div class="map-container col-sm-8 col-lg-9">
    <div>
      <div id="map-canvas"></div>
    </div>
  </div>
  <div id="control-panel" class="col-sm-4 col-lg-3 clearfix">
    <div class="col-xs-6 col-sm-12">
      <div class="panel panel-default">
        <div class="panel-body" id="options-panel">
          <div>
            <h4>Hotels</h4>
            <select data-type="hotel" id="hotel-choices">
            </select>
            <button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>
          </div>
          <div>
            <h4>Restaurants</h4>
            <select data-type="restaurant" id="restaurant-choices">
            </select>
            <button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>
          </div>
          <div>
            <h4>Activities</h4>
            <select data-type="activity" id="activity-choices">
            </select>
            <button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6 col-sm-12">
      <h3>
        <span id="day-title">
          <span>Day not yet Loaded</span>
          <button class="btn btn-xs btn-danger remove btn-circle">x</button>
        </span>
      </h3>
      <div class="panel panel-default">
        <div class="panel-heading">
          <div class="day-buttons">
             <button class="btn btn-circle day-btn current-day">1</button>
            <button class="btn btn-circle day-btn" id="day-add">+</button>
          </div>
        </div>
        <div class="panel-body" id="itinerary">
          <div>
            <h4>My Hotel</h4>
            <ul class="list-group" data-type="hotel">
               <div class="itinerary-item">
                <span class="title">Andaz Wall Street</span>
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>
              </div>
            </ul>
          </div>
          <div>
            <h4>My Restaurants</h4>
            <ul class="list-group" data-type="restaurants">
               <div class="itinerary-item">
                <span class="title">Bouley</span>
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>
              </div>
            </ul>
          </div>
          <div>
            <h4>My Activities</h4>
            <ul class="list-group" data-type="activities">
               <div class="itinerary-item">
                <span class="title">Mahayana Buddhist Temple Association</span>
                <button class="btn btn-xs btn-danger remove btn-circle">x</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
