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
