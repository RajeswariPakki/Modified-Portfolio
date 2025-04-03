document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadResume");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const resumeUrl = "resume.pdf"; // Ensure this file exists
            const a = document.createElement("a");
            a.href = resumeUrl;
            a.download = "Pakki_Rajeswari_Resume.pdf"; // Download file name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    } else {
        console.error("Download button not found in the DOM!");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const viewProjectButtons = document.querySelectorAll(".view-project-btn");

    viewProjectButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectUrl = this.getAttribute("data-url");
            if (projectUrl) {
                window.open(projectUrl, "_blank"); // Opens in a new tab
            } else {
                console.error("Project URL not found!");
            }
        });
    });
});

