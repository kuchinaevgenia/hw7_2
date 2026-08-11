const isWorkingAgePerson = function (age) {
  return age >= 16 && age <= 64;
};

console.log(isWorkingAgePerson(88));
console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
