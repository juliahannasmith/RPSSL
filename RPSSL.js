var RPSSL = {

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        SPOCK: 3,
        LIZARD: 4,
    },

    score: {
        wins: 0,
        lossos: 0,
        ties: 0,
    },

    match: {
        WINS: 0,
        LOSSES: 0,
    },

    Player: function() {
        this.choice = null;
    },

    //player: new RPSSL.Player(),

    //computer: new RPSSL.Player(),

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
    },

    storeComputerChoice: function () {
        this.computer.choice = Math.floor(Math.random() * 5);
    },


    playGame: function () {
        if (player.choice != null) {
            if (player.choice == computer.choice) {
                ++RPSSL.score.ties
                RPSSL.displayGameResult("tie")
            } else if (RPSSL.player.choice == RPSSL.choices.ROCK && (RPSSL.computer.choice == RPSSL.choices.SCISSORS || RPSSL.computer.choice == RPSSL.choices.LIZARD)) {
                ++RPSSL.score.wins
                RPSSL.updateMatch();
                RPSSL.displayGameResult("win")
            } else if (RPSSL.player.choice == RPSSL.choices.PAPER && (RPSSL.computer.choice == RPSSL.choices.ROCK || RPSSL.computer.choice == RPSSL.choices.SPOCK)) {
                ++RPSSL.score.wins
                RPSSL.updateMatch();
                RPSSL.displayGameResult("win")
            } else if (RPSSL.player.choice == RPSSL.choices.SCISSORS && (RPSSL.computer.choice == RPSSL.choices.PAPER || RPSSL.computer.choice == RPSSL.choices.LIZARD)) {
                ++RPSSL.score.wins
                RPSSL.updateMatch();
                RPSSL.displayGameResult("win")
            } else if (RPSSL.player.choice == RPSSL.choices.SPOCK && (RPSSL.computer.choice == RPSSL.choices.ROCK || RPSSL.computer.choice == RPSSL.choises.SCISSORS)) {
                ++RPSSL.score.wins
                RPSSL.updateMatch();
                RPSSL.displayGameResult("win")
            } else if (RPSSL.player.choice == RPSSL.choices.LIZARD && (RPSSL.computer.choice == RPSSL.choises.PAPER || RPSSL.computer.choice == RPSSL.choices.SPOCK)) {
                ++RPSSL.score.wins
                RPSSL.updateMatch();
                RPSSL.displayGameResult("win")
            } else {
                ++RPSSL.score.losses
                RPSSL.updateMatch();
                RPSSL.displayGameResult("lose")
            }
        }
        RPSSL.player.choice = null;
    },

    displayGameResult: function () {
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

        RPSSL.updateScoreBoard();
    },

    updateMatch: function () {
        if (RPSSL.score.wins == 2) {
            ++RPSSL.match.WINS;
            RPSSL.score.wins = 0;
            RPSSL.score.losses = 0;
            RPSSL.score.ties = 0;
            RPSSL.updateMatchBoard();
        } else if (RPSSL.score.losses == 2) {
            ++RPSSL.match.LOSSES;
            RPSSL.score.wins = 0;
            RPSSL.score.losses = 0;
            RPSSL.score.ties = 0;
            RPSSL.updateMatchBoard();
        }
    },

    updateMatchBoard: function () {
        document.getElementById("wins2").textContent = RPSSL.match.WINS;
        document.getElementById("losses2").textContent = RPSSL.match.LOSSES;
    },

    updateScoreBoard: function () {
        document.getElementById("wins").textContent = RPSSL.score.wins;
        document.getElementById("losses").textContent = RPSSL.score.losses;
        document.getElementById("ties").textContent = RPSSL.score.ties;
    },

}



RPSSL.rockButton.addEventListener('click', () => {
    RPSSL.storePlayerChoice(0)
});
RPSSL.paperButton.addEventListener('click', () => {
    RPSSL.storePlayerChoice(1)
});
RPSSL.scissorsButton.addEventListener('click', () => {
    RPSSL.storePlayerChoice(2)
});
RPSSL.spockButton.addEventListener('click', () => {
    RPSSL.storePlayerChoice(3)
});
RPSSL.lizardButton.addEventListener('click', () => {
    RPSSL.storePlayerChoice(4)
});
RPSSL.playButton.addEventListener('click', () => {
    RPSSL.playGame()
});
