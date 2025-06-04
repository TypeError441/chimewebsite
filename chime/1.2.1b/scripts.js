// Variables

const version = "v1.2.1b";

var schedules = {
    Normal: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 16, "Period 1"],
        [9, 19, "Passing to Period 2"], [10, 5, "Period 2"], [10, 8, "Passing to Period 3"],
        [10, 57, "Period 3"], [11, 11, "Brunch"], [11, 14, "Passing to Period 4"],
        [12, 0, "Period 4"], [12, 3, "Passing to Period 5"], [12, 49, "Period 5"],
        [13, 25, "Lunch"], [13, 28, "Passing to Period 6"], [14, 14, "Period 6"],
        [14, 17, "Passing to Period 7"], [15, 3, "Period 7"]
    ],
    Tutorial: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 12, "Period 1"], 
        [9, 15, "Passing to Period 2"], [9, 57, "Period 2"], [10, 0, "Passing to Period 3"], 
        [10, 42, "Period 3"], [10, 56, "Brunch"], [10, 59, "Passing to Tutorial"], 
        [11, 27, "Tutorial"], [11, 30, "Passing to Period 4"], [12, 12, "Period 4"], 
        [12, 15, "Passing to Period 5"], [12, 57, "Period 5"], [13, 33, "Lunch"], 
        [13, 36, "Passing to Period 6"], [14, 18, "Period 6"], [14, 21, "Passing to Period 7"], 
        [15, 3, "Period 7"]
    ],
    Even: [
        [9, 12, "Free"], [9, 17, "Passing to Period 2"], [10, 39, "Period 2"], 
        [10, 53, "Brunch"], [10, 56, "Passing to Period 4"], [12, 18, "Period 4"], 
        [12, 54, "Lunch"], [12, 57, "Passing to Period 6"], [14, 19, "Period 6"], 
        [14, 22, "Passing to Tutorial"], [15, 3, "Tutorial"]
    ],
    Odd: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 52, "Period 1"], 
        [9, 58, "Break"], [10, 1, "Passing to Period 3"], [11, 23, "Period 3"], 
        [11, 37, "Brunch"], [11, 40, "Passing to Period 5"], [13, 2, "Period 5"], 
        [13, 38, "Lunch"], [13, 41, "Passing to Period 7"], [15, 3, "Period 7"]
    ],
    Advisory: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 12, "Period 1"], 
        [9, 15, "Passing to Period 2"], [9, 57, "Period 2"], [10, 0, "Passing to Period 3"], 
        [10, 42, "Brunch"], [10, 56, "Passing to Advisory"], [10, 59, "Advisory"], 
        [11, 27, "Passing to Period 4"], [12, 12, "Period 4"], [12, 15, "Passing to Period 5"], 
        [12, 57, "Period 5"], [13, 33, "Lunch"], [13, 36, "Passing to Period 6"], 
        [14, 18, "Period 6"], [14, 21, "Passing to Period 7"], [15, 3, "Period 7"]
    ],
    Minimum: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 0, "Period 1"], 
        [9, 3, "Passing to Period 2"], [9, 33, "Period 2"], [9, 36, "Passing to Period 3"], 
        [10, 6, "Passing to Period 4"], [10, 9, "Period 4"], [10, 39, "Brunch"], 
        [10, 51, "Passing to Period 5"], [11, 24, "Period 5"], [11, 27, "Passing to Period 6"], 
        [11, 57, "Period 6"], [12, 0, "Passing to Period 7"], [12, 30, "Period 7"]
    ],
    Assembly: [
        [8, 25, "Free"], [8, 30, "Passing to A"], [9, 10, "A"], [9, 13, "Passing to B"],
        [9, 53, "B"], [9, 56, "Passing to C"], [10, 37, "Brunch"], [10, 51, "Passing to D"],
        [10, 54, "D"], [11, 34, "Passing to E"], [12, 17, "E"], [12, 54, "Lunch"],
        [12, 57, "Passing to F"], [13, 37, "F"], [13, 40, "Passing to G"], [14, 20, "G"],
        [14, 23, "Passing to H"], [15, 3, "H"]
    ],
    Weekend: []
};

var scheduleKeys = ["Weekend", "Normal", "Tutorial", "Even", "Odd", "Advisory", "Weekend", "Minimum", "Assembly"];
var dayIndex = new Date().getDay();
var currentSchedule = schedules[scheduleKeys[dayIndex]];

// Functions

function switchSchedule() {
    dayIndex = (dayIndex + 1) % scheduleKeys.length;
    currentSchedule = schedules[scheduleKeys[dayIndex]];
    updateSchedule();
}

function updateSchedule() {
    let now = new Date();
    let foundNextPeriod = false;

    for (let [hour, minute, text] of currentSchedule) {
        let targetTime = new Date();
        targetTime.setHours(hour, minute, 0, 0);

        if (now < targetTime) {
            let diff = targetTime - now;
            let hours = Math.floor(diff / 1000 / 60 / 60);
            let minutes = Math.floor((diff / 1000 / 60) % 60);
            let seconds = Math.floor((diff / 1000) % 60);

            let timeString = (hours > 0 ? `${hours}:` : "") + 
                            `${minutes < 10 && hours > 0 ? "0" : ""}${minutes}:` +
                            `${seconds < 10 ? "0" : ""}${seconds}`;

            $(".text-timer").text(timeString);
            $(document).attr("title", `${timeString} | ${text}`);
            $(".text-period").text(text);
            $(".text-schedule").text(scheduleKeys[dayIndex]);

            foundNextPeriod = true;
            break;
        }
    }

    if (!foundNextPeriod) {
        $(".text-timer").text("");
        $(document).attr("title", "Free");
        $(".text-period").text("School is over!");
        $(".text-schedule").text(scheduleKeys[dayIndex]);
    }
}

function update() {
    updateSchedule();
    setTimeout(update, 1000);
}

// Start

$(document).ready(function () {
    $(".version").text(version);

    var selectedFont = localStorage.getItem("font");
    if (selectedFont) {
        $('*').css('font-family', selectedFont);
        $('select.font').val(selectedFont);
    }

    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        $('html').attr('data-theme', savedTheme);
        $('.theme').val(savedTheme);
    }

    $('select.font').change(function() {
        var selectedFont = $(this).val();
        $('*').css('font-family', selectedFont);
        localStorage.setItem("font", selectedFont);
    });

    $('.theme').change(function() {
        var selectedTheme = $(this).val();
        $('html').attr('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });

    update();
});