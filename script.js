// Tilt.js ефекти
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 400,
});

// Логіка слайдера
const sliderTrack = document.getElementById('sliderTrack');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

let currentIndex = 0;

btnNext.addEventListener('click', () => {
    const slides = document.querySelectorAll('.card');
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Демонстрація реєстрації (Проста валідація)
document.querySelector('#login').addEventListener('input', (event) => {
    const input = event.target;
    if (input.value.length < 3) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'green';
    }
});

document.querySelector('#password').addEventListener('input', (event) => {
    const input = event.target;
    if (input.value.length < 6) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'green';
    }
});
const menuButton = document.querySelector('.menu');
const navMenu = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
let ak=document.querySelector(".ak")
let r=document.querySelector(".r")
let sr=document.querySelector(".sr")
let zr=document.querySelector(".zr")
let yr=document.querySelector(".yr")
let vr=document.querySelector(".vr")
let settings=document.querySelector(".settings")
let akaunt=document.querySelector(".akaunt")
