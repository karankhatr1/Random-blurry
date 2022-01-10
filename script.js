const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const descText = document.querySelector('.desc-text');
const images = ['Puddle.jpg','purple-plant.jpg','old-delhi.jpg','Palam.jpg','dwarka-flyover.jpg'];
const desc =['Solitary Puddle','Voilet Growth','वृद्ध Delhi','नगर Palam','नगर Dwarka'];

let load=0;
let gen =Math.floor(Math.random() * images.length);

let int = setInterval(blurring,30);
let selImg=images[gen];

function blurring(){
    load++;

    if(load>99){
        clearInterval(int);
    }
    loadText.innerText=`${load}%`;
    loadText.style.opacity=scale(load,0,100,1,0);
    descText.innerText=`${desc[gen]}`;
    descText.style.opacity=scale(load,0,100,0,0.7);
    bg.style.backgroundImage=`url('./images/${selImg}')`;
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
    
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  };