// 4.Task: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
   {
      make: "Ford",
      model: "Fiesta",
      year: 1997,
   },
   {
      make: "Toyota",
      model: "Corolla",
      year: 2018,
   },
   {
      make: "Honda",
      model: "Civic",
      year: 1999,
   },
   {
      make: "Audi",
      model: "A4",
      year: 2003,
   },
   {
      make: "BMW",
      model: "M3",
      year: 1989,
   },
];

const sortByYear = (cars) => {
   const sortedCars = cars.sort((a, b) => a.year - b.year);
   return sortedCars;
};

const sortedCars = sortByYear(cars);
console.log(sortedCars);
