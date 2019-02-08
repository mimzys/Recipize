//The Mifflin St Jeor Equation
let weight //in kg
let height //in cm
let age
let gender
let s
if (gender == "female") {
  s = -161
} else {
  s = 5
}
let basalMetabolicRate = (10 * weight + 6.25 * height - 5 * age + s)

//exersice
//min - 1.2
//max - 1.9
