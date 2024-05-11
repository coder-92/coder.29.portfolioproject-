const navbar = document.getElementById("nav-bar");    
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navitems = document.getElementById("nav-items");

// menuBtn.addEventListener("click", () => {
//     // navbar.style.height = "max-content";
//     // navitems.style.display = "block !important";
//     if(menuBtn)
//     navitems.classList.add("block-important");
//     menuBtn.style.display = "none";
//     closeBtn.style.display = "block";
// })

// closeBtn.addEventListener("click", () => {
//     // navitems.style.display = "none";
//     navitems.classList.remove("block-important");
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "block";
//     // navbar.style.height = "70px";
// })

menuBtn.addEventListener("click", () => {
    if (navitems && closeBtn) {
        navitems.classList.add("display-block-important");
        navitems.classList.remove("display-none-important");
        closeBtn.classList.add("display-block-important");
        closeBtn.classList.remove("display-none-important");
        menuBtn.classList.add("display-none-important");
    }
});

closeBtn.addEventListener("click", () => {
    if (navitems && closeBtn) {
        navitems.classList.remove("display-block-important");
        navitems.classList.add("display-none-important");
        closeBtn.classList.remove("display-block-important");
        closeBtn.classList.add("display-none-important");
        menuBtn.classList.remove("display-none-important");
    }
});



const dynamicText = document.querySelector("#auto-type");
const words = ["Computer Science Engineer",  "Full Stack Developer", "Android App Developer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {

        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
