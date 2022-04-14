const db = require("./db");
const Employee = require("./models/employee");

db.on("error", console.error.bind(console, "MongoDB Has An Error: "));

const findAllEmployees = async () => {
  const employees = await Employee.find();
  console.log(
    "Here Are All The Employees Under Your Command, Your Majesty: ",
    employees
  );
};

const createOneEmployee = async () => {
  const employee = await new Employee({
    first_name: "Elon",
    last_name: "Musk",
    email: "TeslaLovesSaul@richfolks.com",
    job_title: "Funny Twitter Guy",
    address: {
      street: "RichLand St",
      city: "Private Island",
      state: "Mars",
      zip: "%$%%^^&",
    },
  });
  await employee.save();
  console.log(
    "Your Majesty, A New Musk Has Been Created With The Following Info :",
    employee
  );
};

const createThreeEmployees = async () => {
  const employee1 = await new Employee({
    first_name: "Joe",
    last_name: "Mama",
    email: "toolazy@lzy.com",
    job_title: "Yo Momma Jokes Enthusiast",
    address: {
      street: "Joke St",
      city: "Joke Island",
      state: "Sas",
      zip: "23453",
    },
  });
  const employee2 = await new Employee({
    first_name: "Goku",
    last_name: "The One From Dragonball Z",
    email: "ILostToSaulFairAndSqaure@loser.com",
    job_title: "Sauls Punching Bag",
    address: {
      street: "Loser Street",
      city: "Loser City",
      state: "Loser State",
      zip: "09786",
    },
  });
  const employee3 = await new Employee({
    first_name: "Thanos",
    last_name: "I dont know, Im not a nerd",
    email: "IWouldSacrificeMyDaughterAgainIfICould@NationalHero.com",
    job_title: "Tony Stark Murderer",
    address: {
      street: "SomePlanet",
      city: "Bronx",
      state: "Bronx",
      zip: "Bronx",
    },
  });

  await employee1.save();
  await employee2.save();
  await employee3.save();
  console.log(
    "Your Majesty, Three New Employees Were Just Made With The Following Info :",
    employee1,
    employee2,
    employee3
  );
};

const updateEmployee = async () => {
  const employee = await Employee.updateOne(
    { first_name: "Bruno" },
    { first_name: "We Don't Talk About Bruno" }
  );
  console.log(employee);
};

const deleteAnEmployee = async () => {
  const disappear = await Employee.deleteOne({ name: "Joe" });
  console.log("Eliminated a Employee");
};

const GimmeTheFirstAndLastNames = async () => {
  const tattleTailer = await Employee.find(
    {},
    {
      email: 0,
      job_title: 0,
      address: 0,
      createdAt: 0,
      updatedAt: 0,
      _id: 0,
      __v: 0,
    }
  );
  console.log("Here are all the suspects", tattleTailer);
};

const run = async () => {
  // await findAllEmployees();
  // await createOneEmployee();
  await createThreeEmployees();
  // await updateEmployee();
  // await deleteAnEmployee();
  // await GimmeTheFirstAndLastNames();

  process.exit();
};

run();
