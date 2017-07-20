class Student {
  fullName: string;
  constructor(public firstName:any, public middleInitial:any, public lastName:any) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function studentGreeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
var userStudent = new Student("King", "S", "Wang");
document.body.innerHTML = studentGreeter(userStudent);
