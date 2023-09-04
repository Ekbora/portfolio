const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("observed")
        else entry.target.classList.remove("observed")
    })
}, {
    threshold: .3
})

const observableElement = document.querySelectorAll(".observable")
observableElement.forEach(elt => {
    observer.observe(elt)
})

const navbar = document.querySelector(".navbar")
const navBtn = document.querySelector(".nav-btn")

navbar

navBtn.addEventListener("click", () => {
    navbar.classList.toggle("open")
})