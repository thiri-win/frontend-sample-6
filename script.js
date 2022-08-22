document.querySelector(".toggle").onclick = () => {
    document.querySelector("nav").classList.toggle("active");
    document.querySelector(".toggle").classList.toggle("fa-times");
}
document.querySelector("nav").onclick = () => {
    document.querySelector("nav").classList.remove("active");
    document.querySelector(".toggle").classList.remove("fa-times");
}
