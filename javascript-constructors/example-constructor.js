function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype : ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof (ExampleConstructor.prototype));

var newObj = new ExampleConstructor();
console.log('value of newObj: ', newObj);

var checkInstanceOf = newObj instanceof ExampleConstructor;
console.log('checkInstanceOf : ', checkInstanceOf);
