var day = "";
var month = "";
var year = "";
function updateDay() {
  let a = Number(document.getElementById("input-day").value);
  let dayError = document.getElementById("day-error");
  let dayInput = document.getElementById("input-day");

  if (a == "") {
    dayError.style.display = "block";
    dayError.textContent = "This field is required";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";

    return 1;
  } else if (isNaN(a) || 0 > a || a > 31) {
    dayError.style.display = "block";
    dayError.textContent = "Must be a valid day";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";

    return 1;
  } else {
    dayError.style.display = "none";
    dayInput.style.border = "1px solid hsl(0, 0%, 86%)";

    return 0;
  }
}
function updateMonth() {
  let a = Number(document.getElementById("input-month").value);
  let monthError = document.getElementById("month-error");
  let monthInput = document.getElementById("input-month");

  if (a == "") {
    monthError.style.display = "block";
    monthError.textContent = "This field is required";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    return 1;
  } else if (isNaN(a) || 0 > a || a > 12) {
    monthError.style.display = "block";
    monthError.textContent = "Must be a valid month";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    return 1;
  } else {
    monthError.style.display = "none";
    monthInput.style.border = "1px solid hsl(0, 0%, 86%)";
    return 0;
  }
}
function updateYear() {
  let a = Number(document.getElementById("input-year").value);
  let yearError = document.getElementById("year-error");
  let yearInput = document.getElementById("input-year");

  if (a == "") {
    yearError.style.display = "block";
    yearError.textContent = "This field is required";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    return 1;
  } else if (
    isNaN(a) ||
    new Date().getFullYear() < a ||
    String(a).length != 4
  ) {
    yearError.style.display = "block";
    yearError.textContent = "Must be a in the past";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    return 1;
  } else {
    yearError.style.display = "none";
    yearInput.style.border = "1px solid hsl(0, 0%, 86%)";
    return 0;
  }
}

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let check = 0;

  check += updateMonth();
  check += updateDay();
  check += updateYear();

  if (check > 0) {
    alert("Enter Valid Inputs");
    return;
  }

  day = Number(document.getElementById("input-day").value);
  month = Number(document.getElementById("input-month").value);
  year = Number(document.getElementById("input-year").value);
hideShow()
  if (
    (day == 29 && month == 2 && !(year % 4 === 0 && year % 100 !== 0)) ||
    year % 400 === 0)
  {
    alert("29 feb is only in leap years");
    return;
  }
   if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
  alert("Enter Valid Inputs");
  return;
}
 console.log(day + "     " + month + "     " );
if (month === 2 && day > 29) {
  alert("Enter Valid Inputs");
  return;
}
  let today = new Date();

  let inputDate = new Date(year, month, day);
  let birthMonth, birthDate, birthYear;
  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth(),
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();
  console.log(currentDate + "     " + currentMonth + "     " + currentYear);


  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    alert("Not Born Yet");
    return;
  }
  leapChecker(birthDetails.year);

  if (currentDate < birthDetails.date) {
    currentMonth = currentMonth - 1;
    currentDate = currentDate + months[currentMonth - 1];
  }
  console.log(currentDate);

  birthDate = currentDate - birthDetails.date;
  if (currentMonth < birthDetails.month) {
    currentYear = currentYear - 1;
    currentMonth = currentMonth + 12;
  }
  birthMonth = currentMonth - birthDetails.month;
  birthYear = currentYear - birthDetails.year;
  console.log(birthDate + "     " +   birthMonth + "     " + birthYear+" helo");

  displayResult(birthDate, birthMonth, birthYear);
}

function animateCount(id, finalValue, duration) {
  let element = document.getElementById(id);
  if (!element) return;

  if (finalValue === 0) {
    element.textContent = 0;
    return;
  }

  let start = 0;
  let range = finalValue - start;

  // Avoid divide by zero
  if (range === 0) {
    element.textContent = finalValue;
    return;
  }

  let increment = finalValue > 0 ? 1 : -1;
  let stepTime = Math.max(10, Math.floor(duration / Math.abs(range)));

  let current = start;
  let timer = setInterval(function () {
    current += increment;
    element.textContent = current;
    if (current === finalValue) {
      clearInterval(timer);
    }
  }, stepTime);
}


function hideShow() {
  let element = document.getElementById('explanation');

  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");  // Show it
  } else {
    element.classList.add("hidden");     // Hide it
  }
}
function leapChecker(year) {
  if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}

function displayResult(bDate, bMonth, bYear) {
  animateCount("years-output", bYear, 800);
  animateCount("months-output", bMonth,800);
  animateCount("days-output", bDate, 800);
  explanation()
}
function explanation() {
  const ex = document.getElementById("exp"); // ✅ now it's declared at the right place
  if (!ex) return;

  const htmlContent = `
    <strong>Adjust Day if Current Date &lt; Birth Date:</strong><br>
    <code>if (currentDate &lt; birthDetails.date):</code><br>
    &nbsp;&nbsp;<code>currentMonth = currentMonth - 1;</code><br>
    &nbsp;&nbsp;<code>currentDate = currentDate + months[currentMonth - 1];</code><br><br>

    <strong>Calculate Day Difference:</strong><br>
    <code>birthDate = currentDate - birthDetails.date;</code><br><br>

    <strong>Adjust Month if Current Month &lt; Birth Month:</strong><br>
    <code>if (currentMonth &lt; birthDetails.month):</code><br>
    &nbsp;&nbsp;<code>currentYear = currentYear - 1;</code><br>
    &nbsp;&nbsp;<code>currentMonth = currentMonth + 12;</code><br><br>

    <strong>Calculate Month and Year Difference:</strong><br>
    <code>birthMonth = currentMonth - birthDetails.month;</code><br>
    <code>birthYear = currentYear - birthDetails.year;</code>
  `;

  ex.innerHTML = htmlContent;
}


function remove(){
  hideShow();
}
