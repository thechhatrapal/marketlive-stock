const mongoose = require("mongoose");

const ConnectDb = () => {
//   mongoose.set("strictQuery", false);
  const mongoDB = process.env.DATABASE_URL;

  main().catch((err) => console.log(err));
  main().then(() => console.log("db is connected"));
  async function main() {
    await mongoose.connect(mongoDB);
  }
};

module.exports = ConnectDb;
