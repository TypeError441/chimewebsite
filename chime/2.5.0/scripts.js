// Variables
let todayDate = new Date();
let schoolEndDate = new Date("2025-06-04");
let timeDifference = schoolEndDate - todayDate;
var version = "v2.5 - " + Math.floor(timeDifference / (1000 * 3600 * 24)) + " days left...";

const schedules = {
    "Normal": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 16, "Period 1"],
        [9, 19, "Passing to Period 2"],
        [10, 5, "Period 2"],
        [10, 8, "Passing to Period 3"],
        [10, 57, "Period 3"],
        [11, 11, "Brunch"],
        [11, 14, "Passing to Period 4"],
        [12, 0, "Period 4"],
        [12, 3, "Passing to Period 5"],
        [12, 49, "Period 5"],
        [13, 25, "Lunch"],
        [13, 28, "Passing to Period 6"],
        [14, 14, "Period 6"],
        [14, 17, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
    "Tutorial": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 12, "Period 1"],
        [9, 15, "Passing to Period 2"],
        [9, 57, "Period 2"],
        [10, 0, "Passing to Period 3"],
        [10, 42, "Period 3"],
        [10, 56, "Brunch"],
        [10, 59, "Passing to Tutorial"],
        [11, 27, "Tutorial"],
        [11, 30, "Passing to Period 4"],
        [12, 12, "Period 4"],
        [12, 15, "Passing to Period 5"],
        [12, 57, "Period 5"],
        [13, 33, "Lunch"],
        [13, 36, "Passing to Period 6"],
        [14, 18, "Period 6"],
        [14, 21, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
    "Even": [
        [9, 12, "Free"],
        [9, 17, "Passing to Period 2"],
        [10, 39, "Period 2"],
        [10, 53, "Brunch"],
        [10, 56, "Passing to Period 4"],
        [12, 18, "Period 4"],
        [12, 54, "Lunch"],
        [12, 57, "Passing to Period 6"],
        [14, 19, "Period 6"],
        [14, 22, "Passing to Tutorial"],
        [15, 3, "Tutorial"]
    ],
    "Odd": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 52, "Period 1"],
        [9, 58, "Break"],
        [10, 1, "Passing to Period 3"],
        [11, 23, "Period 3"],
        [11, 37, "Brunch"],
        [11, 40, "Passing to Period 5"],
        [13, 2, "Period 5"],
        [13, 38, "Lunch"],
        [13, 41, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
    "Advisory": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 12, "Period 1"],
        [9, 15, "Passing to Period 2"],
        [9, 57, "Period 2"],
        [10, 0, "Passing to Period 3"],
        [10, 42, "Period 3"],
        [10, 56, "Brunch"],
        [10, 59, "Passing to Advisory"],
        [11, 27, "Advisory"],
        [11, 30, "Passing to Period 4"],
        [12, 12, "Period 4"],
        [12, 15, "Passing to Period 5"],
        [12, 57, "Period 5"],
        [13, 33, "Lunch"],
        [13, 36, "Passing to Period 6"],
        [14, 18, "Period 6"],
        [14, 21, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
    "Minimum": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 0, "Period 1"],
        [9, 3, "Passing to Period 2"],
        [9, 33, "Period 2"],
        [9, 36, "Passing to Period 3"],
        [10, 6, "Passing to Period 4"],
        [10, 9, "Period 4"],
        [10, 39, "Brunch"],
        [10, 51, "Passing to Period 5"],
        [11, 24, "Period 5"],
        [11, 27, "Passing to Period 6"],
        [11, 57, "Period 6"],
        [12, 0, "Passing to Period 7"],
        [12, 30, "Period 7"]
    ],
    "Assembly": [
        [8, 25, "Free"],
        [8, 30, "Passing to A"],
        [9, 10, "A"],
        [9, 13, "Passing to B"],
        [9, 53, "B"],
        [9, 56, "Passing to C"],
        [10, 37, "C"],
        [10, 51, "Brunch"],
        [10, 54, "Passing to D"],
        [11, 34, "D"],
        [11, 37, "Passing to E"],
        [12, 17, "E"],
        [12, 54, "Lunch"],
        [12, 57, "Passing to F"],
        [13, 37, "F"],
        [13, 40, "Passing to G"],
        [14, 20, "G"],
        [14, 23, "Passing to H"],
        [15, 3, "H"]
    ],
    "Wednesday Non-block": [
        [9, 12, "Free"],
        [9, 17, "Passing to Period 1"],
        [9, 56, "Period 1"],
        [9, 59, "Passing to Period 2"],
        [10, 37, "Period 2"],
        [10, 40, "Passing to Period 3"],
        [11, 28, "Period 3"],
        [11, 42, "Brunch"],
        [11, 45, "Passing to Period 4"],
        [12, 23, "Period 4"],
        [12, 26, "Passing to Period 5"],
        [13, 4, "Period 5"],
        [13, 41, "Lunch"],
        [13, 44, "Passing to Period 6"],
        [14, 22, "Period 6"],
        [14, 25, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
    "Weekend": [
    ],
    "???": [
        [22, 3, "22:03"]
    ],
    "8th CAST": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 16, "Period 1"],
        [9, 19, "Passing to Period 2"],
        [10, 5, "Period 2"],
        [10, 8, "Passing to Period 3"],
        [10, 57, "Period 3"],
        [11, 11, "Brunch"],
        [11, 14, "Passing to Period 4"],
        [12, 0, "Period 4"],
        [12, 3, "Passing to Period 5"],
        [12, 49, "Period 5"],
        [13, 25, "Lunch"],
        [13, 28, "Passing to Period 6"],
        [14, 14, "Period 6"],
        [14, 17, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
    "English CAT": [
        [9, 12, "Free"],
        [9, 17, "Passing to Period 2"],
        [10, 17, "Period 2"],
        [10, 31, "Brunch"],
        [10, 34, "Passing to Advisory (English CAT)"],
        [11, 34, "English CAT"],
        [11, 37, "Passing to Period 4"],
        [12, 37, "Period 4"],
        [13, 13, "Lunch"],
        [13, 16, "Passing to Period 6"],
        [14, 16, "Period 6"],
        [14, 19, "Passing to Extended Tutorial"],
        [15, 3, "Extended Tutorial"]
    ],
    "English Performance Task": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 20, "Period 1"],
        [9, 23, "Passing to Period 3"],
        [10, 13, "Period 3"],
        [10, 27, "Brunch"],
        [10, 30, "Passing to Advisory (English Performance Task)"],
        [12, 40, "English Performance Task"],
        [13, 17, "Lunch"],
        [13, 20, "Passing to Period 5"],
        [14, 10, "Period 5"],
        [14, 13, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
    "Math CAT": [
        [9, 12, "Free"],
        [9, 17, "Passing to Period 2"],
        [10, 7, "Period 2"],
        [10, 21, "Brunch"],
        [10, 24, "Passing to Advisory (Math CAT)"],
        [11, 39, "Math CAT"],
        [11, 42, "Passing to Period 4"],
        [12, 32, "Period 4"],
        [13, 8, "Lunch"],
        [13, 11, "Passing to Period 6"],
        [14, 1, "Period 6"],
        [14, 4, "Passing to Extended Tutorial"],
        [15, 3, "Extended Tutorial"]
    ],
    "Math Performance Task": [
        [8, 25, "Free"],
        [8, 30, "Passing to Period 1"],
        [9, 30, "Period 1"],
        [9, 33, "Passing to Period 3"],
        [10, 40, "Period 3"],
        [10, 54, "Brunch"],
        [10, 57, "Passing to Advisory (Math Performance Task)"],
        [12, 17, "Math Performance Task"],
        [12, 53, "Lunch"],
        [12, 59, "Passing to Period 5"],
        [13, 59, "Period 5"],
        [14, 2, "Passing to Period 7"],
        [15, 3, "Period 7"]
    ],
};

const scheduleKeys = ["Weekend", "Normal", "Tutorial", "Even", "Odd", "Advisory", "Weekend", "Minimum", "Assembly", "???", "8th CAST", "English CAT", "English Performance Task", "Math CAT", "Math Performance Task", "Wednesday Non-block"];
let dayIndex = new Date().getDay();

const overrideSchedules = {
    "18-4": "2", // Tutorial | Done
    "21-4": "10", // Sci CAST | Done
    "22-4": "10", // Sci CAST | Done
    "23-4": "11", // CAASPP | Done
    "24-4": "12", // CAASPP | Done
    "30-4": "13", // CAASPP | Done
    "1-5": "14", // CAASPP | Done
    "2-5": "1", // Monday | Done
    "9-5": "8", // Mystery Bucket: H | Done
    "23-5": "8", // Ice Cream Social: H
    "26-5": "0", // Memorial Day
    "27-5": "1", // Monday Schedule
    "28-5": "15", // Wednesday Non-block
    "29-5": "1", // Monday Schedule
    "29-5": "7", // Minimum Schedule: Chromebook Collection
    "2-6": "8", // 8th Grade Awards: C
    // "3-6": "Boardwalk/Movie",
    // "4-6": "Graduation",
    "5-6": "0", // School's over
    "6-6": "0", // School's over
};

let dateIndex = new Date().getDate();
let monthIndex = new Date().getMonth() + 1;
let overrideCheckString = dateIndex + "-" + monthIndex;
if (overrideSchedules[overrideCheckString] != undefined) dayIndex = overrideSchedules[overrideCheckString];

let currentSchedule = schedules[scheduleKeys[dayIndex]];

function updateSchedule() {
    const now = new Date();
    const $schedule = $(".schedule").empty();
    let txt = "Schedule";

    if (!currentSchedule.length) txt = "Nothing planned for today :/";
    
    $("<p class='title'>").text(txt).css("font-family", localStorage.getItem("font")).appendTo($schedule);
    for (let i = 0; i < currentSchedule.length; i++) {
        const [hour, minute, name] = currentSchedule[i];
        const [prevHour, prevMinute] = i > 0 ? currentSchedule[i - 1] : [hour, minute];
        const formatted = `${prevHour}:${prevMinute.toString().padStart(2, "0")} - ${hour}:${minute.toString().padStart(2, "0")} | ${name}`;
        $("<p>").addClass("heading-1").text(formatted).css("font-family", localStorage.getItem("font")).appendTo($schedule);
    }

    let foundNextPeriod = false;
    for (let i = 0; i < currentSchedule.length; i++) {
        const [hour, minute, text] = currentSchedule[i];
        const targetTime = new Date().setHours(hour, minute, 0, 0);

        if (now < targetTime) {
            const prevPeriod = i > 0 ? currentSchedule[i - 1] : [hour, minute];
            const nextPeriodStartTime = targetTime;
            const diff = nextPeriodStartTime - now;
            const hours = Math.floor(diff / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            const timeRemaining = `${hours > 0 ? `${hours}:` : ""}${minutes < 10 && hours > 0 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            $(".text-timer").text(timeRemaining);
            updateProgressBar(nextPeriodStartTime, now, i);

            if (localStorage.getItem("displayInTitle") === "true") $(".header").text(`Chime | ${timeRemaining}`);
            $(document).attr("title", `${timeRemaining} | ${text}`);
            $(".text-period").text(text);
            $(".text-schedule").text(scheduleKeys[dayIndex]);
            if (localStorage.getItem("progress") === "true") $(".progress-timer").show();

            foundNextPeriod = true;
            break;
        }
    }

    if (!foundNextPeriod) resetSchedule();
}

function updateProgressBar(nextPeriodStartTime, now, index) {
    const nextPeriodEndTime = new Date().setHours(currentSchedule[index + 1]?.[0] || 15, currentSchedule[index + 1]?.[1] || 3, 0, 0);
    const totalPeriodDuration = nextPeriodEndTime - nextPeriodStartTime;
    const timeLeft = nextPeriodEndTime - now;
    const progressBarPercentage = 100 - ((timeLeft / totalPeriodDuration) * 100);

    $(".progress-timer").val(progressBarPercentage);
}

function resetSchedule() {
    $(".text-timer").text("");
    $(document).attr("title", "Free");
    $(".text-period").text("School is over!");
    $(".text-schedule").text(scheduleKeys[dayIndex]);
    $(".progress-timer").hide();
    $(".header").text("Chime");
}

function update() {
    updateSchedule();
    setTimeout(update, 1000);
}

$(document).ready(function () {
    $(".version").text(version);
    $(".belldefault").hide();
    $(".caasppschedules").hide();
    $(".twentytwoothree").hide();
    const selectedFont = localStorage.getItem("font");

    if (selectedFont) {
        if (selectedFont === "'Roboto', sans-serif") $(".belldefault").show();
        $("*").css("font-family", selectedFont);
        $(".schedule").css("font-family", selectedFont);
        $("select.font").val(selectedFont);
    }

    $("select.font").change(function () {
        const selectedFont = $(this).val();
        $("*").css("font-family", selectedFont);
        $(".schedule").css("font-family", selectedFont);
        localStorage.setItem("font", selectedFont);
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        $("html").attr("data-theme", savedTheme);
        $(".theme").val(savedTheme);
    }

    $(".theme").change(function () {
        const selectedTheme = $(this).val();
        $("html").attr("data-theme", selectedTheme);
        localStorage.setItem("theme", selectedTheme);
    });

    $(".schedules").val(dayIndex).change(function () {
        dayIndex = $(this).val();
        currentSchedule = schedules[scheduleKeys[dayIndex]];
        updateSchedule();
    });

    if (localStorage.getItem("progress") === "false") $(".progress-timer").toggle();
    $(".pizza").toggle();
    $(".suspense").toggle();

    const settingsOpened = localStorage.getItem("settings");
    if (settingsOpened !== null) {
        if (settingsOpened === "false") {
            $(".optionsButtons").toggle();
            $(".settings").text("▼");
            $(".leave").text("X");
        }
    } else {
        localStorage.setItem("settings", "true");
    }

    $(".settings").click(function () {
        const currentSetting = localStorage.getItem("settings") === "true";
        localStorage.setItem("settings", currentSetting ? "false" : "true");

        $(".optionsButtons").slideToggle(200);
        $(".settings").text($(".settings").text() === "▼" ? "▲" : "▼");
        $(".leave").text($(".leave").text() === "X" ? "Panic" : "X");
    });

    if (localStorage.getItem("caasppreminder") == "false") $(".caasppreminder").hide();

    $(".leave").click(function () {
        window.location.href = "https://powerschool.losaltos.k12.ca.us/guardian/home.html";
        window.open("https://classroom.google.com/", "_blank").focus();
    });

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/service-worker.js")
                .then(registration => console.log("Service Worker registered:", registration))
                .catch(error => console.error("Service Worker registration failed:", error));
        });
    }

    $("body").addClass("loaded");
    update();
});

const secretKeyCodes = {
    "bell": () => {
        $(".belldefault").show();
        $("*").css("font-family", "'Roboto', sans-serif");
        $(".schedule").css("font-family", "'Roboto', sans-serif");
        $("select.font").val("'Roboto', sans-serif");
        localStorage.setItem("font", "'Roboto', sans-serif");
    },
    "title": () => {
        const toggle = localStorage.getItem("displayInTitle") === "true" ? "false" : "true";
        localStorage.setItem("displayInTitle", toggle);
        if (toggle === "false") $(".header").text("Chime");
    },
    "pi": () => {
        $(".pizza").show().hide(3000);
    },
    "sus": () => {
        $(".suspense").show().hide(3000);
    },
    "spring": () => {
        const n = $("<p class='title'>").text("It's *spring* break go do something why are you on this website right now what are you doing right now (easter egg ver.)");
        n.css("font-family", localStorage.getItem("font"));
        $(".schedule").html(n);
    },
    "schedule": () => {
        $(".twentytwoothree").show();
        dayIndex = 6;
        currentSchedule = schedules["???"];
        updateSchedule();
        $("select.schedules").val("9");
    },
    "caaspp": () => {
        $(".caasppreminder").show();
        $(".caasppschedules").show();
    }
};

const secretStrings = Object.keys(secretKeyCodes);
const maxLength = Math.max(...secretStrings.map(s => s.length));
let buffer = "";

document.addEventListener("keydown", (event) => {
    buffer += event.key.toLowerCase();
    buffer = buffer.slice(-maxLength);

    for (const code of secretStrings) {
        if (buffer.endsWith(code)) {
            secretKeyCodes[code]();
            buffer = "";
            break;
        }
    }
});
