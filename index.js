const returnFirstTwoDrivers = function (driversArray) {
  console.log(driversArray);
  return driversArray.slice(0, 2);
};
const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function multiplyby(num1) {
  return function multiply(num2) {
    return num1 * num2;
  }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, myFunction){
    return myFunction(driversArray)
}
