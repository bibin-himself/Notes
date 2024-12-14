
import "./App.css";
import Compo from "./components/Compo";
import { useState } from "react";
// import InterviewSnips from "./components/InterviewSnips";
import Rough2 from "./components/rough2";
import RoutesProd from "./components/Router/RoutesProd";


function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decre = () => {
    setCount((prevCount) => prevCount - 1);
  };



 



let dep = [
  {
    sales: [
      {name: "Bibin",
      salary: "50000"},

      {name: "Joe",
        salary: "75000"},
        
        {name: "Doe",
          salary: "20000"},
    ],

    marketing: [
      {name: "Riya",
      salary: "50000"},

      {name: "Raj",
        salary: "15000"},
        
        {name: "Mary",
          salary: "40000"},
    ],

    accounts: [
      {name: "Ram",
      salary: "50000"},

      {name: "Roy",
        salary: "35000"},

        {name: "Mary",
          salary: "75000"},
    ]

  },
  
];

// Step 1: Flatten the arrays into a single array of employees
let emps = [...dep[0].sales, ...dep[0].marketing, ...dep[0].accounts];

// Step 2: Use reduce to calculate name occurrences
let calc = emps.reduce((acc, cur) => {
  acc[cur.name] = (acc[cur.name] || 0) + 1;
  return acc;
}, {});
console.log("Name itirations:", calc);


let ttlSal = emps.reduce((acc, cur) => {
  return acc + Number(cur.salary);
}, 0);
console.log("Total Salary:", ttlSal);




//Total salary for each department
const calculateDepartmentSalary = (department) => {
  return department.reduce((total, employee) => total + Number(employee.salary), 0);
};

// Calculate total salary for each department
let totalSalaries = {
  sales: calculateDepartmentSalary(dep[0].sales),
  marketing: calculateDepartmentSalary(dep[0].marketing),
  accounts: calculateDepartmentSalary(dep[0].accounts)
};
console.log("Total salary for each department:", totalSalaries);




//////Employees grouped by salary////////

// Step 1: Flatten all employees into a single array
let employees = [...dep[0].sales, ...dep[0].marketing, ...dep[0].accounts];

// Step 2: Group employees by salary
let groupedBySalary = employees.reduce((salaryGroups, employee) => {
  const salary = employee.salary;
  if (!salaryGroups[salary]) {
    salaryGroups[salary] = [];  // Initialize an empty array if salary doesn't exist
  }
  salaryGroups[salary].push(employee.name);  // Add employee's name to the corresponding salary group
  return salaryGroups;
}, {});

console.log("Employees grouped by salary:", groupedBySalary);





let num = [
  {name: 'A',
  age: 25
  },
  {name: 'B',
    age: 20
    },
    {name: 'C',
      age: 35
      },
      {name: 'D',
        age: 40
        },
        {name: 'D',
          age: 40
          }
];



let ocr = num.reduce((acu,cur) => {
  acu[cur.name] = (acu[cur.name] || 0) + 1;
  return acu;
}, {});
console.log("Name itirations:", ocr);




let max = num.reduce((acc, cur) => acc + cur.age, 0);
console.log(`MAX: ${max}`);



let highAge = num.reduce((acc, cur) => cur.age > acc.age ? cur : acc).age;
console.log('Highest Age:', highAge);




// Returning names of people under age 30
let under30 = num
  .filter(person => person.age < 30)
  .map(person => person.name);

console.log('Names of people under age 30:', under30);


let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let countF = fruits.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});

console.log(countF); 

  

  return (
    <>

    <ul>
      {Object.entries(ocr).map(([name, count], index) => (
        <li key={index}>{name} : {count}</li>
      ))}
    </ul>

    <RoutesProd />
    
    <Rough2/>
      <Compo count={count} incHandle={increment} decHandle={decre} />
    </>
  );
}

export default App;
