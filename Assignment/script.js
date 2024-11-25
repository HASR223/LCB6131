const images = [
    { 
        src: "pictures/lindan.png",
     text:[
    "Lin dan",
    "Country:China",
    "Born:14 October 1983",
    "Carrer Record: 662 wins and 131 losses"
    ]
 },
 { 
        src: "pictures/leechongwei.png",
     text:[
    "Lee Chong Wei",
    "Country:Malaysia",
    "Born:21 October 1982",
    "Carrer Record: 711 wins and 134 losses"
    ]
 },
 { 
        src: "pictures/taufikhidayat.png",
     text:[
    "Taufik Hidayat",
    "Country:Indonesia",
    "Born:10 August 1981",
    "Carrer Record: 413 wins and 138 losses"
    ]
 },
 { 
        src: "pictures/leeziijia.png",
     text:[
    "Lee Zii Jia",
    "Country:Malaysia",
    "Born:29 March 1998",
    "Carrer Record: 258 wins and 132 losses"
    ]
 },
 { 
        src: "pictures/viktoraxelsen.png",
     text:[
    "Viktor Axelsen",
    "Country:Dubai",
    "Born:4 January 1994",
    "Carrer Record: 556 wins and 156 losses"
    ]
 },
    

];

let currentIndex = 0;

function updateSlider() {
    const imageElement = document.getElementById("slider-image");
    const textElement = document.getElementById("slider-text");

    imageElement.src = images[currentIndex].src;
    textElement.innerHTML = images[currentIndex].text.map(line => `<p>${line}</p>`).join('');
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

updateSlider();
