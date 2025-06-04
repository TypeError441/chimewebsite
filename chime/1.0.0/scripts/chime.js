const schedules = {
    normal: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 16, "Period 1"],
        [9, 19, "Passing to Period 2"], [10, 5, "Period 2"], [10, 8, "Passing to Period 3"],
        [10, 57, "Period 3"], [11, 11, "Brunch"], [11, 14, "Passing to Period 4"],
        [12, 0, "Period 4"], [12, 3, "Passing to Period 5"], [12, 49, "Period 5"],
        [13, 25, "Lunch"], [13, 28, "Passing to Period 6"], [14, 14, "Period 6"],
        [14, 17, "Passing to Period 7"], [15, 3, "Period 7"]
    ],
    tutorial: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 12, "Period 1"], [9, 15, "Passing to Period 2"],
        [9, 57, "Period 2"], [10, 0, "Passing to Period 3"], [10, 42, "Period 3"], [10, 56, "Brunch"],
        [10, 59, "Passing to Tutorial"], [11, 27, "Tutorial"], [11, 30, "Passing to Period 4"], [12, 12, "Period 4"],
        [12, 15, "Passing to Period 5"], [12, 57, "Period 5"], [13, 33, "Lunch"], [13, 36, "Passing to Period 6"], 
        [14, 18, "Period 6"], [14, 21, "Passing to Period 7"], [15, 3, "Period 7"]
    ],
    even_block: [
        [9, 12, "Free"], [9, 17, "Passing to Period 2"], [10, 39, "Period 2"], [10, 53, "Brunch"],
        [10, 56, "Passing to Period 4"], [12, 18, "Period 4"], [12, 54, "Lunch"], [12, 57, "Passing to Period 6"],
        [14, 19, "Period 6"], [14, 22, "Passing to Tutorial"], [15, 3, "Tutorial"]
    ],
    odd_block: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 52, "Period 1"], [9, 58, "Break"],
        [10, 1, "Passing to Period 3"], [11, 23, "Period 3"], [11, 37, "Brunch"], [11, 40, "Passing to Period 5"],
        [13, 2, "Period 5"], [13, 38, "Lunch"], [13, 41, "Passing to Period 7"], [15, 3, "Period 7"]
    ],
    advisory: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 12, "Period 1"], [9, 15, "Passing to Period 2"],
        [9, 57, "Period 2"], [10, 0, "Passing to Period 3"], [10, 42, "Brunch"], [10, 56, "Passing to Advisory"],
        [10, 59, "Advisory"], [11, 27, "Passing to Period 4"], [12, 12, "Period 4"], [12, 15, "Passing to Period 5"],
        [12, 57, "Period 5"], [13, 33, "Lunch"], [13, 36, "Passing to Period 6"], [14, 18, "Period 6"], 
        [14, 21, "Passing to Period 7"], [15, 3, "Period 7"]
    ],
    minimum: [
        [8, 25, "Free"], [8, 30, "Passing to Period 1"], [9, 0, "Period 1"], [9, 3, "Passing to Period 2"],
        [9, 33, "Period 2"], [9, 36, "Passing to Period 3"], [10, 6, "Passing to Period 4"], [10, 9, "Period 4"],
        [10, 39, "Brunch"], [10, 51, "Passing to Period 5"], [11, 24, "Period 5"], [11, 27, "Passing to Period 6"],
        [11, 57, "Period 6"], [12, 0, "Passing to Period 7"], [12, 30, "Period 7"]
    ],
    assembly: [
        [8, 25, "Free"], [8, 30, "Passing to A"], [9, 10, "A"], [9, 13, "Passing to B"],
        [9, 53, "B"], [9, 56, "Passing to C"], [10, 37, "Brunch"], [10, 51, "Passing to D"],
        [10, 54, "D"], [11, 34, "Passing to E"], [12, 17, "E"], [12, 54, "Lunch"],
        [12, 57, "Passing to F"], [13, 37, "F"], [13, 40, "Passing to G"], [14, 20, "G"],
        [14, 23, "Passing to H"], [15, 3, "H"]
    ],
    weekend: [[0, 0, "Free"]]
};

const days = ["weekend", "normal", "tutorial", "even_block", "odd_block", "advisory", "weekend", "minimum", "assembly"];
let currentDay = new Date().getDay();
let currentSchedule = schedules[days[currentDay]];

const daysLabel = ["Weekend", "Normal", "Tutorial", "Even Block", "Odd Block", "Advisory", "Weekend", "Minimum", "Assembly"];

function updateSchedule() {
    $(".scheduleButton").click(() => {
        currentDay = (currentDay + 1) % days.length; // Loop through schedule days correctly
        currentSchedule = schedules[days[currentDay]];
        $(".schedule").text(daysLabel[currentDay]); // Update UI immediately
        updateCountdown(); // Immediately update the countdown after schedule change
    });

    $(".bottomSiteInput").change(() => {
        $(".bottomSite").attr("src", $(".bottomSiteInput").val());
        saveSettings();
    });

    $(".bgcolor").change(() => {
        $("body").css("background-color", $(".bgcolor").val());
        saveSettings();
    });

    $(".fgcolor").change(() => {
        $(".wrapper").css("color", $(".fgcolor").val());
        saveSettings();
    });
}

function updateCountdown() {
    const now = new Date();
    let targetTime = new Date();
    let nextPeriod = "Free";

    for (let [h, m, period] of currentSchedule) {
        targetTime.setHours(h, m, 0, 0);

        if (now < targetTime) {
            nextPeriod = period;
            const diff = targetTime - now;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const timeString = `${hours > 0 ? hours + ":" : ""}${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            $(".time").text(timeString);
            $(document).attr("title", `${timeString} | ${nextPeriod}`);
            $(".period").text(nextPeriod);
            $(".schedule").text(daysLabel[currentDay]);

            break;
        }
    }

    // If we're past the target time, move to the next period
    if (targetTime <= now) {
        // Reset the notification flag and go to the next period
        notificationSent = false; // Reset notification flag
        const [h, m, period] = currentSchedule[0];
        targetTime = new Date();
        targetTime.setDate(now.getDate() + 1);  // Move to the next day for the same time
        targetTime.setHours(h, m, 0, 0);

        const diff = targetTime - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const timeString = `${hours > 0 ? hours + ":" : ""}${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        $(".time").text(timeString);
        $(document).attr("title", `${timeString} | ${nextPeriod}`);
        $(".period").text(nextPeriod);
        $(".schedule").text(daysLabel[currentDay]);
    }

    setTimeout(updateCountdown, 1000);
}

$(document).ready(() => {
    updateSchedule();
    updateCountdown();
});