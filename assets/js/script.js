const imagesArray = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg'
];

let imagesTags = '';
let sliderMooving = 0;
let autoPlay;

const slider = document.querySelector('.item-wrapper');
const rightSlider = document.querySelector('.right-slider');
const container = document.querySelector('.container');

for(let i = 0; i < imagesArray.length; i++){
    imagesTags += `
    <img class="item" src="assets/img/${imagesArray[i]}" alt="${imagesArray[i]}">
    `;
}

let counterImages = 0;
const numImages = 5;

const prev = document.querySelector('.up');
const next = document.querySelector('.down');

slider.innerHTML += imagesTags;

const items = document.getElementsByClassName('item');
const itemsBox = document.getElementsByClassName('item-box');

items[counterImages].classList.add('active');
itemsBox[counterImages].classList.add('rmv-opacity');

autoCarousel();

prev.addEventListener('click',function(){
    nextPrev(true);
})

next.addEventListener('click',function(){
    nextPrev(false);
})

function nextPrev(isNext){
    items[counterImages].classList.remove('active');
    itemsBox[counterImages].classList.remove('rmv-opacity');
    
    if(isNext){
      counterImages--;
      if(counterImages < 0) counterImages = numImages - 1;
    }else{
      counterImages++;
      if(counterImages === numImages) counterImages = 0;
    }
    
    items[counterImages].classList.add('active');
    itemsBox[counterImages].classList.add('rmv-opacity');
}

function autoCarousel(){
    autoPlay = setInterval(nextPrev, 1000);
}

container.addEventListener('mouseover', function(){
    clearInterval(autoPlay);
});

container.addEventListener('mouseout', autoCarousel);