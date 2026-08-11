/**
 * Checks if a is divisible by b
 *
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {boolean} true if divisible without a remainder, otherwise false
 */
function checkMultiplicity(a, b) {
  return a % b === 0;
}

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));
