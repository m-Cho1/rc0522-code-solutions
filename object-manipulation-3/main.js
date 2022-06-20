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
    var card = { $rank: ranks[j], $suit: suits[i] };
    deck.push(card);
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

// shuffle cards:
var shuffleDeck = _.shuffle(deck);
