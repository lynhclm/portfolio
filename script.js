// PROJETS
function showMessage(type) {
    const msg = document.getElementById("message");

    if (type === "python") {
        msg.textContent = "Python est mon langage principal...";
    }
    if (type === "html") {
        msg.textContent = "HTML sert à créer mes sites...";
    }
    if (type === "c") {
        msg.textContent = "Le langage C m'a appris le fonctionnement machine...";
    }
    if (type === "css") {
        msg.textContent = "CSS permet de styliser mes pages web...";
    }
}

// MENU HAMBURGER
const menu = document.getElementById("menu");
const openBtn = document.getElementById("ouvrirmenu");
const closeBtn = document.getElementById("close");

// OUVRIR MENU
openBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

// FERMER MENU
closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// FERMER LE MENU QUAND ON CLIQUE SUR UN LIEN
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
