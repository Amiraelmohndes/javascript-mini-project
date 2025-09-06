var images = [
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
    "assets/img5.jpg"
];
var currentIndex = 0;
var playInterval;

function showImage(index, imgElement) {
    imgElement.src = images[index];
}

function prevImage(imgElement) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex, imgElement);
}

function nextImage(imgElement) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex, imgElement);
}

function playImages(imgElement) {
    if (!playInterval) {
        playInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex, imgElement);
        }, 2000);
    }
}

function stopImages() {
    clearInterval(playInterval);
    playInterval = null;
}

showImage(currentIndex, slideImage);