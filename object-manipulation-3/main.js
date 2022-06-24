console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Jay', hand: [] },
  { name: 'Erik', hand: [] },
  { name: 'Kyle', hand: [] },
  { name: 'Charles', hand: [] }
];

var ranks = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K'
];

var suits = [
  'Clubs',
  'Diamonds',
  'Hearts',
  'Spades'
];

// creating deck of cards:
var deck = [];

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++) {
    deck.push(ranks[j] + suits[i]);
  }
}

// shuffle cards:
var shuffleDeck = _.shuffle(deck);

// handout cards (game start):
function startGame(players) {
  for (var k = 0; k < players.length; k++) {
    players[k].hand.push(shuffleDeck[k], shuffleDeck[k + players.length]);
  }
  var playerPoints = [];
  for (var l = 0; l < players.length; l++) {
    var point = handlePoints(players[l].hand);
    playerPoints.push(point);
  }
  var highestPointIdx = playerPoints.indexOf(highestPoint(playerPoints));

  if (tie(playerPoints).length === 0) {
    console.log('playerPoints: ', playerPoints);
    console.log('Winner: ', players[highestPointIdx].name);
  } else {
    var remainingPlayers = [];
    var tiedIdx = tie(playerPoints);
    for (var m = 0; m < tiedIdx.length; m++) {
      if (!remainingPlayers.includes(tiedIdx[m])) {
        remainingPlayers.push(players[tiedIdx[m]]);
      }
      remainingPlayers[m].hand = [];
    }
    console.log('playerPoints: ', playerPoints);
    startGame(remainingPlayers);
  }
}

// putting card scores:
function handlePoints(cards) {
  var total = 0;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].includes('A')) {
      total += 11;
    } else if (cards[i].includes('K') || cards[i].includes('Q') || cards[i].includes('J')) {
      total += 10;
    } else {
      total += parseInt(cards[i]);
    }
  }
  return total;
}

// finding highest points:
function highestPoint(points) {
  var highest = 0;
  for (var i = 0; i < points.length; i++) {
    if (points[i] > highest) {
      highest = points[i];
    }
  }
  return highest;
}

// for tie points:
function tie(scores) {
  var tieIdx = [];
  for (var i = 0; i < scores.length; i++) {
    for (var j = 0; j < scores.length; j++) {
      if (i !== j) {
        if (scores[i] === scores[j]) {
          tieIdx.push(i);
        }
      }
    }
  }
  return tieIdx;
}

startGame(players);
