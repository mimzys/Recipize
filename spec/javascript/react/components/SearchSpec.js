import App from '../../../../app/javascript/react/containers/app';
import RecipeList from '../../../../app/javascript/react/containers/RecipeList';
import * as searchConstants from '../../../../app/javascript/react/constants/SearchConstants';
import SearchForm from '../../../../app/javascript/react/containers/SearchForm';
import fetchMock from 'fetch-mock';

describe('SearchSpec', () => {
  let wrapper, query, add_props

  beforeEach(() => {
    query = "potatoes"
    recipes = [{
      id: 1,
      label: "Baked Potato Snack recipes",
      url: "http://www.marthastewart.com/353269/baked-potato-snack",
      image: "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
      yield: 1,
      source: "Martha Stewart",
      totalTime: 70.0,
      calories: 195.359404222222,
      dietLabels: ["Low-Fat"],
      healthLabels: [
        "Sugar-Conscious",
        "Vegan",
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Alcohol-Free"
      ],
      created_at: Mon, 18 Feb 2019 16:39:06 UTC +00:00,
      updated_at: Mon, 18 Feb 2019 16:39:06 UTC +00:00,
      ingredients: [
        { id: 1,
          recipe_id: 1,
          text: "1 medium sweet potato, or baking potato",
          weight: 244.955555555556
        },
        { id: 2,
          recipe_id: 1,
          text: "ground black pepper",
          weight: 0.734866666666667
        },
        { id: 3,
          recipe_id: 1,
          text: "salt",
          weight: 1.46973333333333
        }
      ],
      nutrients: [
        { id: 1,
          daily: 0.33834015042735,
          hasRDI: true,
          label: "Fat",
          schemaOrgTag: "fatContent",
          tag: "FAT",
          total: 0.219921097777778,
          unit: "g",
          recipe_id: 1,
          macro_id: nil
        },
        { id: 2,
          daily: 0.369588942222222,
          hasRDI: true,
          label: "Saturated",
          schemaOrgTag: "saturatedFatContent",
          tag: "FASAT",
          total: 0.0739177884444444,
          unit: "g",
          recipe_id: 1,
          macro_id: 1
        },
        { id: 3,
          daily: 0.0,
          hasRDI: false,
          label: "Trans",
          schemaOrgTag: "transFatContent",
          tag: "FATRN",
          total: 0.0,
          unit: "g",
          recipe_id: 1,
          macro_id: 1
        },
        { id: 4,
          daily: 0.0,
          hasRDI: false,
          label: "Monounsaturated",
          schemaOrgTag: nil,
          tag: "FAMS",
          total: 0.0103297757777778,
          unit: "g",
          recipe_id: 1,
          macro_id: 1
        },
        { id: 5,
          daily: 0.0,
          hasRDI: false,
          label: "Polyunsaturated",
          schemaOrgTag: nil,
          tag: "FAPU",
          total: 0.112664858222222,
          unit: "g",
          recipe_id: 1,
          macro_id: 1
        },
        { id: 6,
          daily: 14.9111387074074,
          hasRDI: true,
          label: "Carbs",
          schemaOrgTag: "carbohydrateContent",
          tag: "CHOCDF",
          total: 44.7334161222222,
          unit: "g",
          recipe_id: 1,
          macro_id: nil
        },
        { id: 7,
          daily: 0.0,
          hasRDI: false,
          label: "Carbs (net)",
          schemaOrgTag: nil,
          tag: "CHOCDF.net",
          total: 41.3630726333333,
          unit: "g",
          recipe_id: 1,
          macro_id: 6
        },
        { id: 8,
          daily: 13.4813739555556,
          hasRDI: true,
          label: "Fiber",
          schemaOrgTag: "fiberContent",
          tag: "FIBTG",
          total: 3.37034348888889,
          unit: "g",
          recipe_id: 1,
          macro_id: 6
        },
        { id: 9,
          daily: 0.0,
          hasRDI: false,
          label: "Sugars",
          schemaOrgTag: "sugarContent",
          tag: "SUGAR",
          total: 1.52342759111111,
          unit: "g",
          recipe_id: 1,
          macro_id: 6
        },
        { id: 10,
          daily: 0.0,
          hasRDI: false,
          label: "Sugars, added",
          schemaOrgTag: nil,
          tag: "SUGAR.added",
          total: 0.0,
          unit: "g",
          recipe_id: 1,
          macro_id: 6
        },
        { id: 11,
          daily: 10.6368030711111,
          hasRDI: true,
          label: "Protein",
          schemaOrgTag: "proteinContent",
          tag: "PROCNT",
          total: 5.31840153555556,
          unit: "g",
          recipe_id: 1,
          macro_id: nil
        }
      ]
    }]

    fetchMock.get(fetch(`https://api.edamam.com/search?q=${query}&app_id=${searchConstants.RECIPE_SEARCH_APP_ID}&app_key=${searchConstants.RECIPE_SEARCH_API_KEY}${add_props}`), {
      status: 200,
      body: recipes[0]
    });

    wrapper = mount(
      <div>
        <SearchForm
          params = {{ id:1 }}
        />
        <RecipeList
          params = {{ id:1 }}
        />
      </div>
    );
  });

  afterEach(fetchMock.restore)

    it('renders a div', () => {
      expect(wrapper.find('div')).toBePresent()
    })

    it('renders a SearchForm', (done) => {
      setTimeout(() => {
        expect(wrapper.find('SearchForm').length)).toBePresent())

        expect(wrapper.find('SearchForm').length).toEqual(books.length)
        done()
      }, 0)
    })

    it('renders a RecipeList', (done) => {
      setTimeout(() => {
        expect(wrapper.find('RecipeList').length).toEqual(recipes.length)
        done()
      }, 0)
    })
  })
