let _run = true;

if (typeof Timeline == "undefined") {
    console.error("Missing script(s)! Please include 'includes/Timeline.js'!");
    _run = false;
}

function updateTimeline() {
    if (!_run) return;

    const timelineDiv = document.querySelector(".timeline");
    timelineDiv.innerHTML = `
    <div class="item left">
        <div class="content">Hi There</div>
    </div>
    <div class="item right">
        <div class="content">Hi There</div>
    </div>
    `;

}

// updateTimeline();