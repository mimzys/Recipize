# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
recipes = [{
  calories: 195.3594042222222,
  dietLabels: ["Low-Fat"],
  digest: [
    {
      daily: 0.3383401504273504,
      hasRDI: true,
      label: "Fat",
      schemaOrgTag: "fatContent",
      sub: [
        {
          daily: 0.36958894222222216,
          hasRDI: true,
          label: "Saturated",
          schemaOrgTag: "saturatedFatContent",
          tag: "FASAT",
          total: 0.07391778844444442,
          unit: "g"
        },
        {
          daily: 0,
          hasRDI: false,
          label: "Trans",
          schemaOrgTag: "transFatContent",
          tag: "FATRN",
          total: 0,
          unit: "g"
        },
        {
          daily: 0,
          hasRDI: false,
          label: "Monounsaturated",
          schemaOrgTag: nil,
          tag: "FAMS",
          total: 0.010329775777777776,
          unit: "g",
      },
      {
        daily: 0,
        hasRDI: false,
        label: "Polyunsaturated",
        schemaOrgTag: nil,
        tag: "FAPU",
        total: 0.11266485822222219,
        unit: "g"
      }
    ],
    tag: "FAT",
    total: 0.21992109777777774,
    unit: "g"
  },
  {
    daily: 14.911138707407405,
    hasRDI: true,
    label: "Carbs",
    schemaOrgTag: "carbohydrateContent",
    sub: [
      {
        daily: 0,
        hasRDI: false,
        label: "Carbs (net)",
        schemaOrgTag: nil,
        tag: "CHOCDF.net",
        total: 41.36307263333333,
        unit: "g",
      },
      {
        daily: 13.481373955555553,
        hasRDI: true,
        label: "Fiber",
        schemaOrgTag: "fiberContent",
        tag: "FIBTG",
        total: 3.370343488888888,
        unit: "g"
      },
      {
        daily: 0,
        hasRDI: false,
        label: "Sugars",
        schemaOrgTag: "sugarContent",
        tag: "SUGAR",
        total: 1.5234275911111108,
        unit: "g"
      },
      {
        daily: 0,
        hasRDI: false,
        label: "Sugars, added",
        schemaOrgTag: nil,
        tag: "SUGAR.added",
        total: 0,
        unit: "g"
      }
    ],
    tag: "CHOCDF",
    total: 44.733416122222216,
    unit: "g"
    },
    {
      daily: 10.63680307111111,
      hasRDI: true,
      label: "Protein",
      schemaOrgTag: "proteinContent",
      tag: "PROCNT",
      total: 5.318401535555555,
      unit: "g"
    },
    {
      daily: 0,
      hasRDI: false,
      label: "Cholesterol",
      schemaOrgTag: "cholesterolContent",
      tag: "CHOLE",
      total: 0,
      unit: "mg"
    },
    {
      daily: 23.806173461222226,
      hasRDI: true,
      label: "Sodium",
      schemaOrgTag: "sodiumContent",
      tag: "NA",
      total: 571.3481630693334,
      unit: "mg"
    },
    {
      daily: 3.5445800599030375,
      hasRDI: true,
      label: "Calcium",
      schemaOrgTag: nil,
      tag: "CA",
      total: 35.44580059903038,
      unit: "mg"
    },
    {
      daily: 13.716862239187908,
      hasRDI: true,
      label: "Magnesium",
      schemaOrgTag: nil,
      tag: "MG",
      total: 57.61082140458922,
      unit: "mg"
    },
    {
      daily: 21.943540801726765,
      hasRDI: true,
      label: "Potassium",
      schemaOrgTag: nil,
      tag: "K",
      total: 1031.3464176811578,
      unit: "mg"
    },
    {
      daily: 12.126291488660497,
      hasRDI: true,
      label: "Iron",
      schemaOrgTag: nil,
      tag: "FE",
      total: 2.1827324679588895,
      unit: "mg"
    },
    {
      daily: 6.550528973868995,
      hasRDI: true,
      label: "Zinc",
      schemaOrgTag: nil,
      tag: "ZN",
      total: 0.7205581871255895,
      unit: "mg"
    },
    {
      daily: 19.412377841269837,
      hasRDI: true,
      label: "Phosphorus",
      schemaOrgTag: nil,
      tag: "P",
      total: 135.88664488888887,
      unit: "mg",
    },
    {
      daily: 0.022045999999999996,
      hasRDI: true,
      label: "Vitamin A",
      schemaOrgTag: nil,
      tag: "VITA_RAE",
      total: 0.19841399999999998,
      unit: "µg",
    },
    {
      daily: 15.51385185185185,
      hasRDI: true,
      label: "Vitamin C",
      schemaOrgTag: nil,
      tag: "VITC",
      total: 13.962466666666664,
      unit: "mg"
    },
    {
      daily: 16.804767629629627,
      hasRDI: true,
      label: "Thiamin (B1)",
      schemaOrgTag: nil,
      tag: "THIA",
      total: 0.20165721155555552,
      unit: "mg"
    },
    {
      daily: 6.319853333333333,
      hasRDI: true,
      label: "Riboflavin (B2)",
      schemaOrgTag: nil,
      tag: "RIBF",
      total: 0.08215809333333332,
      unit: "mg"
    },
    {
      daily: 15.898059537499995,
      hasRDI: true,
      label: "Niacin (B3)",
      schemaOrgTag: nil,
      tag: "NIA",
      total: 2.543689525999999,
      unit: "mg"
    },
    {
      daily: 65.17193297435895,
      hasRDI: true,
      label: "Vitamin B6",
      schemaOrgTag: nil,
      tag: "VITB6A",
      total: 0.8472351286666664,
      unit: "mg"
    },
    {
      daily: 8.604676277777775,
      hasRDI: true,
      label: "Folate equivalent (total)",
      schemaOrgTag: nil,
      tag: "FOLDFE",
      total: 34.4187051111111,
      unit: "µg"
    },
    {
      daily: 0,
      hasRDI: false,
      label: "Folate (food)",
      schemaOrgTag: nil,
      tag: "FOLFD",
      total: 34.4187051111111,
      unit: "µg"
    },
    {
      daily: 0,
      hasRDI: false,
      label: "Folic acid",
      schemaOrgTag: nil,
      tag: "FOLAC",
      total: 0,
      unit: "µg"
    },
    {
      daily: 0,
      hasRDI: false,
      label: "Vitamin B12",
      schemaOrgTag: nil,
      tag: "VITB12",
      total: 0,
      unit: "µg"
    },
    {
      daily: 0,
      hasRDI: false,
      label: "Vitamin D",
      schemaOrgTag: nil,
      tag: "VITD",
      total: 0,
      unit: "µg"
    },
    {
      daily: 0.21425445925925926,
      hasRDI: true,
      label: "Vitamin E",
      schemaOrgTag: nil,
      tag: "TOCPHA",
      total: 0.03213816888888889,
      unit: "mg"
    },
    {
      daily: 4.676813944444444,
      hasRDI: true,
      label: "Vitamin K",
      schemaOrgTag: nil,
      tag: "VITK1",
      total: 5.612176733333333,
      unit: "µg"
    }
  ],
  healthLabels: ["Sugar-Conscious", "Vegan", "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"],
  image: "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
  ingredients: [
    {
      text: "1 medium sweet potato, or baking potato",
      weight: 244.95555555555552
    },
    {
      text: "ground black pepper",
      weight: 0.7348666666666666
    },
    {
      text: "salt",
      weight: 1.4697333333333331
    }
  ],
  label: "Baked Potato Snack recipes",
  source: "Martha Stewart",
  totalTime: 70,
  url: "http://www.marthastewart.com/353269/baked-potato-snack",
  yield: 1
}]

recipes.each do |recipe|
  new_recipe = Recipe.create!(
    label: recipe[:label],
    url: recipe[:url],
    image: recipe[:image],
    yield: recipe[:yield],
    source: recipe[:source],
    totalTime: recipe[:totalTime],
    calories: recipe[:calories],
    dietLabels: recipe[:dietLabels],
    healthLabels: recipe[:healthLabels]
  )
  recipe[:ingredients].each do |ingr|
    new_ingredient = Ingredient.create!(
      recipe_id: new_recipe.id,
      text: ingr[:text],
      weight: ingr[:weight]
    )
    new_recipe.ingredients << new_ingredient
  end
  recipe[:digest].each do |dig|
    new_dig = Nutrient.create!(
      recipe_id: new_recipe.id,
      daily: dig[:daily],
      hasRDI: dig[:hasRDI],
      label: dig[:label],
      schemaOrgTag: dig[:schemaOrgTag],
      tag: dig[:tag],
      total: dig[:total],
      unit: dig[:unit]
    )
    if dig.has_key?(:sub)
      dig[:sub].each do |sub|
        new_sub = Nutrient.create!(
          recipe_id: new_recipe.id,
          macro_id: new_dig.id,
          daily: sub[:daily],
          hasRDI: sub[:hasRDI],
          label: sub[:label],
          schemaOrgTag: sub[:schemaOrgTag],
          tag: sub[:tag],
          total: sub[:total],
          unit: sub[:unit]
      )
      new_dig.subs << new_sub
      end
    end
    new_recipe.nutrients << new_dig
  end
end

new_user = User.create!(
  email: 'new@user.com',
  password: 'newuser'
)

new_fav = UserFavorite.create(
  user_id: new_user.id,
  recipe_id: Recipe.first.id
)
