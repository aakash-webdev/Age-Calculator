// ----------------- Reference Variables ----------------- //

// Form variables
const form = document.getElementById('main_form');

// Button variable
const submit = document.getElementById('submit_btn');

// Input variables
let dateInput = document.getElementById('date');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');

// Result variables
let yearResult = document.getElementById('year_result');
let monthResult = document.getElementById('month_result');
let dayResult = document.getElementById('day_result');

// Current date variables
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = 1 + currentDate.getMonth();
let currentDay = currentDate.getDate();

// Error message variables
let dateError = document.getElementById('date_error');
let monthError = document.getElementById('month_error');
let yearError = document.getElementById('year_error');
let futureError = document.getElementById('future_error');

// Days in month variables
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// ----------------- Event Listeners ----------------- //

// Correct Date Format
dateInput.addEventListener('input', function () {
    if (dateInput.value > 31) {
        dateInput.value = 31;
    }
    else if (dateInput.value < 1) {
        dateInput.value = '';
    }
});

// Correct Month Format
monthInput.addEventListener('input', function () {
    if (monthInput.value > 12) {
        monthInput.value = 12;
    }
    else if (monthInput.value < 1) {
        monthInput.value = '';
    }
});

// Correct Year Format
yearInput.addEventListener('input', function () {
    if (yearInput.value > currentYear) {
        yearInput.value = currentYear;
    }
    else if (yearInput.value < 1) {
        yearInput.value = '';
    }
});

// ---------------- Form Submission ---------------- //

submit.addEventListener('click', function (e) {
    e.preventDefault();

    // Get form values
    let day = dateInput.value;
    let month = monthInput.value;
    let year = yearInput.value;

    // Validate the date
    if (day === '') {
        dateError.innerHTML = 'Please enter a valid date.';
        dateInput.style.border = '2px solid red';
    }
    else {
        dateError.innerHTML = '';
        dateInput.style.border = '2px solid green';
    };

    // Validate the month
    if (month === '') {
        monthError.innerHTML = 'Please enter a valid month.';
        monthInput.style.border = '2px solid red';
    }
    else {
        monthError.innerHTML = '';
        monthInput.style.border = '2px solid green';
    };

    // Validate the year
    if (year === '') {
        yearError.innerHTML = 'Please enter a valid year.';
        yearInput.style.border = '2px solid red';
    }
    else {
        yearError.innerHTML = '';
        yearInput.style.border = '2px solid green';
    };


    // If all fields are valid, display the results
    if (dateError.innerHTML === '' && monthError.innerHTML === '' && yearError.innerHTML === '') {

        // Days calculations
        if (day > currentDay) {
            // If the input day is greater than the current day, it means the birthday hasn't occurred this month yet.
            currentDay = currentDay + daysInMonth[currentMonth - 1]; 
            // Therefore, it adds the number of days in the previous month to the current day and decrements the current month by 1.
            currentMonth = currentMonth - 1;
        };

        // Months calculation
        if (month > currentMonth) {
            // If the input month is greater than the current month, it means the birthday hasn't occurred this year yet.
            currentMonth = currentMonth + 12;
            // Therefore, it adds 12 to the current month and decrements the current year by 1.
            currentYear = currentYear - 1;
        };

        // Getting final values of age
        let ageDay = currentDay - day;
        let ageMonth = currentMonth - month;
        let ageYear = currentYear - year;


        // If values are negative, display an error message
        if (ageDay < 0 || ageMonth < 0 || ageYear < 0) {
            futureError.innerHTML = '*Your bithday can not be in future.*';
            submit.disabled = true;
        }
        // Display the calculated age 
        else {
            yearResult.innerHTML = ageYear;
            monthResult.innerHTML = ageMonth;
            dayResult.innerHTML = ageDay;
            submit.style.backgroundColor = '#00adb5';
        };
    }
});


// Night mode toggle
function toggleNightMode() {
    let ageCalc = document.getElementById('dark_mode');
    ageCalc.classList.toggle('dark');
}



/*
Let's use an example to illustrate the days and months calculations.

Example Scenario
Today's Date: July 15, 2024
Input Date (Birthday): August 20, 2023
*/

/* 

*======================== Days Calculation =======================*

// 1. Check if Day is Greater:

if (day > currentDay) { } // 20 > 15
 // -- Here, day is 20 and currentDay is 15. Since 20 is greater than 15, we need to adjust.

// 2.Adjust for Days:
if (day > currentDay) {
    currentDay = currentDay + daysInMonth[currentMonth - 1]; // currentDay = 15 + 31
    currentMonth = currentMonth - 1; // currentMonth = 7 - 1
}
    // -- Assume daysInMonth[currentMonth - 1] gives us the number of days in the previous month (June in this case).
    // -- Therefore, currentDay becomes 15 + 31 = 46 (we add 31 days of June).
    // -- 'currentMonth' is decremented by 1, making it 6 (June).

    // *Adjusted Values*:

     // currentDay = 46
     // currentMonth = 6 (June)


*======================== Months Calculation =======================*

// 1. Check if Month is Greater:

if (month > currentMonth) { } // 8 > 6
// -- Here, month is 8 and currentMonth is 6. Since 8 is greater than 6, we need to adjust.

// 2. Adjust for Months:

if (month > currentMonth) {
currentMonth = currentMonth + 12; // currentMonth = 6 + 12 = 18
currentYear = currentYear - 1; // currentYear = 2024 - 1 = 2023
}
// -- We add 12 months to currentMonth, making it 18. This adjustment simulates that we’re calculating the date difference from a previous year.
// -- We decrement currentYear by 1, so currentYear becomes 2023

    // *Adjusted Values:*

     // currentMonth = 18
     // currentYear = 2023



*======================== Final Age Calculation =======================*

// 1. Calculate Final Age:

let ageDay = currentDay - day; // 46 - 20 = 26
let ageMonth = currentMonth - month; // 18 - 8 = 10
let ageYear = currentYear - year; // 2023 - 2023 = 0


*/
