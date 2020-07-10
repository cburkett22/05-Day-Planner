// Current Date
$(document).ready(function() {
let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

let day = new Array();
    day[0] = "Monday";
    day[1] = "Tuesday";
    day[2] = "Wednesday";
    day[3] = "Thursday";
    day[4] = "Friday";
    day[5] = "Saturday";
    day[6] = "Sunday";

let d = new Date();
let dayNum = d.getDate();
let year = d.getFullYear();
let output = day[d.getDay() -1] + ', ' + month[d.getMonth()] + ' ' + dayNum + ', ' + year;

$('#currentDay').html(output);
});


