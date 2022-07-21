/* slideshow */
var slideImg = document.getElementById ("slideImg");
var images = new Array(
    "images/sampul/GIF/sampul 1.gif",
    "images/sampul/GIF/sampul 2.gif"
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
    i = 0;
}

slideImg.src = images[i];
i++;
setTimeout('slider()', 3000);
}

/* untuk tentang kami */
const productContainers = [...document.querySelectorAll('.kontainer-kelompok')];
const setelah = [...document.querySelectorAll('.setelah')];
const sebelum = [...document.querySelectorAll('.sebelum')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    setelah[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    sebelum[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
