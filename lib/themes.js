$(document).ready(function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) $("html").attr("data-theme", savedTheme);

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/service-worker.js")
                .then(registration => console.log("Service Worker registered:", registration))
                .catch(error => console.error("Service Worker registration failed:", error));
        });
    }
});