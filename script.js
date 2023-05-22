var btt = document.getElementById('back-to-top'),
body = document.body,
docElem = document.documentElement,
offset = 100,
isFirefox = navigator.userAgent.toLowerCase().indexOf('safari') > -1,
scrollPos, docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
offset = docHeight / 4;
}

window.addEventListener('scroll', function (event) {
scrollPos = body.scrollTop || docElem.scrollTop;

btt.className = (scrollPos > offset) ? 'visible' : '';
});

btt.addEventListener('click', function (event) {
event.preventDefault();

if (isFirefox) {
    docElem.scrollTop = 0;
} else {
    body.scrollTop = 0;
}
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}