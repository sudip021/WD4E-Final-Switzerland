function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    const imageDiv = document.getElementById("image");
    imageDiv.innerHTML = "Hover or focus on an image below to display here.";
    imageDiv.style.backgroundImage = "";
}

function showFact() {
    const fact = document.getElementById("fact");
    fact.textContent =
        "Switzerland has over 1,500 lakes and is known for its peaceful environment.";
}

/* MAIN ACCESSIBILITY FUNCTION */
function initGallery() {
    console.log("Accessibility initialized");

    const images = document.querySelectorAll(".gallery img");

    images.forEach((img) => {
        // Make focusable
        img.setAttribute("tabindex", "0");

        // Mouse support
        img.addEventListener("mouseover", () => upDate(img));
        img.addEventListener("mouseout", undo);

        // Keyboard support
        img.addEventListener("focus", () => upDate(img));
        img.addEventListener("blur", undo);
    });

    // Button event (clean JS, no inline)
    const btn = document.getElementById("factBtn");
    if (btn) {
        btn.addEventListener("click", showFact);
    }
}

/* On Load */
window.addEventListener("load", initGallery);
