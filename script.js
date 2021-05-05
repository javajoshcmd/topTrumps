// object array containing all cards

const deck = [
  (hendrix = {
    name: "Jimmi Hendrix",
    good: 8,
    bad: 5,
    cool: 9,
    cringe: 2,
    alive: false,
  }),
  (andre3000 = {
    name: "Andre 3000",
    good: 9,
    bad: 3,
    cool: 10,
    cringe: 3,
    alive: true,
  }),
  (andersonPaak = {
    name: "Anderson Paak.",
    good: 7,
    bad: 2,
    cool: 10,
    cringe: 1,
    alive: true,
  }),
  (fkaTwigs = {
    name: "FKA Twigs",
    good: 6,
    bad: 1,
    cool: 8,
    cringe: 0,
    alive: true,
  }),
  (elvis = {
    name: "Elvis Pressley",
    good: 6,
    bad: 6,
    cool: 7,
    cringe: 8,
    alive: false,
  }),
  (michaelJackson = {
    name: "Michael Jackson",
    good: 8,
    bad: 2,
    cool: 5,
    cringe: 10,
    alive: false,
  }),
  (eltonJohn = {
    name: "Elton John",
    good: 7,
    bad: 5,
    cool: 7,
    cringe: 2,
    alive: true,
  }),
  (davidBowie = {
    name: "David Bowie",
    good: 9,
    bad: 1,
    cool: 10,
    cringe: 0,
    alive: false,
  }),
  (madonnna = {
    name: "Madonna",
    good: 8,
    bad: 3,
    cool: 7,
    cringe: 6,
    alive: true,
  }),
  (stevieWonder = {
    name: "Stevie Wonder",
    good: 9,
    bad: 3,
    cool: 10,
    cringe: 3,
    alive: true,
  }),
  (eminem = {
    name: "Eminem",
    good: 6,
    bad: 6,
    cool: 4,
    cringe: 5,
    alive: true,
  }),
  (billyJoel = {
    name: "Billy Joel",
    good: 6,
    bad: 8,
    cool: 2,
    cringe: 9,
    alive: true,
  }),
  (taylorSwift = {
    name: "Taylor Swift",
    good: 3,
    bad: 10,
    cool: 0,
    cringe: 4,
    alive: true,
  }),
  (arethaFranklin = {
    name: "Aretha Franklin",
    good: 9,
    bad: 0,
    cool: 10,
    cringe: 0,
    alive: false,
  }),
  (theBeatles = {
    name: "The Beatles",
    good: 8,
    bad: 7,
    cool: 4,
    cringe: 6,
    alive: false,
  }),
  (whitneyHouston = {
    name: "Whitney Houston",
    good: 4,
    bad: 4,
    cool: 7,
    cringe: 2,
    alive: false,
  }),
  (tupac = {
    name: "Tupac Shakurr",
    good: 5,
    bad: 3,
    cool: 4,
    cringe: 6,
    alive: false,
  }),
  (jamesBrown = {
    name: "James Brown",
    good: 7,
    bad: 2,
    cool: 2,
    cringe: 8,
    alive: false,
  }),
  (beyonce = {
    name: "Beyonce",
    good: 6,
    bad: 5,
    cool: 8,
    cringe: 4,
    alive: true,
  }),
  (talkingHeads = {
    name: "Talking Heads",
    good: 9,
    bad: 4,
    cool: 10,
    cringe: 0,
    alive: false,
  }),
  (rem = {
    name: "R.E.M",
    good: 0,
    bad: 10,
    cool: 0,
    cringe: 8,
    alive: false,
  }),
  (nineInchNails = {
    name: "Nine Inch Nails",
    good: 7,
    bad: 4,
    cool: 10,
    cringe: 3,
    alive: true,
  }),
  (gunsNRoses = {
    name: "Gun N Roses",
    good: 2,
    bad: 8,
    cool: 0,
    cringe: 10,
    alive: false,
  }),
  (tomPetty = {
    name: "Tom Petty",
    good: 4,
    bad: 4,
    cool: 6,
    cringe: 4,
    alive: false,
  }),
  (beastieBoys = {
    name: "Beastie Boys",
    good: 9,
    bad: 4,
    cool: 10,
    cringe: 2,
    alive: true,
  }),
  (radiohead = {
    name: "Radiohead",
    good: 9,
    bad: 0,
    cool: 7,
    cringe: 3,
    alive: true,
  }),
  (acDc = {
    name: "AC DC",
    good: 6,
    bad: 3,
    cool: 2,
    cringe: 6,
    alive: true,
  }),
  (cher = {
    name: "Cher",
    good: 1,
    bad: 4,
    cool: 0,
    cringe: 7,
    alive: true,
  }),
  (parliment = {
    name: "Parliment",
    good: 10,
    bad: 0,
    cool: 10,
    cringe: 0,
    alive: false,
  }),
  (drDre = {
    good: 9,
    bad: 3,
    cool: 6,
    cringe: 4,
    alive: true,
  }),
];

// declaring arrays for the player and opponent hand

let player1 = [];

let player2 = [];

// Functions to randomly shuffle and deal the deck of cards.

const deal1 = (deck) => {
  for (let i = 0; i < 15; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 30);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
    player1.push(deck[randomIndex]);
  }
};

const deal2 = (deck) => {
  for (let i = 0; i < 15; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 30);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
    player2.push(deck[randomIndex]);
  }
};

deal1(deck);
deal2(deck);

// variables and objects for scoring and player hands.

let player1Hand = player1.pop();
let player2Hand = player2.pop();
let score = {
  user: 15,
  cpu: 15,
};

let deadCards = {
  stack: 0,
};

// Main game logic function

const Game = (player1Hand, player2Hand, score) => {
  if (score.user >= 1) {
    console.log(player1Hand);
    console.log("Which stat do you choose?");
    let choice = prompt("Good, Bad, Cool, Cringe, or Alive");
    if ((choice = "good")) {
      if (player1Hand.good > player2Hand.good) {
        score.user++;
        score.cpu--;
        console.log("you have won this round score:", score.user);
      } else if (player1Hand.good == player2Hand.good) {
        deadCards.stack++;
        console.log("its a draw");
      } else {
        score.user--;
        score.cpu++;
        console.log("you have lost this round score:", score.user);
      }
    } else if ((choice = "bad")) {
      if (player1Hand.bad > player2Hand.bad) {
        console.log("you have won this round score:", score.user);
        score.user++;
        score.cpu--;
      } else if (player1Hand.bad == player2Hand.bad) {
        deadCards.stack++;
        console.log("its a draw");
      } else if (player1Hand.bad < player2Hand.bad) {
        console.log("you have lost this round score:", score.user);
        score.user--;
        score.cpu++;
      }
    } else if ((choice = "cool")) {
      if (player1Hand.cool > player2Hand.cool) {
        console.log("you have won this round score:", score.user);
        score.user++;
        score.cpu--;
      } else if (player1Hand.cool == player2Hand.cool) {
        deadCards.stack++;
        console.log("its a draw", score.user);
      } else if (player1Hand.cool < player2Hand.cool) {
        console.log("you have lost this round score:", score.user);
        score.user--;
        score.cpu++;

        player1Hand = player1.pop();
      } else if ((choice = "cringe")) {
        if (player1Hand.cringe > player2Hand.cringe) {
          console.log("you have won this round score:", score.user);
          score.user++;
          score.cpu--;
        } else if (player1Hand.cringe == player2Hand.cringe) {
          deadCards.stack++;
          console.log("its a draw", score.user);
        } else if (player1Hand.cringe < player2Hand.cringe) {
          console.log("you have lost this round score:", score.user);
          score.user--;
          score.cpu++;
        }
        player1Hand = player1.pop();
      } else if ((choice = "alive")) {
        if (player1Hand.alive > player2Hand.alive) {
          console.log("you have won this round score:", score.user);
          score.user++;
          score.cpu--;
        } else if (player1Hand.alive == player2Hand.alive) {
          deadCards.stack++;
          console.log("its a draw", score.user);
        } else if (player1Hand.alive < player2Hand.alive) {
          console.log("you have lost this round score:", score.user);
          score.user--;
          score.cpu++;
        }
      }
    }
  } else if (score.user > 29 && score.cpu < 1) {
    console.log("You have won the Game");
  } else {
    console.log("You have lost the Game");
  }
};

// function to make the game repeat until a winner is declared.

const nextRound = (player1Hand, player2Hand, score) => {
  let player1Hand1 = player1.pop();
  let player2Hand2 = player2.pop();
  Game(player1Hand1, player2Hand2, score);
};
