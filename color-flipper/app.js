const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function() {
    // Setup login here
    // Get randomNumber between 0 and 3 - The colors[0 - 3] array
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});