const db = require("../db");
const Employee = require("../models/employee");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const employees = [
    {
      first_name: "Bruno",
      last_name: "Galvao",
      email: "bruno.galvao@ga.co",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
    {
      first_name: "Jerry",
      last_name: "Ferry",
      email: "jerryferry.isaberry@jf.com",
      job_title: "A Jerry Imposter",
      address: {
        street: "Fake Avenue",
        city: "New Fake City",
        state: "FC",
        zip: "39411",
      },
    },
    {
      first_name: "Tommy",
      last_name: "Chewy",
      email: "tomtom.chewymewy@rat.com",
      job_title: "A Tom Imposter",
      address: {
        street: "Fake Cat St",
        city: "SoME RANDOM CITY",
        state: "Some RandomPlace",
        zip: "12345",
      },
    },
  ];
  await Employee.insertMany(employees);
  console.log("Created New Employees To Abuse!");
};

const run = async () => {
  await main();
  db.close;
};

run();
