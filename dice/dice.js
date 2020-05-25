
document.getElementById('play').addEventListener('click',function(){
 sound();
 setTimeout(() => {
   game();
   
 }, 500);
    
})
function sound(){
  var audio = new Audio("/Game-show-winner-bell-sound-effect.mp3");
  audio.play();
}

function sound1(){
  var audio = new Audio("/large-firecracker-explosion-sound-effect.mp3");
  audio.play();
  
}

function sound2(){
  var audio = new Audio("/Positive-game-notification.mp3");
  audio.play();
  
}

function game() {
  //changes the dice of player 1
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var imagesrc = `/dice${dice1}.png`;
  var image1 = document.querySelectorAll('img')[0];
  image1.setAttribute("src", imagesrc);

  //changes the dice of player 2
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var imagesrc = `/dice${dice2}.png`;
  var image2 = document.querySelectorAll('img')[1];
  image2.setAttribute("src", imagesrc);

  //changes the dice of player 3
  var dice3 = Math.floor(Math.random() * 6) + 1
  var imagesrc = `/dice${dice3}.png`;;
  var image3 = document.querySelectorAll('img')[2];
  image3.setAttribute("src", imagesrc);


  //result section

  if (dice1 > dice2) {
    if (dice1 > dice3) {
      setTimeout(() => {
        document.getElementById('result').innerHTML = "Player 1 Won"
       
        sound1()
        
      }, 400);

    } else if (dice3 > dice1) {
      setTimeout(() => {
        document.getElementById('result').innerHTML = "Player 3 won"
        sound1()
      }, 400);
    } else {
      setTimeout(() => {
        document.getElementById('result').innerText = "Draw between palyer 1 and 3"
        sound2();
      }, 400);
    }
  } else if (dice2 > dice1) {
    if (dice2 > dice3) {
      setTimeout(() => {
        document.getElementById('result').innerHTML = "Player 2 Won"
        sound1()
      }, 400);
    } else if (dice3 > dice2) {
      setTimeout(() => {
        document.getElementById('result').innerHTML = "Player 3 Won"
        sound1()
      }, 400);
    } else {
      setTimeout(() => {
        document.getElementById('result').innerText = "Draw Between 2 and 3"
        sound2();
      }, 400);
    }
  } else {
    if (dice3 > dice2) {
      if (dice3 > dice1) {
        setTimeout(() => {
          document.getElementById('result').innerHTML = "Player 3 Won"
          sound1()
        }, 400);
      }

    } else if (dice1 == dice2 && dice2 == dice3 && dice1 == dice3) {
      setTimeout(() => {
        document.getElementById('result').innerText = "Draw!"
        sound2();
      }, 400);
    } else {
      setTimeout(() => {
        
        document.getElementById('result').innerText = "Draw Between 1 and 2"
        sound2();
      }, 400);
    }
  }
}