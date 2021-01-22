function convertGallonToLiter(gallon) {
  return gallon * 3.78541;
}

const number = parseInt(prompt("Enter the amount of gallons you need to convert!"));
const result = convertGallonToLiter(number);
alert(number + " gallons will be " + result + " liters!");
