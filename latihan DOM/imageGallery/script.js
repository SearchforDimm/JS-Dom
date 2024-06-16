const container = document.querySelector(".container");
const large = document.querySelector(".large")
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function(e) {

    // check whats clicked
    if(e.target.className == "thumb") {
        large.src = e.target.src
        large.classList.add("fade");
        setTimeout( () => {
            large.classList.remove("fade")
        },200)


        thumbs.forEach(function(thumb) {
            
            thumb.className = 'thumb'
        })
        e.target.classList.add("active")

    }


})