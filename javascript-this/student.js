/* exported student */
var student = {
  firstName: 'Minji',
  lastName: 'Cho',
  subject: 'JavaScript',
  getFullName: function () {
    var name = this.firstName + ' ' + this.lastName;
    return name;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
