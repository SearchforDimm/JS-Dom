
const myBox = document.querySelector(".myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

window.addEventListener("keydown", event => {
    myBox.style.backgroundColor = "salmon";
    myBox.textContent = "😋";
})
window.addEventListener("keyup", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "😎";
})
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {

        event.preventDefault();
        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break
            case "ArrowDown":
                    y += moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break
        }

        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
})
