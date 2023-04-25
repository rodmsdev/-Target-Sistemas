let string = prompt("Digite uma palavra para inverter: ");
let reversedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}

console.log("A string invertida é: " + reversedString);