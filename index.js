var randomNumber1= Math.floor(Math.random()*6)+1;
var random_dice= "dice"+randomNumber1+".png";
var random_dice_address="images/"+random_dice;

document.querySelectorAll("img")[0].setAttribute("src",random_dice_address);
var randomNumber2= Math.floor(Math.random()*6)+1;
var random_dice_address2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random_dice_address2);

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML= "Draw!!";
}