let dayNumber = prompt("Enter a number (1-7):");
dayNumber = parseInt(dayNumber); // Convert the input string to a number

// Use a switch statement to find the day name
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid input. Please enter a number between 1 and 7.";
}

console.log(dayName);

