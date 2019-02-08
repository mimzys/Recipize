import React, { Component } from 'react';
import 'babel-polyfill'
import { browserHistory, Link, Route, RouteHandler } from 'react-router';
import * as searchConstants from './SearchConstants'
import { Dropdown, Accordion } from 'foundation-sites';
import jQuery from "jquery";
import Checkbox from './Checkbox';
import MinMax from './MinMax'


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      from: null,
      to: null,
      selectedHealthCheckboxes: new Set(),
      selectedDiet: "",
      calMin: null,
      calMax: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleHealthCheckbox = this.toggleHealthCheckbox.bind(this)
    this.toggleDietRadio = this.toggleDietRadio.bind(this)
    this.handleCalChange = this.handleCalChange.bind(this)
  }

  toggleHealthCheckbox = label => {
    if (this.state.selectedHealthCheckboxes.has(label)) {
      this.state.selectedHealthCheckboxes.delete(label)
    } else {
      this.state.selectedHealthCheckboxes.add(label);
    }
    this.setState({
      selectedHealthCheckboxes: this.state.selectedHealthCheckboxes
    })
  }

  toggleDietRadio = (event) => {
    this.setState({
      selectedDiet: event.target.value
    })
  }


  createHealthCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleHealthCheckbox}
      key={label}
    />
  )

  createHealthCheckboxes = () => (
    searchConstants.HEALTH_LABELS.map(this.createHealthCheckbox)
  )

  createDietRadio = () => (
    searchConstants.DIET_TYPES.map((diet) => {
      return(
        <label key={diet}>
          <input
            type="radio"
            value={diet}
            name="diet"
          />
          {diet}
        </label>
      )
    })
  )

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      q: this.state.q,
      from: this.state.from,
      to: this.state.to,
      health: this.state.selectedHealthCheckboxes,
      diet: this.state.selectedDiet,
      calMin: this.state.calMin,
      calMax: this.state.calMax
    };
    this.props.trackSubmit(formPayload)
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      q: this.search.value
    })
  }

  handleCalChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  generateAlert(type = "primary", strongText, softText) {
    //posssible types: ["success"(green), "alert"(red), "primary"(blue), "warning"(yellow)]
    let alertClass = `callout alert-callout-subtle ${type} radius`
    return(
      <div data-closable className={alertClass}>
        <strong>{strongText}</strong>
        {softText}
        <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }

  render() {
    $(document).foundation();
    console.log(this.state)
    return(
      <div>
        <div>
          {this.props.searchAlert}
        </div>
        <form
        className="grid-container"

          onSubmit={this.handleSubmit}
          ref={form => this.form = form}>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            value={this.content}
            onChange={this.handleInputChange}
            className="cell"
          />


              <ul className="accordion" data-accordion data-allow-all-closed="true">
                <li className="accordion-item" data-accordion-item>
                  <a href="#" className="accordion-title">Health Restrictions</a>
                  <div className="accordion-content" data-tab-content >
                    {this.createHealthCheckboxes()}
                  </div>
                </li>
                <li className="accordion-item" data-accordion-item>
                  <a href="#" className="accordion-title">Diet Restrictions</a>
                  <div className="accordion-content" data-tab-content>
                    <div onChange={this.toggleDietRadio}>
                      {this.createDietRadio()}
                    </div>
                  </div>
                </li>
                <li className="accordion-item" data-accordion-item>
                  <a href="#" className="accordion-title">Calories</a>
                  <div className="accordion-content" data-tab-content>
                    <MinMax
                      key="cal"
                      id={"cal"}
                      onChange={this.handleCalChange}
                      unit={"kcal(s)"}
                    />
                  </div>
                </li>
                <li className="accordion-item" data-accordion-item>
                  <a href="#" className="accordion-title">Accordion 3</a>
                  <div className="accordion-content" data-tab-content>
                    Type your name!
                    <input type="text"></input>
                  </div>
                </li>
              </ul>

          <input type="submit" value="Submit" />
        </form>
        <script type="text/javascript">
          $(document).foundation()
        </script>
      </div>
    )
  }
}

export default SearchForm;
