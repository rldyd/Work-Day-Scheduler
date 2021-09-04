//DOM get ID
var currentDayElement = document.getElementById("currentDay");
var currentTime = moment(); // time range from 0 - 23 hours

//DOM get CLASS
var timeBlock = document.getElementsByClassName("time-block");
var saveButton = document.getElementsByClassName("saveBtn");
var textArea = document.getElementsByClassName("description");

var container = document.getElementById("newContainer");

//functions
container.addEventListener("click", function (e) {
    var targetElement = e.target;
    if (targetElement.matches(".saveBtn")) {
        var id = targetElement.getAttribute("id");
        var selectedDiv = document.querySelector(".time-block[id='" + id + "']");
        var selectedTA = selectedDiv.querySelector("textarea").value;
        console.log(selectedTA);
        localStorage.setItem(id, selectedTA);
    }
});

var loadText = function () {
    for (i = 0; i < textArea.length; i++) {
        var id = i + 9;
        var selectedDiv = document.querySelector(".time-block[id='" + id + "']");
        var selectedTA = selectedDiv.querySelector("textarea");
        selectedTA.textContent = localStorage.getItem(id);
        console.log(localStorage.getItem(id));
    }
};

var currentTime = function () {
    currentDayElement.textContent = moment().format("dddd, MMMM Do, h:mm a");
};
currentTime();
setInterval(currentTime, 1000);

var validateTimeBlockHour = function () {
    for (i = 0; i < timeBlock.length; i++) {
        if (timeBlock[i].id < currentTime) {
            timeBlock[i].className += " past";
        } else if ((timeBlock[i].id = currentTime)) {
            timeBlock[i].className += " present";
        } else {
            timeBlock[i].className += " future";
        }
    }
};

validateTimeBlockHour();
setInterval(validateTimeBlockHour, 15000);
loadText();
