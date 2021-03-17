

function Slide(filename, desc) {
    this.filename = filename;
    this.desc = desc;
    this.element = undefined;
    this.getElement = function () {
        if (this.element === undefined) {
            let i = document.createElement("div")
            //i.setAttribute("src", "img/" + this.filename);
            i.style.backgroundImage = "url(img/" + this.filename + ")";
            let cap = document.createElement("div");
            cap.className = "caption";
            cap.innerHTML = this.desc;
            i.appendChild(cap);
            this.element = i;
        }
        return this.element;
    }
}

let Slides = [
    new Slide("1.jpg", "BUTTTT DADDDDDD."),
    new Slide("2.jpg", "Smileee."),
    new Slide("3.jpg", "Run Forest."),
    new Slide("4.jpg", "Sun is nice on a Summerday."),
    new Slide("5.jpg", "This ball is mine."),
    new Slide("6.jpg", "BFF")
];

const delay = 2000
window.onload = () => {
    let slideshow = document.getElementById("container");

    for (let i = 0; i < Slides.length; i++) {
        slideshow.appendChild(Slides[i].getElement());
    }

    let slideNum = -1;
    /*  slideshow.innerHTML = "";
     slideshow.appendChild(Slides[slideNum].getElement());
  */

    let changeSlide = () => {
        slideNum = (slideNum + 1) % Slides.length;


        for (let i = 0; i < Slides.length; i++) {
            if (i !== slideNum) {
                Slides[i].element.style.opacity = 0;
            } else {
                Slides[slideNum].element.style.opacity = 1;
            }
        }

    }
    changeSlide();
    let interval = setInterval(changeSlide, 3000)

    slideshow.onmouseover = function () {
        clearInterval(interval)
    }
    slideshow.onmouseout = function () {
        interval = setInterval(changeSlide, delay);
    }
}