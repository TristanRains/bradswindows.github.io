function update(){
    document.getElementById("display").style.visibility = "hidden";
    document.getElementById("display").classList.toggle("display");
    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    const Services = document.getElementById("Services");
    const Pricing = document.getElementById("Pricing");
    Home.classList.add("highlight");
};

const container = document.querySelector(".container");
const links = document.querySelectorAll('.link');
const menu = document.querySelector(".menu");
links.forEach((link) => {
link.addEventListener('click', (event) => {
    // event.currentTarget is guaranteed to be the <a> tag here
    document.querySelectorAll(".link").forEach((item) => {
    item.classList.remove("highlight");
    })
    event.target.classList.add("highlight");
})});

function closeMenu() {
    container.classList.toggle("nav-hidden");
    document.body.style.marginTop = "-6dvw";
    menu.style.visibility = "visible";
    menu.classList.toggle("display");
};

function openMenu() {
    menu.classList.toggle("display");
    container.classList.toggle("nav-hidden");
    document.body.style.marginTop = "0";
};