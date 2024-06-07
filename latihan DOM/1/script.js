const title = document.getElementById("title");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", ()=> {
    let bodyChange = document.getElementsByTagName('body')[0];
    bodyChange.classList.toggle("dark");
});
function changeColor(event) {}

myButton.addEventListener("mouseover", event => { 
    myButton.textContent = "U Sure?";
    })
myButton.addEventListener("mouseout", event => { 
        myButton.textContent = "Change Background?";
})

myButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
})