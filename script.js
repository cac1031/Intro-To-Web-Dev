// Parallax Scrolling
window.addEventListener("scroll", () => {
    const tealPlanet = document.getElementById("teal-ring");
    const purplePlanet = document.getElementById("planet-purple");
    const land = document.getElementById("space-land");
    const mainTitle = document.getElementById("main-title");

    const verticalOffset = window.scrollY;
    mainTitle.style.top = -verticalOffset * 2 + 'px';
    purplePlanet.style.left = -verticalOffset * 0.5 + 'px';
    tealPlanet.style.left = verticalOffset * 0.5 + 'px';
    land.style.top = verticalOffset * 0.2 + 'px';
});

// Card Flip on Click
const cards = Array.from(document.getElementsByClassName("card"));

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("visible");
    })
});
