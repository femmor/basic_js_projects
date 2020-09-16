
const reviews = [
    {
        id: 1,
        name: "Sara Jones",
        job: "Massage Therapist",
        img: "./img/person-1.jpeg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum totam quos qui optio minima aspernatur velit provident ut impedit.",
    },
    {
        id: 2,
        name: "David Edikan",
        job: "Computer Programmer",
        img: "./img/person-2.jpeg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum totam quos qui optio minima aspernatur velit provident ut impedit.",
    },
    {
        id: 3,
        name: "Ross Flemings",
        job: "UI/UX Developer",
        img: "./img/person-3.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum totam quos qui optio minima aspernatur velit provident ut impedit.",
    }
]

// Select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const text = document.getElementById("info")  

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
})

nextBtn.addEventListener("click", () => {
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }

    showPerson(currentItem)
})

prevBtn.addEventListener("click", () => {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
}) 

function showPerson(person) {
    const item = reviews[person]

    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    text.src = item.text
}



