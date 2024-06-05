// DOM SELECTION
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "#fff";
judul.style.backgroundColor = "#101010";
judul.innerHTML = "Dimas"


// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "#101010"
    p[i].style.color = "#fff"
}

// document.getElementsByClassName() -> HTMLCollection;

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "ini diubah dari javascript"

// document.querySelector() - > node 
const p4 = document.querySelector("#b p");
const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "#101010"
li2.style.color = "#fff";

// const p = document.querySelector("section#b");
p.innerHTML = "ini diubah melalui javascript";

// document.querySelectorALl() -> nodelist;
const p1 = document.querySelectorAll('p');

for( i = 0; i< p1.length; i++) {

    p1[i].style.backgroundColor = "lightblue"
}