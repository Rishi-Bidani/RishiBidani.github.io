const githubIcon = document.querySelector(".logo-item");
githubIcon.onclick = () => window.location.href = githubIcon.getAttribute("data-link");

const projects = [...document.querySelectorAll(".card")];
projects.map(project => {
    project.setAttribute("title", `Go to ${project.getAttribute("data-link")}`);
    project.onclick = () => window.location.href = project.getAttribute("data-link");
})


const starSpans = [...document.querySelectorAll(".github--stars")];
const githubRepoData = (
    async () => (await fetch(`https://api.github.com/users/Rishi-Bidani/repos`)).json()
)();


starSpans.map(async span => {
    const data = await githubRepoData;
    span.textContent = data.filter(
        repo => repo.id === parseInt(span.getAttribute("data-github-repo-id"))
    )[0].stargazers_count;
})