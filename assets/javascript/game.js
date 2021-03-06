//Global Variables
let wins = 0;
let losses = 0;
let counter = 0;
let computerChoice = "";
let imagesCrystals = ["./assets/images/crystal1.png", "./assets/images/crystal2.png", "./assets/images/crystal3.png", "./assets/images/crystal4.png"];

// Functions
// Computer will randomly select a number between 120 - 199.
function randomComputerChoice() {
  computerChoice = Math.floor(Math.random() * 102) + 19;
}

// Each crystal will randomly select a number between 1 - 12 at the start of each game.
function crystalsReset() {
  for (let i = 0; i < imagesCrystals.length; i++) {
    let crystal = $("<img>");
    crystal.addClass("crystal");
    crystal.attr("src", imagesCrystals[i]);
    crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
    $(".crystal-pics").append(crystal);
  }
}

function gameReset() {
  $(".randomNumber").html("<p>Get to this number: " + "<p>" + computerChoice);
  $(".counterWinsLosses").html("<p>Wins: " + wins + "<p>" + "<p>Losses: " + losses + "<p>");
  $(".scoreUser").html(counter);
  $(".crystal-pics").empty();
}

function totalReset() {
  randomComputerChoice();
  counter = 0;
  gameReset();
  crystalsReset();
}

// Run these codes.
randomComputerChoice();
gameReset();
crystalsReset();

// This is the on click function for when a crystal is clicked.
$(document).on("click", ".crystal", crystalCollector);

function crystalCollector() {
  counter += parseInt($(this).attr("value"));
  $(".scoreUser").html(counter);
  if (counter === computerChoice) {
    wins++;
    alert("WOW! You are a Math Wizard!")
    totalReset();
  } else if (counter > computerChoice) {
    losses++;
    alert("You should use a calculator next time!")
    totalReset();
  };
};