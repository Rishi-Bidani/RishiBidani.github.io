const githubIcon = document.querySelector(".logo-item");
githubIcon.onclick = () => window.location.href = githubIcon.getAttribute("data-link");

const projects = [...document.querySelectorAll(".card")];
projects.map(project => {
    project.setAttribute("title", `Go to ${project.getAttribute("data-link")}`);
    project.onclick = () => window.location.href = project.getAttribute("data-link");
})