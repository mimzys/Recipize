import React from "react";
import { browserHistory, Link } from "react-router";
import PieChart from "react-minimal-pie-chart";
import MicroTable from "../components/MicroTable";
import { connect } from "react-redux";

const RecipeShow = props => {
  let onClickFunction;
  function postRecipe(recipe) {
    fetch(`/api/v1/recipes`, {
      method: "POST",
      body: JSON.stringify(recipe),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json());
  }

  let handleFavorite = event => {
    event.target.style.backgroundColor = "#75d68d";
    event.target.text = "♡ Favorited! ♡";
    postRecipe(props.recipe);
  };

  let handleRemove = event => {
    event.target.style.backgroundColor = "#75d68d";
    event.target.text = "❥ Removed! ❥";
  };

  let carbDigest = props.digest.find(i => Object.values(i).includes("CHOCDF"));
  let fatDigest = props.digest.find(i => Object.values(i).includes("FAT"));
  let proteinDigest = props.digest.find(i =>
    Object.values(i).includes("PROCNT")
  );

  let carbs = Math.round(carbDigest.total / props.yield);
  let fat = Math.round(fatDigest.total / props.yield);
  let protein = Math.round(proteinDigest.total / props.yield);

  let ingredientList = props.ingredients.map((ingr, index) => {
    return (
      <li key={index}>
        {ingr.text} ({Math.round(ingr.weight)}g)
      </li>
    );
  });

  if (props.location.state.button === "Favorite!") {
    onClickFunction = handleFavorite;
  } else if (props.location.state.button === "Remove") {
    onClickFunction = handleRemove;
  }

  return (
    <div className="grid-container fluid">
      <div className="grid-x">
        <div className="cell small-offset-1">
          <h2>{props.label}</h2>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="cell small-2 small-offset-1">
          <img src={props.image} />
        </div>
        <div className="cell small-6">
          <ul>
            Calories per serving: {Math.round(props.calories / props.yield)}{" "}
            <br />
            Servings: {props.yield} <br />
            Ingredients: <br />
            <ul>{ingredientList}</ul>
          </ul>
        </div>
        <div className="cell small-2">
          <PieChart
            className="macros"
            data={[
              { title: "Carbs", value: carbs, color: "#E38627" },
              { title: "Fat", value: fat, color: "#C13C37" },
              { title: "Protein", value: protein, color: "#6A2135" }
            ]}
            radius={30}
            cy={30}
          />
          <ul>
            <li style={{ color: "#6A2135" }}>Protein: {protein} (g)</li>
            <li style={{ color: "#C13C37" }}>Fat: {fat} (g)</li>
            <li style={{ color: "#E38627" }}>Carbs: {carbs} (g)</li>
          </ul>
        </div>
      </div>
      <div className="recipeshow">
        <div className="grid-y">
          <div className="grid-x grid-margin-x">
            <div className="cell small-6">
              <MicroTable digest={props.digest} />
            </div>
            <div className="cell small-6">
              <div className="expanded button-group">
                <a href={props.url} className="button" target="_blank">
                  Let's Get Cooking!
                </a>
                <a className="button" onClick={onClickFunction}>
                  {props.location.state.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  let listItem = state.hits[state.shownRecipe].recipe;
  if (!listItem) {
    listItem = state.hits[state.shownRecipe];
  }
  let digest = listItem.digest;
  if (!digest) {
    digest = listItem.nutrients;
  }
  return {
    recipe: listItem,
    digest: digest,
    ingredients: listItem.ingredients,
    yield: listItem.yield,
    label: listItem.label,
    image: listItem.image,
    calories: listItem.calories,
    url: listItem.url
  };
};

export default connect(mapStateToProps)(RecipeShow);
