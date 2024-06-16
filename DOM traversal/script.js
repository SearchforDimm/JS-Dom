// const close = document.querySelector(".close");
// close.addEventListener("click", () => {
//     if (close.parentElement.style.display = "none") {
//         console.log("deleted!")
//     }
// })
// just one case


// const close = document.querySelectorAll(".close");

// close.forEach(function(closed) {
//     closed.addEventListener("click", (x) => {
//         x.target.parentElement.style.display = "none";
//         x.preventDefault();
//         x.stopPropagation(); 
//         alert("deleted!")
//     })
// })

// const cards = document.querySelectorAll(".card");
// cards.forEach(function(card) {
//     card.addEventListener("click", function(x) {
//         alert("mashok")
//     })
// })


const container = document.querySelector(".container");
container.addEventListener("click", function(event) {
    if(event.target.className == "close") {
        event.target.parentElement.style.display = "none";
        event.preventDefault();
    }
})