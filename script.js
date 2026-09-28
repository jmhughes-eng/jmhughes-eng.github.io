const upload = document.getElementById("background-upload");
const slider = document.getElementById("dim-slider");
const background = document.querySelector(".background-image");

upload.addEventListener("change", function () {
    const file = upload.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function () {
        background.style.backgroundImage = `url("${reader.result}")`;
    };

    reader.readAsDataURL(file);
});

slider.addEventListener("input", function () {
    document.documentElement.style.setProperty(
        "--dim",
        `${slider.value}%`
    );
});