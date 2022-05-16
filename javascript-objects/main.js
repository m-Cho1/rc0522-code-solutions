var student = {
  firstName: 'Jim',
  lastName: 'Coder',
  age: 22
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('student.fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('student.livesInIrvine: ', student.livesInIrvine);
console.log('student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Ford',
  model: 'Explorer',
  year: 2019
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('vehicle["color"]: ', vehicle['color']);
console.log('vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Cooper',
  type: 'Doberman'
};

delete pet.name;
delete pet['type'];
console.log('pet: ', pet);
