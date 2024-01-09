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

function setCookie(name, value, expires_in_days) {
    const date = new Date();
    date.setTime(date.getTime() + ((expires_in_days || 0)*24*60*60*1000));
    
    document.cookie = `${name}=${value}; expires=${(expires_in_days) ? date.toUTCString() : 0}; path=/`;
}

function changeTheme(theme) {
    setCookie("WebTheme", theme, 7);
}

if (theme_selector) {
    theme_selector.oninput = function() {
        changeTheme(this.value);
        loadTheme();
    }
}

const defaultTheme = "light";

function loadTheme() {
    let theme = getCookie("WebTheme") || defaultTheme;

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

            root.style.setProperty("--pageButtonTheme", "rgb(88,88,88)");
            root.style.setProperty("--pageButtonThemeHover", "aqua");
            root.style.setProperty("--pageButtonThemeHoverBackground", "rgba(0,255,255,0.2)");
            root.style.setProperty("--pageButtonThemeBoxShadow", "5px 5px 10px black");

            root.style.setProperty("--primaryButtonTheme", "rgb(152,152,152)");
            root.style.setProperty("--primaryButtonBorderTheme", "rgb(210,210,210)");
            
            if (theme_selector) {
                theme_selector.value = "light";
            }

            break;

        case "midnight":
            root.style.setProperty("--textColour", "white");
            root.style.setProperty("--feintTextColour", "grey");
            root.style.setProperty("--mainTheme", "rgb(0,0,30)");
            root.style.setProperty("--secondaryTheme", "rgb(0,0,55)");
            // root.style.setProperty("--bodyTheme", "linear-gradient(45deg, rgb(0,0,15), rgb(5,10,35), rgb(0,0,50))");
            root.style.setProperty("--bodyTheme", "linear-gradient(90deg, rgb(0,0,55), rgb(5,25,55), rgb(0,0,50))");
            root.style.setProperty("--languageBoxTheme", "rgba(15,15,15,0.8)");
            root.style.setProperty("--projectTheme", "rgb(15,25,75)");
            root.style.setProperty("--projectEvenTheme", "rgb(20,25,50)");
            root.style.setProperty("--projectHover", "rgb(0,255,255)");
            root.style.setProperty("--projectHoverBackground", "rgba(0,255,255,0.2)");

            root.style.setProperty("--pageButtonTheme", "linear-gradient(180deg, rgb(11,15,43), rgb(14,13,66))");
            root.style.setProperty("--pageButtonThemeHover", "aqua");
            root.style.setProperty("--pageButtonThemeHoverBackground", "rgba(0,255,255,0.2)");
            root.style.setProperty("--pageButtonThemeBoxShadow", "5px 5px 10px black");

            root.style.setProperty("--primaryButtonTheme", "rgb(10,10,42)");
            root.style.setProperty("--primaryButtonBorderTheme", "rgb(0,0,120)");

            if (theme_selector) {
                theme_selector.value = "midnight";
            }
            
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

            root.style.setProperty("--pageButtonTheme", "linear-gradient(90deg, rgb(52,51,53), rgb(64,63,66))");
            root.style.setProperty("--pageButtonThemeHover", "grey");
            root.style.setProperty("--pageButtonThemeHoverBackground", "rgba(128,128,128,0.2)");
            root.style.setProperty("--pageButtonThemeBoxShadow", "5px 5px 10px rgb(10,10,10)");

            root.style.setProperty("--primaryButtonTheme", "rgb(52,52,52)");
            root.style.setProperty("--primaryButtonBorderTheme", "rgb(38,38,38)");

            if (theme_selector) {
                theme_selector.value = "dark";
            }

            break;
    }


}
loadTheme();

const timestampReturnFormats = {
    "Second": 0,
    "Minute": 1,
    "Hour": 2,
    "Day": 3,
    "Week": 4,
    "Month": 5,
    "Year": 6,
};

function RelativeTimestamp() {
    const elements = document.querySelectorAll(".relative_time");
    if (!elements) return;

    for (const el of elements) { 
        const timestamp = el.getAttribute("data-timestamp");
        const format = el.getAttribute("data-format");
        if (!timestamp || !format) continue;

        const timeDiff = Date.now() - parseInt(timestamp);
        console.log(timeDiff);
        
        let returning;

        switch (timestampReturnFormats[format]) {
            case 0:
                returning = timeDiff/1000;
                break;

            case 1:
                returning = timeDiff/1000/60;
                break;

            case 2:
                returning = timeDiff/1000/60/60;
                break;

            case 3:
                returning = timeDiff/1000/60/60/24;
                break;

            case 4:
                returning = timeDiff/6.048e+8;
                break;

            case 5:
                returning = timeDiff/2.628e+9;
                break;

            case 6:
                returning = timeDiff/3.154e+10;
                break;

            default:
                returning = timeDiff;
                break;
        }

        el.textContent = Math.floor(returning);
    }
}

RelativeTimestamp();
setInterval(RelativeTimestamp, 10000);