//Boolean Bullshit - So I can remeber this funnyness
let a = 1; // Number

let b = "1"; // String

alert(Boolean(a)); // True
alert(Boolean(b)); // True

alert(a == b); // True? Whattttttttt!!!!!!!!!

//Memory : This is happening because JavaScript is converting b("1") into a number making a == b (1 = 1).