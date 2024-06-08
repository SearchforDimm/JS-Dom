

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", function() {

    let audio = new Audio('huh.mp3');
    console.log("test")
    if (myImg.style.visibility ==="hidden") {
        myImg.style.visibility = "visible"
        myButton.textContent = "Hide";
        audio.play()
    } else {
        myImg.style.visibility = "hidden"
        myButton.textContent = "Show";

    }
})