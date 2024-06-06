const p3 = document.querySelector(".p3");
const p2 = document.querySelector(".p2");

// function changeColor() {
//     p3.style.backgroundColor = "lightblue"
//     p2.style.backgroundColor = "salmon"
// }
// p2.onclick = changeColor;
// window.addEventListener("onclick", function() {

// })


const p4 = document.querySelector("section#b p");
p4.addEventListener('click', function() {
    const ul = document.querySelector("section#b ul");
    const li = document.createElement('li');
    const liNew = document.createTextNode('ini teks baru');
    li.appendChild(liNew);
    ul.append(li)
});

// p3.onclick = function() {
//     p3.style.backgroundColor = "lightblue"
// }

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = "lightblue";
    p3.style.color = "red";
})
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = "salmon";
})