import React from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';


const Home = (props) => {
  return(
    <div className="home">
      <div className="grid-y" style={{height: '1500px'}}>
        <form className="search" method="get" action="search">
          <input type="search" placeholder="Search here..." name="q" required>
          </input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}
export default Home;
