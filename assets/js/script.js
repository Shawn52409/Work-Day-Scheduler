// current time added to the heading
var currentDate = moment().format('dddd, MMMM Do h:mm a');
$("#currentDay").text(currentDate);

// add arrays: one for the display and one for the ID that will be added to the html
var hour = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var hourId = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];

// variable used to figure out the current hour
var currentHour = moment().hour();
var currentClass;

// create table of rows with three blocks each
for (var i = 0; i<hour.length; i++){
    
    // add class depending on the hour of day
    if(hourId[i] > currentHour){
            currentClass = "future";
        } else if (hourId[i] == currentHour){
            currentClass = "present";
        } else {
        currentClass = "past";
    };
    // creates the html with the proper classes as outlined in the provided css
    $(".container").append(`
        <div id=${hourId[i]} class="row time-block">
            <div class="hour">${hour[i]}</div>
            <textarea class="description ${currentClass}"></textarea>
            <button class="saveBtn">💾<br>Save</submit>
        </div>
    `);
};

// function used to save text to local storage
function saveText(){
    var userInput = $(this).siblings(".description").val();
    var hourOfInput = $(this).siblings(".hour").text();
    // debugging purposes
    console.log(userInput);
    console.log(hourOfInput);
    // save user entered string into local storage
    localStorage.setItem(hourOfInput, userInput);
};

// function used to grab everyting from local storage and diplay it to each time block
function retrieveText(){
    for (var i =0; i<hourId.length; i++){
    $(`#${hourId[i]}>textarea`).val(localStorage.getItem(`${hour[i]}`));
    console.log(localStorage.getItem(`${hour[i]}`));
}};

// call function to retrieve all saved data from local
retrieveText();

// event listener for the save button
$(".saveBtn").on("click", saveText);