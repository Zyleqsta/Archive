let login = prompt("Who's There?",''); //Login Username Screen
let usr = "Admin"; // Admin
let pwd = "TheMaster"; // Password

if (login == usr) {
  let login1 = prompt("Password?",'');
  if (login1 == pwd) {
    alert("Welcome!");
  } else if (login1 === '' || login1 === null) {

    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else if (login === '' || login === null) {

  alert("Canceled");
} else {
  alert("I don't know you");
}
