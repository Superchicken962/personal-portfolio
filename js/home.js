let _run = true;

if (typeof Pages == "undefined") {
    console.error("Missing script! Please include 'includes/Pages.js'!");
    _run = false;
}

function updatePagesPage() {
    if (!_run) return;

    const portfolioNavigationDiv = document.querySelector(".portfolio_navigation");
    portfolioNavigationDiv.innerHTML = "";

    for (const page of Pages) {
        let pageDiv = document.createElement("a");
        pageDiv.className = "page";

        pageDiv.innerHTML = `
        <h1>${page.title}</h1>
        <p>${page.description}</p>
        `;

        if (page.file) {
            pageDiv.href = page.file;
        }

        portfolioNavigationDiv.appendChild(pageDiv);
    }
}

updatePagesPage();