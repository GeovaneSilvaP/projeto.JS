document.addEventListener("DOMContentLoaded", function(){

    const slideParagraphs = document.querySelectorAll(".slide-paragraph");

    slideParagraphs.forEach((slideParagraphs) =>{
        const textLimit = 100;
        const fullText = slideParagraphs.innerHTML;
        const aTag = slideParagraphs.querySelector(".paragraph-anchor-tag");

        if(slideParagraphs.innerHTML.length > textLimit){
            slideParagraphs.innerHTML = fullText.substring(0, textLimit) + "... " + aTag.innerHTML;
        };
    });

    const videoParagraphs = document.querySelectorAll(".video-paragraph");

    videoParagraphs.forEach((videoParagraphs) =>{
        const textLimit = 150;
        const fullText = videoParagraphs.innerHTML;
        const aTag = videoParagraphs.querySelector(".video-anchor-tag");

        if(videoParagraphs.innerHTML.length > textLimit){
            videoParagraphs.innerHTML = fullText.substring(0, textLimit) + "... " + aTag.innerHTML;
        };
    })
});

const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const numberOfSlides = slides.length;
const slideBtns = document.querySelectorAll(".slide-btn");
const slideIndicatorBars = document.querySelectorAll(".indicator-bar");
var slideNumber = 0;


const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", () =>{
    slides.forEach((slide) =>{
        slide.classList.remove("active")
    });

    slideBtns.forEach((slideBtns) =>{
        slideBtns.classList.remove("active")
    });

    slideIndicatorBars.forEach((slideIndicatorBars) =>{
        slideIndicatorBars.classList.remove("active")
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0
    };

    slides[slideNumber].classList.add("active");
    slideBtns[slideNumber].classList.add("active");
    slideIndicatorBars[slideNumber].classList.add("active");
})

