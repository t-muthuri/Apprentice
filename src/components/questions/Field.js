// you have an array (fieldcard) 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, *10
// when a player picks a card (cards dealt to a player),
// you add the card numbers picked and multiply the result by 10
// the score is the result of the above calculation

// cards dealt to a player 0, 4, 5, 9 | *10
// if 0 pick 4, 5, 9 << 0 max value to 0, * 10 if zero is picked remove the max value between 0-10
// 4, 5, 0 | * 10
// (4 + 5 + 0) * 10

// Test cases
// Function culcResult ([‘0’, ‘4’, ‘5’, ‘9’, ‘10x’]) -> 90pt
// Function culcResult ([‘1’, ‘4’, ‘5’, ,‘10x’, ‘9’]) -> 190pt
// Function culcResult ([‘1’, ‘4’, ‘5’, ‘9’, ‘2’]) -> 21pt

// field card 0, 1, ... 10 | *10

const fieldCard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // *10

function culcResult() {
  const cardsDealt = [];
  let points = 0;

  const randOne = fieldCard[Math.floor(Math.random() * fieldCard.length)];
  const randTwo = fieldCard[Math.floor(Math.random() * fieldCard.length)];
  const randThree = fieldCard[Math.floor(Math.random() * fieldCard.length)];
  const randFour = fieldCard[Math.floor(Math.random() * fieldCard.length)];
  const randFive = fieldCard[Math.floor(Math.random() * fieldCard.length)];

  console.log(randOne, randTwo, randThree, randFour, randFive);

  cardsDealt.push(randOne, randTwo, randThree, randFour, randFive);

  if (cardsDealt.includes(10)) {
    for (let i = 0; i < cardsDealt.length; i++) {
      points += cardsDealt[i];
    }

    const score = (points - 10) * 10;
    console.log(score);
  } else if (cardsDealt.includes(0)) {
    let arr = cardsDealt;
    console.log("arr:", arr);
    const maximum = arr.reduce((a, s) => Math.max(a, s));
    console.log("max:", maximum);
    for (let i = 0; i < cardsDealt.length; i++) {
      points += cardsDealt[i];
    }
    const score = points - maximum;
    console.log(score);
  } else {
    for (let i = 0; i < cardsDealt.length; i++) {
      points += cardsDealt[i];
    }
    console.log(points);
  }
}

culcResult();
