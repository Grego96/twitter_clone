async function runAllSeeders() {
  // await require("mongoose").connection.dropDatabase();
  // await require("./userSeeder")();
  // await require("./tweetSeeder")();
  await require("./fallowAndTweetsSeeders")()

}

runAllSeeders();

