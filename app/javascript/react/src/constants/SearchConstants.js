export const RECIPE_SEARCH_APP_ID = "4ebfc890"
export const RECIPE_SEARCH_API_KEY = "0192129d476b3750652e51e0d63f2c08"

export const NUTRITION_ANALYSIS_APP_ID = "69db4607"
export const NUTRITION_ANALYSIS_API_KEY = "6a105988912111abb5a3cb4935827216"

export const FOOD_DB_APP_ID = "b9b41789"
export const FOOD_DB_API_KEY = "abf29acf60da6927a324048509cfd688"

//RECIPE SEARCH
//required search term for recipe search
//`q=${TEST_Q}`
// export const TEST_Q = "chicken"
//first index of results to show
//`from=${TEST_FROM}`
// export const TEST_FROM = 0
//last index of results to show
// //`to=${TEST_TO}`
// export const TEST_TO = 4
//max number of ingredients
//`ingr=${TEST_INGR}`
// export const TEST_INGR = 10
//Diet label: ["balanced", "high-protein", "high-fiber", "low-fat", "low-carb",
  //"low-sodium"]
// export const DIET_TYPES = ["balanced", "high-protein", "high-fiber", "low-fat",
  // "low-carb", "low-sodium"]
export const DIET_TYPES = ["balanced", "high-protein", "low-fat", "low-carb"]
//`diet=${TEST_DIET}`
// export const TEST_DIET = DIET_TYPES[0]
//Health label: One of the Health api parameters listed in Diet and Health
  //Labels table at the end of this documentation. Miltiple labels cab be
  //submitted simultatniousely this way "health=peanut-free&health=tree-nut-free"
//`health=${TEST_HEALTH_1}&health=${TEST_HEALTH_2}`
// export const TEST_HEALTH_1 = "peanut-free"
// export const TEST_HEALTH_2 = "tree-nut-free"
export const HEALTH_LABELS = ["vegan", "vegetarian", "sugar-conscious", "peanut-free", "tree-nut-free", "alcohol-free"]

// export const HEALTH_LABELS = ["vegan", "vegetarian", "paleo", "dairy-free", "gluten-free", "wheat-free", "fat-free", "low-sugar", "egg-free", "peanut-free", "tree-nut-free", "soy-free", "fish-free", "shellfish-free"]
//calories: The format is calories=RANGE where RANGE is replaced by the value in
  //kcal. RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are
  //non-negative integer numbers. The + symbol needs to be properly encoded.
  //Examples: "calories=100-300" will return all recipes with which have between
  //100 and 300 kcal per serving.
//`calories=${TEST_CAL_MIN}-${TEST_CAL_MAX}` OR `calories=${TEST_CAL_MIN}%2B` OR
  //`calories=${TEST_CAL_MAX}`
// export const TEST_CAL_MIN = 0
// export const TEST_CAL_MAX = 400
//time: Time range for the total cooking and prep time for a recipe . The format
  //is time=RANGE where RANGE is replaced by the value in minutes. RANGE is in
  //one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer
  //numbers. The + symbol needs to be properly encoded. Examples: "time=1%2B"
  //will return all recipes with available total time greater then 1 minute
//`time=${TEST_CAL_MIN}-${TEST_CAL_MAX}` OR `time=${TEST_CAL_MIN}%2B` OR
  //`time=${TEST_CAL_MAX}`
// export const TEXT_TIME_MIN = 1
// export const TEXT_TIME_MAX = 10
//excluded: Excluding recipes with certain ingredients. The format is
  //excluded=FOOD where FOOD is replaced by the name of the specific food you
  //don’t want to be present in the recipe results. More than one food can be
  //excluded at the same time. Example: excluded=vinegar&excluded=pretzel will
  //exclude any recipes which contain vinegar or pretzels in their ingredient list
//`excluded=${TEST_EXCL_1}&excluded=${TEST_EXCL_2}`
// export const TEXT_EXCL_1 = "vinegar"
// export const TEXT_EXCL_2 = "pretzel"
//Callback parameter for JSONP. This will "envelop" the result in a JavaScript
  //function call to the specified callback. Optional

export const NUTRIENTS = {
  CHOCDF: {
    label: "Carbs",
    unit: "g"
  },
  NIA: {
    label: "Niacin (B3)",
    unit:	"mg"
  },
  CHOLE: {
    label: "Cholesterol",
    unit: "mg"
  },
  P: {
    label: "Phosphorus",
    unit:	"mg"
  },
  FAMS: {
    label: "Monounsaturated",
    unit: "g"
  },
  PROCNT: {
    label: "Protein",
    unit: "g"
  },
  FAPU: {
    label: "Polyunsaturated",
    unit:	"g"
  },
  RIBF:	{
    label: "Riboflavin (B2)",
    unit:	"mg"
  },
  FASAT: {
    label: "Saturated",
    unit:	"g"
  },
  SUGAR: {
    label: "Sugars",
    unit: "g"
  },
  FAT: {
    label: "Fat",
    unit:	"g"
  },
  THIA:	{
    label: "Thiamin (B1)",
    unit: "mg"
  },
  FATRN: {
    label: "Trans",
    unit: "g"
  },
  TOCPHA:	{
    label: "Vitamin E",
    unit: "mg"
  },
  FE:	{
    label: "Iron",
    unit: "mg"
  },
  VITA_RAE:	{
    label: "Vitamin A",
    unit:	"æg"
  },
  FIBTG:	{
    label: "Fiber",
    unit:	"g"
  },
  VITB12:	{
    label: "Vitamin B12",
    unit: "æg"
  },
  FOLDFE:	{
    label: "Folate (Equivalent)",
    unit: "æg"
  },
  VITB6A:	{
    label: "Vitamin B6",
    unit:	"mg"
  },
  K: {
    label: "Potassium",
    unit:	"mg"
  },
  VITC:	{
    label: "Vitamin C",
    unit: "mg"
  },
  MG:	{
    label: "Magnesium",
    unit:	"mg"
  },
  VITD: {
    label: "Vitamin D",
    unit: "æg"
  },
  NA:	{
    label: "Sodium",
    unit: "mg"
  },
  VITK1: {
    label: "Vitamin K",
  	unit: "æg"
  },
  ZN: {label: "Zinc",
  unit: "mg"
  }
}
//`nutrients%5B${TEST_NTR}%5D=${TEST_NTR_MAX}` OR
  //`nutrients%5B${TEST_NTR}%5D=${TEST_NTR_MIN}%2B` OR
  //`nutrients%5B${TEST_NTR}%5D=${TEST_NTR_MIN}-${TEST_NTR_MAX}`
// export const TEST_NTR = Object.keys(NUTRIENTS)[0]
// export const TEST_NTR_MIN = 10
// export const TEST_NTR_MAX = 20
//negative search
  //`excluded=${sausage}`
// export const TEST_EXCLUDED = "sausage"
