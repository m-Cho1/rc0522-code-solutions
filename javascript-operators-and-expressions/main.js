var width = 3;
var height = 7;

var area = width * height;

console.log('area: ', area);
console.log('type of area: ', typeof (area));

var bill = 20;
var payment = 112;

var change = payment - bill;
console.log('change: ', change);
console.log('type of change: ', typeof (change));

var quizzes = 20;
var midterm = 88;
var final = 98;

var grade = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('type of grade: ', typeof (grade));

var firstName = 'Minji';
var lastName = 'Cho';

var fullName = firstName + ' ' + lastName;
console.log('fullName: ', fullName);
console.log('type of fullName: ', typeof (fullName));

var pH = 2;
var isAcidic = pH < 7;
console.log('isAcidic: ', isAcidic);
console.log('type of isAcidic: ', typeof (isAcidic));

var headCount = 4;
var isSparta = headCount === 300;
console.log('isSparta: ', isSparta);
console.log('type of isSparta: ', typeof (isSparta));

var motto = fullName;
motto = motto + ' is the GOAT';
console.log('motto: ', motto);
console.log('typeof motto: ', typeof (motto));
