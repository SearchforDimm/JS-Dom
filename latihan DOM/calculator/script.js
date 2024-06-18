const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display")


keys.addEventListener("click", function(e) {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent
        if(!action) {
            if ( displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
        }

        if ( action === 'decimal') {
            display.textContent = displayedNum + '.'
        }
        // if ( action === 'clear') {
        //     console.log("clear")
        // }
        // if ( action === 'calculate') {
        //     console.log("calculate")
        // }
    }
})