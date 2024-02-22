document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convert-btn");
    const numberInput = document.getElementById("number");
    const output = document.getElementById("output");
  
    convertBtn.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent form submission
  
      const number = parseInt(numberInput.value);
  
      // Check if the number is empty or not a number
      if (isNaN(number)) {
        output.textContent = "Please enter a valid number";
      }
      // Check if the number is less than 1
      else if (number === -1) {
        output.textContent = "Please enter a number greater than or equal to 1";
      }
      // Check if the number is greater than or equal to 4000
      else if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
      }
      // Convert the number to Roman numeral
      else {
        output.textContent = convertToRoman(number);
      }
    });
  
    // Function to convert a number to Roman numeral
    function convertToRoman(num) {
      const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      let roman = "";
  
      for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
          roman += key;
          num -= romanNumerals[key];
        }
      }
      return roman;
    }
  });
  