// 6.Task: Array Reduction

// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = (numbers) => {
   const sum = numbers.reduce((acc, number) => {
      if (number % 2 === 0) {
         acc += number;
      }
      return acc;
   }, 0);
   return sum;
};

const sum = sumOfEvenNumbers(numbers);
console.log(sum);
