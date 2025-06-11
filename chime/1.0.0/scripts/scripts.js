function loadSettings() {
    const bottomSite = localStorage.getItem('bottomSite');
    if (bottomSite) {
        $(".bottomSite").attr("src", bottomSite);
        $(".bottomSiteInput").val(bottomSite);
    }

    const bgColor = localStorage.getItem('bgColor');
    if (bgColor) {
        $("body").css("background-color", bgColor);
        $(".bgcolor").val(bgColor);
    }

    const fgColor = localStorage.getItem('fgColor');
    if (fgColor) {
        $(".wrapper").css("color", fgColor);
        $(".fgcolor").val(fgColor);
    }
}

function saveSettings() {
    const bottomSite = $(".bottomSiteInput").val();
    localStorage.setItem('bottomSite', bottomSite);

    const bgColor = $(".bgcolor").val();
    localStorage.setItem('bgColor', bgColor);

    const fgColor = $(".fgcolor").val();
    localStorage.setItem('fgColor', fgColor);
}

$(document).ready(() => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/service-worker.js")
                .then(registration => console.log("Service Worker registered:", registration))
                .catch(error => console.error("Service Worker registration failed:", error));
        });
    }
    
    loadSettings();
});