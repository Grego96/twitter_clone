async function runAllSeeders() {

  await require("./seeders/fallowAndTweetsSeeders")()

}

runAllSeeders();

