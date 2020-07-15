$(document).ready(function() {
    const date = moment();
    
    // Current day & time
    $("#currentDay").html(date.format("dddd, MMMM Do YYYY, h:mma"));

    // past, present, future
    // ... = spread and rest
    $(".description").each(function() {
        let hour = $(this).attr("id");
        let number = [...hour];
        console.log(number);
    });

    // Save text in local storage
    let saveBtn = $("button");
    $("#9am .textarea").val(localStorage.getItem("9am"));
    $("#10am .textarea").val(localStorage.getItem("10am"));
    $("#11am .textarea").val(localStorage.getItem("11am"));
    $("#12pm .textarea").val(localStorage.getItem("12pm"));
    $("#1pm .textarea").val(localStorage.getItem("1pm"));
    $("#2pm .textarea").val(localStorage.getItem("2pm"));
    $("#3pm .textarea").val(localStorage.getItem("3pm"));
    $("#4pm .textarea").val(localStorage.getItem("4pm"));
    $("#5pm .textarea").val(localStorage.getItem("5pm"));

    $(saveBtn).click(function() {
        let hour = $(this).parent().attr("id");
        let content = $(this).siblings(".textarea").val();
        localStorage.setItem(hour, content);
    });

});