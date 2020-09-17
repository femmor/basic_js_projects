const reviews = [
    {
        id: 1,
        img: "https://www.fakepersongenerator.com/Face/female/female20171026230224915.jpg",
        name: "Shirley R Crump",
        job: "UX Designer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis quo, sunt eum quis praesentium?"
    },
    {
        id: 2,
        img: "https://www.fakepersongenerator.com/Face/male/male1084602733703.jpg",
        name: "Enrique E Akins",
        job: "Technician",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis quo, sunt eum quis praesentium?"
    },
    {
        id: 3,
        img: "https://www.fakepersongenerator.com/Face/female/female20131023629986541.jpg",
        name: "Rita T Hires",
        job: "Human Resource Manager",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis quo, sunt eum quis praesentium?"
    },
    {
        id: 4,
        img: "https://www.fakepersongenerator.com/Face/male/male108522445777.jpg",
        name: "Myron K Anderson",
        job: "Backend Developer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis quo, sunt eum quis praesentium?"
    },
    {
        id: 5,
        img: "https://www.fakepersongenerator.com/Face/male/male2016108657961676.jpg",
        name: "John N Deloach",
        job: "Front End Developer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis quo, sunt eum quis praesentium?"
    },
]

const img = document.getElementById("person-img")
const name = document.getElementById("name")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentPerson = 0

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentPerson)
})

function showPerson(person) {
    const item = reviews[person]

    img.src = item.img
    name.textContent = item.name
    job.textContent = item.job
    info.textContent = item.info
}

// show previous person
prevBtn.addEventListener("click", () => {
    currentPerson--
    if(currentPerson < 0) {
        currentPerson = reviews.length - 1
    }
    showPerson(currentPerson)
})

// show next person
nextBtn.addEventListener("click", () => {
    currentPerson++
    if(currentPerson > reviews.length - 1) {
        currentPerson = 0
    }
    showPerson(currentPerson)
})

randomBtn.addEventListener("click", () => {
    currentPerson = Math.floor(Math.random() * reviews.length)
    showPerson(currentPerson)
})
