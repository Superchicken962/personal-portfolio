let _run = true;

if (typeof Projects == "undefined") {
    console.error("Missing script! Please include 'includes/Projects.js'!");
    _run = false;
}

function updateIndexPage() {
    if (!_run) return;

    const projectsDiv = document.querySelector(".projects");
    projectsDiv.innerHTML = "<h1>Featured Projects</h1><p class='desc'>A few of the projects that I am proudest of!</p>";

    for (const project of Projects) {
        let proj_div = document.createElement("div");
        proj_div.className = "project";

        proj_div.innerHTML = `
        <div class="content">
            <h2>${project.name} <span class="purpose">${project.purpose} ${(project.private) ? "<span title='Not Public'>🔒</span>" : ""}</span></h2>
            <p>${project.description}</p>

            <div class="languages">
                <!-- Remove 'useIcon' from span class to use coloured circles instead -->
                ${project.languages.map(language => `<span class="language ${language}"><span class="language_icon useIcon" style="background-image: url(${languageInfo[language].icon}); background-color: ${languageInfo[language].colour}"></span> ${language}</span>`).join("")}
            </div>

            <div class="badges">
                ${(project.github) ? `<a class="github" href="${project.github}" target="_blank" title="Github Repository"></a>` : ""}
                ${(project.viewonline) ? `<a class="viewonline" href="${project.viewonline}" target="_blank" title="View Live"></a>` : ""}
            </div>
        </div>
        `;

        proj_div.onclick = () => {console.log("Hi")};

        projectsDiv.appendChild(proj_div);
    }

    projectsDiv.innerHTML += `<h3 style="text-align:center">And More!</h3>`;
}

const languageInfo = {
    "HTML": {"colour": "orange", "icon": "assets/languages/html.png"},
    "CSS": {"colour": "blue", "icon": "assets/languages/css.png"},
    "PHP": {"colour": "purple", "icon": "assets/languages/php.png"},
    "JavaScript": {"colour": "yellow", "icon": "assets/languages/javascript.png"},
    "Node.js": {"colour": "green", "icon": "assets/languages/nodejs_2.png"},
    "C#": {"colour": "lime", "icon": "assets/languages/cs.png"},
    "Java": {"colour": "goldenrod", "icon": "assets/languages/java.webp"}
};

updateIndexPage();

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