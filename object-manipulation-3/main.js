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

// shuffle cards:
var shuffleDeck = _.shuffle(deck);
