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
