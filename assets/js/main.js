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
            currentDay = currentDay + daysInMonth[currentMonth - 1];
            currentMonth = currentMonth - 1;
        };

        // Months calculation
        if (month > currentMonth) {
            currentMonth = currentMonth + 12;
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
        };
    }
});


// Night mode toggle
function toggleNightMode() {
    let ageCalc = document.getElementById('dark_mode');
    ageCalc.classList.toggle('dark');
}