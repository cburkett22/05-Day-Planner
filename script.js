$(document).ready(function() {
    // Current day & time
    let date = moment();
    $("#currentDay").html(date.format("dddd, MMMM Do YYYY, H:mm"));

    // Clear entries
    $("#clear").click(function() {
        localStorage.clear();
        location.reload();
    });

    // Save text in local storage
    let saveBtn = $("button");
    $("#9am .textarea").val(localStorage.getItem("9am"));
    $("#10am .textarea").val(localStorage.getItem("10am"));
    $("#11am .textarea").val(localStorage.getItem("11am"));
    $("#12 .textarea").val(localStorage.getItem("12"));
    $("#13 .textarea").val(localStorage.getItem("13"));
    $("#14 .textarea").val(localStorage.getItem("14"));
    $("#15 .textarea").val(localStorage.getItem("15"));
    $("#16 .textarea").val(localStorage.getItem("16"));
    $("#17 .textarea").val(localStorage.getItem("17"));

    $(saveBtn).click(function() {
        let hour = $(this).parent().attr("id");
        let content = $(this).siblings(".textarea").val();
        localStorage.setItem(hour, content);
    });
    
    // Past, present, future
    $(".description").each(function() {
        let hour = $(this).attr("id");
        let split = hour.split("a")[0];
        let time = date.format("H");

        if (parseInt(split) < time) {
            $(this).children(".textarea").addClass("past");
        }else if (hour == time) {
            $(this).children(".textarea").addClass("present");
        }else {
            $(this).children(".textarea").addClass("future");
        }
    });

});