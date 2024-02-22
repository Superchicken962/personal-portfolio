let _run = true;

if (typeof Projects == "undefined" || typeof updateProjectInfo == "undefined") {
    console.error("Missing script(s)! Please include 'includes/Projects.js' and 'project_info.js'!");
    _run = false;
}

function updateProjectsList() {
    if (!_run) return;

    let searchParams = new URLSearchParams(window.location.search);
    let givenProjectId = searchParams.get("p");

    // if we are given a project id in url parameters, then load project rather than list of projects
    if (givenProjectId) {
        updateProjectInfo(givenProjectId, ".projects");
        return;
    }

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
                ${(project.viewonline === Infinity) ? `<a class="viewonline" href="${project.viewonline}" target="_blank" title="View Live"></a>` : ""}
            </div>
        </div>
        `;

        proj_div.onclick = function() {
            const projectIndex = Projects.findIndex(p => p == project);

            // updateProjectInfo(projectIndex, ".projects");
            // window.history.pushState(null, null, "projects.html");
            window.location = "projects.html?p="+projectIndex;
        }

        // 'stopPropagation' for each button that opens a url. This stops the div from registering a click when the button is clicked, so the user does not open the project as well as visiting the github repository
        for (const badge_btn of proj_div.querySelectorAll(".badges a")) {
            badge_btn.onclick = (event) => {
                event.stopPropagation();
            }
        }

        projectsDiv.appendChild(proj_div);
    };

    // create and element and append it instead of adding to innerhtml because the latter will cause the project events to not work
    const footerText = document.createElement("h3");
    footerText.style.textAlign = "center";
    footerText.textContent = "And More!";

    projectsDiv.appendChild(footerText);

    // projectsDiv.innerHTML += `<h3 style="text-align:center">And More!</h3>`;
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

updateProjectsList();