var RPSSL = {

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        SPOCK: 3,
        LIZARD: 4
    },

    score: {
        wins: 0,
        lossos: 0,
        ties: 0
    },

    match: {
        WINS: 0,
        LOSSES: 0
    },

    player: new Player(),

    computer: new Player(),

    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    spockButton: document.getElementById("spock"),
    lizardButton: document.getElementById("lizard"),
    playButton: document.getElementById("play"),

    storePlayerChoice: function (choice) {
        this.player.choice = choice;
        this.storeComputerChoice();
    },

    storeComputerChoice: function () {
        this.computer.choice = Math.floor(Math.random() * 5);
    },

    Player: function () {
        this.choice = null;
    }
}


function storeComputerChoice() {
    computer.choice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computer.choice);
}

function playGame() {
    if (player.choice != null) {
        if (player.choice == computer.choice) {
            ++score.ties
            displayGameResult("tie")
        } else if (RPSSL.player.choice == RPSSL.choices.ROCK && (RPSSL.computer.choice == RPSSL.choices.SCISSORS || RPSSL.computer.choice == RPSSL.choices.LIZARD)) {
            ++score.wins
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.choice == RPSSL.choices.PAPER && (RPSSL.computer.choice == RPSSL.choices.ROCK || RPSSL.computer.choice == RPSSL.choices.SPOCK)) {
            ++score.wins
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.choice == RPSSL.choices.SCISSORS && (RPSSL.computer.choice == RPSSL.choices.PAPER || RPSSL.computer.choice == RPSSL.choices.LIZARD)) {
            ++score.wins
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.choice == RPSSL.choices.SPOCK && (RPSSL.computer.choice == RPSSL.choices.ROCK || RPSSL.computer.choice == RPSSL.choises.SCISSORS)) {
            ++score.wins
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.choice == RPSSL.choices.LIZARD && (RPSSL.computer.choice == RPSSL.choises.PAPER || RPSSL.computer.choice == RPSSL.choices.SPOCK)) {
            ++score.wins
            updateMatch();
            displayGameResult("win")
        } else {
            ++score.losses
            updateMatch();
            displayGameResult("lose")
        }
    }
    player.choice = null;
}

function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    var message = "Your choice was " + RPSSL.player.choice + " and the computer's choice was " + RPSSL.computer.choice + ".";
    if (result === "win") {
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}



function updateMatch() {
    if (score.wins == 2) {
        ++match.WINS;
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        updateMatchBoard();
    } else if (score.losses == 2) {
        ++match.LOSSES;
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        updateMatchBoard();
    }
}

function updateMatchBoard() {
    document.getElementById("wins2").textContent = match.WINS;
    document.getElementById("losses2").textContent = match.LOSSES;
}

function updateScoreBoard() {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("ties").textContent = score.ties;
}




RPSSL.rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
RPSSL.paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
RPSSL.scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
RPSSL.spockButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
RPSSL.lizardButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
RPSSL.playButton.addEventListener('click', () => {
    playGame()
});
