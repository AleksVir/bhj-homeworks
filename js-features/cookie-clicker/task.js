const numberClicks = document.getElementById('clicker__counter');
const buttonCookie = document.getElementById('cookie');
let counter = 0;

buttonCookie.addEventListener('click' ,function(){
counter++;
numberClicks.textContent= counter;
if (counter % 2 === 0 ){
numberClicks.textContent= counter;
let currWidth = buttonCookie.clientWidth;
buttonCookie.style.width = (currWidth + 20) + "px";}
else {
numberClicks.textContent= counter;
let currWidth = buttonCookie.clientWidth;
buttonCookie.style.width = (currWidth - 20) + "px";
}
});