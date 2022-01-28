let selectSystem = confirm("OK for Pounds and Inches. Cancel for Kilograms and Meters");

if (selectSystem == true) {
  alert("You have selected Pounds and Inches.");
  let weightPounds = prompt("Weight (Pounds)", "130");
  let heightInches = prompt("Height (Inches)", "65");
  let answerPounds = ( weightPounds / heightInches ** 2) * 703;
  alert(`BMI: ${answerPounds}`);
} else if (selectSystem == false) {
  alert("You have selected Kilograms and Meters");
  let weightKilograms = prompt("Weight (Kilograms)", "68");
  let heightMeters = prompt("Height (Centimeters)", "165");
  let answerKilo = (weightKilograms / heightMeters / heightMeters) * 10000;
  alert(`BMI: ${answerKilo}`);
}
