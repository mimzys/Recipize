[![Codeship Status for mimzys/Recipize](https://app.codeship.com/projects/f090d3a0-15e9-0137-672b-429b16ef079e/status?branch=master)](https://app.codeship.com/projects/327813)
# Recipize

In principle, this is a webapp that incorporates nutritional information into the online search for recipes using an integration with the Edamam API. Users can search by key words and various nutritional parameters. When a user is signed in, they can also favorite recipes for further access.

## Getting Started

In order to access the full code, you can clone it at: https://github.com/mimzys/Recipize.git.

Or you can view the live heroku site and play with it here: https://rocky-peak-55961.herokuapp.com/.

### Prerequisites

- ruby version: 2.4.5
  You can check your current version in terminal with: ```ruby -v``` or ```chruby``` (if you have it installed)
- psql

### Installing

1. Navigating to the project directory in terminal, and get ready to run some commands.

2. Ruby and JS dependencies:  
```
bundle exec install
yarn install
```

3. ActiveRecord environment setup:
```
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
```

## Running the tests

To run the full testing suite:
```
rspec
```
This includes:
1. model tests for all ActiveRecord tables
2. feature tests (based on user stories)
3. JavaScript React component tests

## Deployment

Have two tabs of the project directory open in terminal.
Run both these commands adjacently:
```
rails s
```
```
yarn run start
```
After this, make your way to ```http://localhost:3000``` on your browser.

## Built With

* [Foundation 6](https://foundation.zurb.com/sites.html) - The web framework used
* [Edamam API](https://www.edamam.com/) - API user to access nutritional data and match it to recipes
* [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart) - Used to generate macronutrient pie charts

## Authors

* **Aleksandra Grinev** - *Initial work* - [mimzys](https://github.com/mimzys)


## Acknowledgments

* Curtsies to anyone whose code was used
