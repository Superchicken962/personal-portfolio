const footer = document.querySelector("footer");
const theme_selector = document.querySelector(".webtheme_toggle");

function getCookie(cookie_name) {
    cookie_name = cookie_name + "=";
    var cookies = document.cookie.split(";");
    var i;
    for (i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];

        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(cookie_name) != -1) {
            return cookie.substring(cookie_name.length, cookie.length);
        }
    }
}

function setCookie(name, value, expires) {
    document.cookie = `${name}=${value}; expires=${expires || 0}; path=/`;
}

function changeTheme(theme) {
    setCookie("WebTheme", theme);
}

theme_selector.oninput = function() {
    changeTheme(this.value);
    loadTheme();
}

function loadTheme() {
    let theme = getCookie("WebTheme") || "dark";

    const root = document.querySelector(":root");
    console.log(theme);

    // theme variables (from main.css)

    // --mainTheme: rgb(25,25,25);
    // --secondaryTheme: rgb(35,35,35);
    // --bodyTheme: rgb(45,45,45);
    // --languageBoxTheme: rgba(15,15,15,0.8);
    // --projectTheme: rgb(35,35,35);
    // --projectEvenTheme: rgb(30,35,35);
    // --projectHover: aqua;
    // --projectHoverBackground: rgba(0,255,255,0.2);

    switch(theme) {
        case "light":
            root.style.setProperty("--textColour", "black");
            root.style.setProperty("--feintTextColour", "rgb(60,60,60)");
            root.style.setProperty("--mainTheme", "rgb(225,225,225)");
            root.style.setProperty("--secondaryTheme", "rgb(160,160,160)");
            root.style.setProperty("--bodyTheme", "rgb(140,140,140)");
            root.style.setProperty("--languageBoxTheme", "rgba(200,200,200,0.8)");
            root.style.setProperty("--projectTheme", "rgb(170,170,180)");
            root.style.setProperty("--projectEvenTheme", "rgb(170,170,190)");
            root.style.setProperty("--projectHover", "rgb(0,255,255)");
            root.style.setProperty("--projectHoverBackground", "rgba(0,255,255,0.2)");

            theme_selector.value = "light";

            break;

        case "midnight":
            root.style.setProperty("--textColour", "white");
            root.style.setProperty("--feintTextColour", "grey");
            root.style.setProperty("--mainTheme", "rgb(0,0,30)");
            // root.style.setProperty("--bodyTheme", "linear-gradient(45deg, rgb(0,0,15), rgb(5,10,35), rgb(0,0,50))");
            root.style.setProperty("--bodyTheme", "linear-gradient(90deg, rgb(0,0,55), rgb(5,25,55), rgb(0,0,50))");
            root.style.setProperty("--languageBoxTheme", "rgba(15,15,15,0.8)");
            root.style.setProperty("--projectTheme", "rgb(15,25,75)");
            root.style.setProperty("--projectEvenTheme", "rgb(20,25,50)");
            root.style.setProperty("--projectHover", "rgb(0,255,255)");
            root.style.setProperty("--projectHoverBackground", "rgba(0,255,255,0.2)");

            theme_selector.value = "midnight";
            break;

        default:
        case "dark":
            root.style.setProperty("--textColour", "white");
            root.style.setProperty("--feintTextColour", "grey");
            root.style.setProperty("--mainTheme", "rgb(25,25,25)");
            root.style.setProperty("--secondaryTheme", "rgb(35,35,35)");
            root.style.setProperty("--bodyTheme", "rgb(45,45,45)");
            root.style.setProperty("--languageBoxTheme", "rgba(15,15,15,0.8)");
            root.style.setProperty("--projectTheme", "rgb(35,35,35)");
            root.style.setProperty("--projectEvenTheme", "rgb(30,35,35)");
            root.style.setProperty("--projectHover", "rgb(0,255,255)");
            root.style.setProperty("--projectHoverBackground", "rgba(0,255,255,0.2)");

            theme_selector.value = "dark";
            break;
    }


}
loadTheme();