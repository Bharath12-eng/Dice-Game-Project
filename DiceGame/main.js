const randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

const diceimage = `dice${randomNumber1}.png`;
console.log(diceimage);

const Player1 = `images/${diceimage}`;
console.log(Player1)

const image1 = document.querySelector('.img1');

image1.setAttribute("src",Player1)




const randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2)

const diceImage2 = `dice${randomNumber2}.png`
console.log(diceImage2);

const Player2 = `images/${diceImage2}`
console.log(Player2);

const image2 = document.querySelector(".img2");

image2.setAttribute("src",Player2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="player1 win";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="player 2 win";
}else{
  document.querySelector("h1").innerHTML="Draw";
}



