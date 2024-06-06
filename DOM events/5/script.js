

const myBox = document.getElementById("myBox");

function changeColor(event) {
    // event.target.style.backgroundColor = "lightblue"
    // event.target.textContent = "Ouch 🫤"
}

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "lightblue"
    event.target.textContent = "Ouch 🫤"
})
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "dont do it! 🙁"
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightblue"
    event.target.textContent = "touch me! 🤣"
})