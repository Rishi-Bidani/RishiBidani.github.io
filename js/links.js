const cards = [...document.querySelectorAll(".card")];
cards.map(card => {
    card.setAttribute("title", `Go to ${card.getAttribute("data-link")}`)
    card.onclick = () => {
        window.location.href = card.getAttribute("data-link");
    };
})