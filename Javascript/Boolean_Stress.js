//Boolean Bullshit - So I can remeber this funnyness
let a = 0; // Number

let b = "0"; // String

alert(Boolean(a)); // True
alert(Boolean(b)); // True

alert(a == b); // True? Whattttttttt!!!!!!!!!

//Memory : This is happening because JavaScript is converting b("0") into a number making a == b (0 = 0).
