document.querySelectorAll("h2, h4").forEach(header => {
    header.addEventListener("click", () => {
        const section = header.nextElementSibling;
        if (section && section.classList.contains("hide")) {
            section.style.display = section.style.display === "block" ? "none" : "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const roadmaps = document.querySelectorAll("section ul li.map h4");

    roadmaps.forEach(h4 => {
        h4.addEventListener("click", () => {
            const nextUl = h4.nextElementSibling;

            // Basculer l'affichage du ul associé
            if (nextUl.style.display === "block") {
                nextUl.style.display = "none";
            } else {
                nextUl.style.display = "block";
            }
        });
    });
});