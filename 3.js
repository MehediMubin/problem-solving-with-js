const makeSquare = (number) => number * number;

const makeDouble = (number) => number * 2;

const addFive = (number) => number + 5;

const threeInOne = (number) => {
  let ans = makeSquare(number);
  ans += makeDouble(number);
  ans += addFive(number);
  return ans;
}

const number = 3;
const ans = threeInOne(number);
console.log(ans);