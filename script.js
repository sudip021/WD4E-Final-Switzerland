function upDate(previewPic) {
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
}
function showFact() {
    document.getElementById("fact").innerHTML =
        "Switzerland has over 1,500 lakes and is one of the most peaceful countries in the world.";
}
