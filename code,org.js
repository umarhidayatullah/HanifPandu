// Create the flower sprites
var flower1 = createSprite(75, 330, 25, 100);
flower1.setAnimation("flower.png");
var flower2 = createSprite(150, 330, 25, 100);
flower2.setAnimation("flower.png");
var flower3 = createSprite(225, 330, 25, 100);
flower3.setAnimation("flower.png");
// Create the vase sprite (invisible)
var vase = createSprite(325, 305, 100, 50);
vase.setAnimation("vase.png");
vase.visible = false;
// Create a counter to keep track
// of the number of flowers cut
var flower_count = 0;
function draw() {
  // Draw the background
  background("lightblue");
  // Draw the ground
  fill("brown");
  noStroke();
  rect(0, 350, 400, 50);
  // If key is pressed, hide the flower
  // and move it to its vase position
  if (mousePressedOver(flower1)) {
    flower_count = flower_count + 1;
    flower1.visible = false;
    flower1.x = 305;
    flower1.y = 210;
    flower1.rotation = -15;
  }
  if (mousePressedOver(flower2)) {
    flower_count = flower_count + 1;
    flower2.visible = false;
    flower2.x = 330;
    flower2.y = 210;
  }
  if (mousePressedOver(flower3)) {
    flower_count = flower_count + 1;
    flower3.visible = false;
    flower3.x = 355;
    flower3.y = 210;
    flower3.rotation = 15;
  }
  // Once all the flowers have been cut,
  // show them all, including the vase
  if (flower_count >= 3){
    flower1.visible = true;
    flower2.visible = true;
    flower3.visible = true;
    vase.visible = true;
  }
  drawSprites();
  // Draw the text
  textSize(35);
  fill("purple");
  text("Thanks a BUNCH!", 50, 50);
  fill("black");
  textSize(16);
  text("Pick all the flowers by clicking on them :)", 50, 95);
  text("", 0, 100, 400, 50);
}

<br>
//Rock, Paper, Scissors
// List of icons that can be used in the game
var icons = ["icon://fa-hand-rock-o", "icon://fa-hand-paper-o", "icon://fa-hand-scissors-o"];

// List of possible choices to play
var choices = ["Rock", "Paper", "Scissors"];

// User and computer scores, started at 0
var playerScore = 0;
var computerScore = 0;

// Button for player to play rock
onEvent("rockButton","click",function(){
  updateScreen("Rock");
});

// Button for player to play paper
onEvent("paperButton","click",function(){
  updateScreen("Paper");
});

// Button for player to play scissors
onEvent("scissorsButton","click",function(){
  updateScreen("Scissors");
});

// When the user clicks any of the three buttons it runs a round
// of rock paper scissors. This function determines who won the
// game and updates the screen and scores for each player.
function updateScreen(playerChoice){
  
  // Randomly choose the computer's choice and decide who wins
  var computerChoice = randomChoose(choices);
  var winner = decideWinner(playerChoice, computerChoice);

  // Update the screen with the correct icon for each player
  setProperty("playerOutput","image",findIcon(playerChoice));
  setProperty("computerOutput","image",findIcon(computerChoice));

  
  // Update the screen with the text explaining who won.
  if(winner == "Draw"){
    setProperty("gameText","text","Draw!");
  } else if (winner == "Player") {
    setProperty("gameText","text","You win!");
    playerScore++;
    setProperty("playerScoreOutput","text",playerScore);
  } else if (winner == "Computer") {
    setProperty("gameText","text","Computer wins!");
    computerScore++;
    setProperty("computerScoreOutput","text",computerScore);    
  }
}

// iconName {string} - either "Rock", "Paper", or "Scissors"
// return {string} - the icon associated with the string provided
function findIcon(iconName){
  if (iconName == "Rock"){
    return icons[0];
  }else if (iconName == "Paper"){
    return icons[1];
  }else if (iconName == "Scissors"){
    return icons[2];
  }
}

// Randomly selects an item from the list provided and returns it
// list {list} - a list of items
// return {item} - a randomly chosen item from the list
function randomChoose(list){
    return list[randomNumber(0, choices.length-1)];
}

// Decides who wins a round of rock paper scissors by taking the two 
// playerChoice {string} - either "Rock", "Paper", or "Scissors", the human player's choice
// computerChoice {string} - either "Rock", "Paper", or "Scissors", the computer player's choice
// return {string} - either "Draw", "Player", or "Computer", depending on who
function decideWinner(playerChoice, computerChoice){
  if (playerChoice == "Rock" && computerChoice == "Rock"){
    return "Draw";
  }else if (playerChoice == "Paper" && computerChoice == "Paper"){
    return "Draw";
  }else if (playerChoice == "Scissors" && computerChoice == "Scissors"){
    return "Draw";
  }else if (playerChoice == "Rock" && computerChoice == "Paper"){
    return "Computer";
  }else if (playerChoice == "Rock" && computerChoice == "Scissors"){
    return "Player";
  }else if (playerChoice == "Paper" && computerChoice == "Scissors"){
    return "Computer";
  }else if (playerChoice == "Paper" && computerChoice == "Rock"){
    return "Player";
  }else if (playerChoice == "Scissors" && computerChoice == "Rock"){
    return "Computer";
  }else if (playerChoice == "Scissors" && computerChoice == "Paper"){
    return "Player";
  }
}
