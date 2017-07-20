interface Person {
  firstName: string;
  lastName: string;
}

function personGreeter (person:Person){
  return  "Hello, " + person.firstName + " " + person.lastName;
}

var userPerson = {firstName:"King", lastName:"Wang"}
document.body.innerHTML = personGreeter(userPerson);
