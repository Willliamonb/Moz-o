// ===========================
// ELEMENTOS
// ===========================

const enterBtn = document.getElementById("enter");
const music = document.getElementById("music");
const welcomeScreen = document.getElementById("welcome-screen");
const intro = document.getElementById("intro");
const introText = document.getElementById("intro-text");

intro.style.display = "none";

// ===========================
// INTRO NETFLIX
// ===========================

const introMessage =
"Tem uma pessoa que tornou meus últimos dias especiais... ❤️";

let introIndex = 0;

function typeIntro() {

    if (introIndex < introMessage.length) {

        introText.innerHTML += introMessage.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro, 55);
    }
}

function startNetflixIntro() {

    introText.innerHTML = "";
    introIndex = 0;

    typeIntro();

    setTimeout(() => {

        introText.innerHTML =
        "E essa pessoa é você, Aline ❤️";

    }, 4500);

    setTimeout(() => {

        intro.classList.add("hideIntro");

        setTimeout(() => {

            intro.style.display = "none";

        }, 1500);

    }, 8000);
}

// ===========================
// BOTÃO DE ENTRADA
// ===========================

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        music.play().catch(() => {});

        welcomeScreen.style.display = "none";

        intro.style.display = "flex";

        startNetflixIntro();

    });

}

// ===========================
// BOTÃO HERO
// ===========================

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    });

}

// ===========================
// CONTADOR
// ===========================

const startDate =
new Date("2025-04-24T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}

updateCounter();

setInterval(updateCounter, 1000);

// ===========================
// CARTA
// ===========================

const text =
`Aline,

Eu não sabia exatamente o que esperar quando te conheci.

Mas desde aquele primeiro encontro no dia 24 de abril,
cada conversa, cada risada e cada momento ao seu lado
foram tornando meus dias mais especiais.

Você trouxe leveza para os meus dias,
e fez momentos simples se tornarem lembranças especiais.

Não sei o que o futuro reserva para nós,
mas sei que sou muito feliz por estar vivendo essa história com você.

Obrigado por cada conversa,
cada sorriso e cada momento.

Com todo meu carinho,

William ❤️`;

let i = 0;
let letterStarted = false;

function typing() {

    const typingElement =
    document.getElementById("typing");

    if (!typingElement) return;

    if (i < text.length) {

        typingElement.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 35);
    }

}

// ===========================
// CORAÇÕES FLUTUANTES
// ===========================

function createHeart() {

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
    (Math.random() * 15 + 15) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = -50;

    const rise = setInterval(() => {

        pos += 2;

        heart.style.bottom = pos + "px";

        heart.style.opacity =
        1 - (pos / window.innerHeight);

        if (pos > window.innerHeight) {

            clearInterval(rise);

            heart.remove();
        }

    }, 30);

}

setInterval(createHeart, 1500);

// ===========================
// REVELAR SEÇÕES
// ===========================

const sections = document.querySelectorAll(
".story, .gallery, .qualities, .favorite, .letter, .end"
);

function revealSections() {

    sections.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("show");

            if (
                section.classList.contains("letter")
                && !letterStarted
            ) {

                letterStarted = true;

                typing();
            }

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();