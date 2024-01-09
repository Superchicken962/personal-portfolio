function updateProjectInfo(projectId, selector) {
    if (!Projects) return null;

    const projectInfoDiv = document.querySelector(selector);
    projectInfoDiv.innerHTML = "";

    const project = Projects[projectId];

    const content = document.createElement("div");
    content.className = "project_info";

    content.innerHTML = `
    <a class="backBtn">Back</a>

    <h1>${project.name}</h1>
    <div class="languages">
        ${project.languages.map(language => `<span class="language ${language}"><span class="language_icon useIcon" style="background-image: url(${languageInfo[language].icon}); background-color: ${languageInfo[language].colour}"></span> ${language}</span>`).join("")}
    </div>

    <p>${project.description_long || project.description}</p>

    <div class="assets">
        ${(project.assets) ? project.assets.map(asset => `<div class="asset"><img class="asset_img" src="assets/projects/${asset.filename}"/><p>${asset.desc}</p></div>`).join("") : "<i>No Images Available</i>"}
    </div>
    `;
    
    content.querySelector(".backBtn").onclick = () => {
        window.location = "projects.html";
    };

    projectInfoDiv.appendChild(content);
}

// updateProjectInfoPage(givenProjectId, ".project_info");