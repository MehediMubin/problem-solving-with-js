// 3.Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

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