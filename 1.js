// 1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const peoples = [
   {
      name: "Mehedi",
      age: 30,
      gender: "male",
   },
   {
      name: "Habiba",
      age: 22,
      gender: "female",
   },
   {
      name: "Sumaiya",
      age: 24,
      gender: "female",
   },
   {
      name: "Muhin",
      age: 18,
      gender: "male",
   },
   {
      name: "Tahmid",
      age: 25,
      gender: "male",
   },
];

const func = (peoples) => {
   const men = peoples.filter((people) => people.gender !== "female");
   const menNames = men.map((man) => man.name);
   return menNames;
};

const menNames = func(peoples);
console.log(menNames);
