function upDate(previewPic) {
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = "Hover or focus on an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
}

function showFact() {
    document.getElementById("fact").innerHTML =
        "Switzerland has over 1,500 lakes and is one of the most peaceful countries in the world.";
}

/* REQUIRED FUNCTION */
function addTabFocus() {
    console.log("Page loaded: tabindex applied");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");

        images[i].onfocus = function () {
            upDate(this);
        };

        images[i].onblur = function () {
            undo();
        };
    }
}

/* ONLOAD EVENT */
window.onload = addTabFocus;
