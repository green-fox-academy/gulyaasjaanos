let imageIndex = 0;

function fillImage(index) {
    mainimg.src = imageBarElements[index].src;
    mainimg.alt = imageBarElements[index].alt;
    let h3 = document.querySelector(".mainimg header h3");
    h3.innerHTML = imageBarElements[index].alt;
    let p = document.querySelector(".mainimg header p");
    p.innerHTML = imageBarElements[index].getAttribute("data-pic");

    imageBarElements.forEach( e => {
        e.classList.remove("selected");
        e.parentNode.classList.remove("selected");
        e.parentNode.classList.add("unselected");
    });
    imageBarElements[index].classList.add("selected");
    imageBarElements[index].parentNode.classList.add("selected");
    imageBarElements[index].parentNode.classList.remove("unselected");
}

const imageBarElements = document.querySelectorAll(".imgbar img");
const maxIndex = imageBarElements.length - 1;
fillImage(imageIndex);

imageBarElements.forEach(e => {
    e.addEventListener("click", f => {
        imageIndex = e.getAttribute("data-num");
        fillImage(imageIndex);
    });
});


const navElementLeft = document.querySelector(".left");
navElementLeft.addEventListener("click", f => {
    imageIndex--;
    imageIndex = (imageIndex < 0)? maxIndex : imageIndex;
    fillImage(imageIndex);
});

const navElementRight = document.querySelector(".right");
navElementRight.addEventListener("click", f => {
    imageIndex++;
    imageIndex = (imageIndex > maxIndex)? 0 : imageIndex;
    fillImage(imageIndex);
});
