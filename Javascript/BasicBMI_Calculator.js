let weightKilogramsScreen = prompt("How much do you weigh? (Kilograms)",''); // Asks weight
let heightCMScreen = prompt("How tall are you? (Centimeter)",'');
let answer = (weightKilogramsScreen / heightCMScreen / heightCMScreen) * 10000;


if (weightKilogramsScreen === '' || weightKilogramsScreen === null) {

    alert("Canceled")
} else {
  if (heightCMScreen === '' || heightCMScreen === null) {

    alert("Canceled");
  } else

  alert(`BMI: ${answer}`);
}
