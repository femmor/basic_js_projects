//  Initial value of count
let count = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        if (e.currentTarget.classList[1] === "decrease") {
            count--;
            value.textContent = count;
        }
        else if(e.currentTarget.classList[1] === "increase") {
            count++;
            value.textContent = count;
        }
        else if(e.currentTarget.classList[1] === "reset") {
            count = 0;
            value.textContent = count;
        }
        if (count > 0) {
            value.style.color = "green"
        }

        if (count < 0) {
            value.style.color = "red"
        }
        return count;
    })
});

// get variables
// const decrease = document.querySelector(".decrease");
// const increase = document.querySelector(".increase");
// const reset = document.querySelector(".reset");

// // decrease count
// decrease.addEventListener("click", function() {
//     count === 0 ? count : count--;
//     value.innerHTML = count;
// })

// // increase count
// increase.addEventListener("click", function() {
//     count++;
//     value.innerHTML = count;
// })

// // Reset count
// reset.addEventListener("click", function() {
//     count = 0;
//     value.innerHTML = count;
// })