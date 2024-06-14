const title = document.getElementsByTagName('h1')[0]
// const myBtn = document.getElementById('btn');
const myBtn = document.createElement("button");
const myBtnText = document.createTextNode("Ubah Warna JS");
myBtn.appendChild(myBtnText);
myBtn.setAttribute("type", "button");
myBtn.style.textAlign = "center"
title.after(myBtn)

myBtn.addEventListener("click", () => {
    const randR = Math.round(Math.random() * 255 + 1);
    const randG = Math.round(Math.random() * 255 + 1);
    const randB = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`
})


// myBtn.addEventListener("click", () => {
//     // document.body.classList.toggle("change");
//     // document.body.setAttribute("class", "change")
//     // document.body.style.backgroundColor = "red"
// })
// const sliders = document.querySelector("input[name=sR]");

// console.log(sliders)'

// sliders.addEventListener("input", function() {
//     const r = sliders.value
//     document.body.style.backgroundColor = `rgb(${r}, 100, 100)`
// })
// for(let i = 0; i < sliders.length; i++) {
//     sliders[i].addEventListener("input", function() {
//         const r = sliders[0].value;
//         const g = sliders[1].value;
//         const b = sliders[2].value;
        
//         document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//     })
// }

const sliders = document.querySelectorAll(".slider"); // buat variable untuk menangkap semua class yang bernama slider (mengembalikan semua class yang bernama slider menjadi sebuah nodelist)

function changeBg() {
    const r = sliders[0].value;
    const g = sliders[1].value;
    const b = sliders[2].value;
    
    // menangkap tiap input dimulai dari index ke 0
     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
} // membuat fungsi untuk mengubah warna ketika slidernya digeser
sliders.forEach(function(slider) {
    slider.addEventListener("input", changeBg);
}) // mengambil semua nodelist, dan ditambahkan event listener

changeBg() // nge-set warna background sesuai dengan value dari nilai awal


document.body.addEventListener("mousemove", function(event) {

    posX = Math.round((event.clientX / window.innerWidth) * 255);
    posY = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = `rgb(${posX}, ${posY}, 100)`
})