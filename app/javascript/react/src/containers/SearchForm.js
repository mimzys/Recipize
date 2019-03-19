import React, { Component } from "react";
import "babel-polyfill";
import { browserHistory, Link, Route, RouteHandler } from "react-router";
import * as searchConstants from "../constants/SearchConstants";
import { Dropdown, Accordion } from "foundation-sites";
import jQuery from "jquery";
import Checkbox from "../components/Checkbox";
import MinMax from "../components/MinMax";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setQuery,
  setCalMax,
  setCalMin,
  setHealth,
  setDiet
} from "../../../packs/application";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHealthCheckboxes: new Set()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleHealthCheckbox = this.toggleHealthCheckbox.bind(this);
    this.toggleDietRadio = this.toggleDietRadio.bind(this);
    this.handleCalChange = this.handleCalChange.bind(this);
  }

  toggleHealthCheckbox = label => {
    if (this.state.selectedHealthCheckboxes.has(label)) {
      this.state.selectedHealthCheckboxes.delete(label);
    } else {
      this.state.selectedHealthCheckboxes.add(label);
    }
    this.setState({
      selectedHealthCheckboxes: this.state.selectedHealthCheckboxes
    });
    let health = [];
    if (this.state.selectedHealthCheckboxes.size > 0) {
      this.state.selectedHealthCheckboxes.forEach(label => health.push(label));
    }
    this.props.dispatch({ type: "SET_HEALTH", health: health });
  };

  toggleDietRadio = event => {
    this.props.dispatch({ type: "SET_DIET", diet: event.target.value });
  };

  createHealthCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleHealthCheckbox}
      key={label}
    />
  );

  createHealthCheckboxes = () =>
    searchConstants.HEALTH_LABELS.map(this.createHealthCheckbox);

  createDietRadio = () =>
    searchConstants.DIET_TYPES.map(diet => {
      return (
        <label key={diet}>
          <input type="radio" value={diet} name="diet" />
          {diet}
        </label>
      );
    });

  handleSubmit(event) {
    event.preventDefault();
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `?q=${this.search.value.split(" ").join("+")}`;
    window.history.pushState({ path: newurl }, "", newurl);
    this.props.trackSubmit();
  }

  handleInputChange = event => {
    event.preventDefault();
    this.props.dispatch({ type: "SET_QUERY", q: this.search.value });
  };

  handleCalChange = event => {
    event.preventDefault();
    if (event.target.id == "calMin") {
      this.props.dispatch({ type: "SET_CAL_MIN", calMin: event.target.value });
    } else if (event.target.id == "calMax") {
      this.props.dispatch({ type: "SET_CAL_MAX", calMax: event.target.value });
    }
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  generateAlert(type = "primary", strongText, softText) {
    let alertClass = `callout alert-callout-subtle ${type} radius`;
    return (
      <div data-closable className={alertClass}>
        <strong>{strongText}</strong>
        {softText}
        <button
          className="close-button"
          aria-label="Dismiss alert"
          type="button"
          data-close
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }

  render() {
    $(document).foundation();

    return (
      <div>
        <div>{this.props.searchAlert}</div>
        <form
          className="grid-container"
          onSubmit={this.handleSubmit}
          ref={form => (this.form = form)}
        >
          <input
            type="search"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            value={this.props.q.replace("+", " ").replace("%20", " ")}
            onChange={this.handleInputChange}
            className="cell"
          />
          <ul className="accordion" data-accordion data-allow-all-closed="true">
            <li className="accordion-item" data-accordion-item>
              <a href="#" className="accordion-title">
                Health Restrictions
              </a>
              <div className="accordion-content" data-tab-content>
                {this.createHealthCheckboxes()}
              </div>
            </li>
            <li className="accordion-item" data-accordion-item>
              <a href="#" className="accordion-title">
                Diet Restrictions
              </a>
              <div className="accordion-content" data-tab-content>
                <div onChange={this.toggleDietRadio}>
                  {this.createDietRadio()}
                </div>
              </div>
            </li>
            <li className="accordion-item" data-accordion-item>
              <a href="#" className="accordion-title">
                Calories
              </a>
              <div className="accordion-content" data-tab-content>
                <MinMax
                  key="cal"
                  id={"cal"}
                  onChange={this.handleCalChange}
                  unit={"kcal(s)"}
                />
              </div>
            </li>
          </ul>
          <div className="expanded button-group">
            <input type="submit" value="Submit" className="button" />
          </div>
        </form>
        <script type="text/javascript">$(document).foundation()</script>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedHealthCheckboxes: state.selectedHealthCheckboxes,
    q: state.q,
    health: state.health,
    digest: state.digest,
    calMax: state.calMax,
    calMin: state.calMin
  };
};

export default connect(mapStateToProps)(SearchForm);
