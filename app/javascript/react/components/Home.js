import React from 'react';
import { browserHistory, Link } from 'react-router';

const Home = (props) => {
  return(
    <div>
    <div className="row">
      <div className="large-12 columns">
        <div className="hide-for-small">
          <Link to={{ pathname: "/search"}}>
            <div id="featured">
              <img alt="slide image" src="https://placehold.it/1000x400&amp;text=Recipe%20Search"></img>
            </div>
          </Link>
        </div>
        <div className="row">
          <div className="small-12 show-for-small">
            <br></br>
            <img src="https://placehold.it/1000x600&amp;text=For%20Small%20Screens"></img>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div className="row">
      <div className="large-12 columns">
        <div className="row">
          <div className="large-3 small-6 columns">
            <img src="https://placehold.it/250x250&amp;text=Thumbnail"></img>
            <h6 className="panel">Description</h6>
          </div>
          <div className="large-3 small-6 columns">
            <img src="https://placehold.it/250x250&amp;text=Thumbnail"></img>
            <h6 className="panel">Description</h6>
          </div>
          <div className="large-3 small-6 columns">
            <img src="https://placehold.it/250x250&amp;text=Thumbnail"></img>
            <h6 className="panel">Description</h6>
          </div>
          <div className="large-3 small-6 columns">
            <img src="https://placehold.it/250x250&amp;text=Thumbnail"></img>
            <h6 className="panel">Description</h6>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="large-12 columns">
        <div className="row">
          <div className="large-8 columns">
            <div className="panel radius">
              <div className="row">
                <div className="large-6 small-6 columns">
                  <h4>Header</h4>
                  <hr></hr>
                  <h5 className="subheader">
                    Risus ligula, aliquam nec fermentum vitae, sollicitudin eget
                    urna. Donec dignissim nibh fermentum odio ornare sagittis.
                  </h5>
                  <div className="show-for-small" style={{textAlign: "center"}}>
                    <a className="small radius button" href="#">Call To Action!</a>
                    <br></br>
                    <a className="small radius button" href="#">Call To Action!</a>
                  </div>
                </div>
                <div className="large-6 small-6 columns">
                  <p>
                    Suspendisse ultrices ornare tempor. Aenean eget ultricies
                    libero. Phasellus non ipsum eros. Vivamus at dignissim massa.
                    Aenean dolor libero, blandit quis interdum et, malesuada nec
                    ligula. Nullam erat erat, eleifend sed pulvinar ac.
                    Suspendisse ultrices ornare tempor. Aenean eget ultricies libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        <div className="large-4 columns hide-for-small">
          <h4>Get In Touch!</h4>
          <hr></hr>
          <a href="#">
            <div className="panel radius callout" style={{textAlign: "center"}}>
              <strong>Call To Action!</strong>
            </div>
          </a>
          <a href="#">
            <div className="panel radius callout" style={{textAlign: "center"}}>
              <strong>Call To Action!</strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
export default Home;
