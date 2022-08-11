async function runAllSeeders() {
  console.log("seeders");

  // await require("mongoose").connection.dropDatabase();
  await require("./userSeeder")();
  await require("./tweetSeeder")();
  
}

runAllSeeders();

