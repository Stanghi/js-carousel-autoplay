const imagesArray = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
];

let imagesTags = '';

const slider = document.querySelector('.item-wrapper');
const rightSlider = document.querySelector('.right-slider');

for(let i = 0; i < imagesArray.length; i++){
    imagesTags += `
    <img class="item" src="assets/img/${imagesArray[i]}" alt="${imagesArray[i]}">
    `;

}

let counterImages = 0;

const prev = document.querySelector('.up');
const next = document.querySelector('.down');
prev.classList.add('hide');

slider.innerHTML += imagesTags;

const items = document.getElementsByClassName('item');
const itemsBox = document.getElementsByClassName('item-box');

items[counterImages].classList.add('active');

itemsBox[counterImages].classList.add('rmv-opacity');

next.addEventListener('click', function(){
    items[counterImages].classList.remove('active');
    itemsBox[counterImages].classList.remove('rmv-opacity');
    counterImages++;
    itemsBox[counterImages].classList.add('rmv-opacity');
    items[counterImages].classList.add('active');

    prev.classList.remove('hide');
    if(counterImages === imagesArray.length -1){
        next.classList.add('hide');
    }
});

prev.addEventListener('click', function(){
    items[counterImages].classList.remove('active');
    itemsBox[counterImages].classList.remove('rmv-opacity');
    counterImages--;
    itemsBox[counterImages].classList.add('rmv-opacity');
    items[counterImages].classList.add('active');

    next.classList.remove('hide');
    if(counterImages === 0){
        prev.classList.add('hide');
    }
});