const check = document.querySelectorAll("input");
const label = document.querySelectorAll("label");

// check.forEach((checks) => {
//     checks.addEventListener("click", function() {
//         label[checks].classList.toggle("gray")
//     })
// })


for ( let i = 0; i < check.length; i++) {
    check[i].addEventListener("click", function() {
        for (let a = 0; a < label.length; a++) {
            label[a].classList.toggle("gray");
        }
    })
}