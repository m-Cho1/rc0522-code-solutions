console.log('Lodash is loaded:', typeof _ !== 'undefined');

var player1 = { name: 'Jay', hand: [] };
var player2 = { name: 'Erik', hand: [] };
var player3 = { name: 'Kyle', hand: [] };
var player4 = { name: 'Charles', hand: [] };

var ranks = [
  'A',
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  'J',
  'Q',
  'K'
];

var suits = [
  'clubs',
  'diamonds',
  'hearts',
  'spades'
];

// creating deck of cards:
var deck = [];

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++) {
    var card = { $rank: ranks[j], $suit: suits[i] };
    deck.push(card);
  }
}

// shuffle cards:
for (var x = deck.length - 1; x > 0; x--) {
  var l = Math.floor(Math.random() * x);
  var shuffle = deck[x];
  deck[x] = deck[l];
  deck[l] = shuffle;
}
