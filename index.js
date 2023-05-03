var randomNumber1=Math.round(Math.random()*6)+1;
var randomimage1='images/dice'+randomNumber1+'.png';
var randomNumber2=Math.round(Math.random()*6)+1;
var randomimage2='images/dice'+randomNumber2+'.png';
document.querySelector('.img1').setAttribute('src',randomimage1);
document.querySelector('.img2').setAttribute('src',randomimage2);
if(randomNumber1==randomNumber2)
document.querySelector('h1').innerHTML='There is a draw!  ';
else if(randomNumber1<randomNumber2)
document.querySelector('h1').innerHTML='Player 2 Wins!! ';
else
document.querySelector('h1').innerHTML='Player 1 Wins!! ';

