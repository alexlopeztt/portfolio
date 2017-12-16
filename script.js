	
//Greeting Code
    /* User inputs their first and last name and a greeting 
	message appears on the page after they hit submit */
function greet(){
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    document.getElementById('greetings').innerHTML = 'Hello, ' + fName + ' ' + lName + ' ,and welcome to my website';
    return false;
}

//Roman Conversion
    /* User inputs a number from 1 to 10 and on clicking the 'Convert' button
    the number is then converted into its corresponding roman numeral */
function convert(){
    var number = document.getElementById('num').value;
    var romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    document.getElementById('romanNum').innerHTML = romans[number - 1];
}

//Kelvin Conversion
    /* User inputs a temperature in Fahrenhiet and the tmperature is converted 
    into its corresponding temperature in Kelvin */
function conKel() {
    var fahr = document.getElementById('tempFahr').value;
    var fahrNum = Number(fahr);
    var kel = ((fahrNum - 32) / 1.8) + 273;
    document.getElementById('tempKel').innerHTML = kel + 'K';
}

//Secret Number Game
    /* The user guesses a number that is between 1 and 20 and the algorithm checks to see if
    it macthes to the predetermined number to guess */
function chkSecret() {
    var inNum = document.getElementById('userNum').value;
 
      if (inNum > 12) {
          document.getElementById('response').innerHTML = 'Your too high. Try again.';
      } else if (inNum < 12) {
          document.getElementById('response').innerHTML = 'Your too low. Try again.';
      } else {
          document.getElementById('response').innerHTML = 'Congrats! You won!';
      }
}

//Canvas
/* Takes a picture and puts it in a canvas */
function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("IDK");
    ctx.drawImage(img, 10, 10);
}

//Ceaser Cipher
/* Takes any word or phrase and shifts all the letters by any given number */
function cipher() {
    var passcode = document.getElementById('message').value;
    var shiftNum = document.getElementById('shift').value;
    var shift = parseInt(shiftNum);
    var encryptShow = "";

    for (i = 0; i < passcode.length; i++) {
        var encrypt = passcode.charCodeAt(i);
        var add = encrypt + shift;
        if (encrypt >= 65 && encrypt <= 90) {
            var uprCase = (add - 65) % 26;
            encryptShow += String.fromCharCode(uprCase + 65);
        } else if (encrypt >= 97 && encrypt <= 122) {
            var lwrCase = (add - 97) % 26;
            encryptShow += String.fromCharCode(lwrCase + 97);
        } else {
            encryptShow += String.fromCharCode(encrypt);
        }
    }

    document.getElementById("demo").innerHTML = encryptShow;
}