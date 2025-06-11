const savedTheme = localStorage.getItem("theme");
if (savedTheme) $("html").attr("data-theme", savedTheme);