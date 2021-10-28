const btn = document.getElementById("btn");

const counts = document.getElementById("counts");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const wins1 = document.getElementById("wins1");
const wins2 = document.getElementById("wins2");

const refresh = document.getElementById("refresh");

const textOfPlayer1 = player1.innerText;
const textOfPlayer2 = player2.innerText;

let P2WIN = 0;
let P1WIN = 0;

btn.addEventListener("click", () => {
  let player1health = 0; 
  let player2health = 0; 

  // NUMBER OF SHOOTS BY PLAYER-2 ON PLAYER-1

  for (
    let healthofplayer1 = 0;
    healthofplayer1 <= 100;
    healthofplayer1 = healthofplayer1 + Math.floor(Math.random() * 6)
  ) {
    player1health++;
  }

  // NUMBER OF SHOOT BY PLAYER-1 ON PLAYER-2

  for (
    let healthofplayer2 = 0;
    healthofplayer2 <= 100;
    healthofplayer2 = healthofplayer2 + Math.floor(Math.random() * 6)
  ) {
    player2health++;
  }

  // WHOES NO. OF STEPS TO MAKE OTHER PLAYER DIE ARE LESS??
  console.log(player2health + "stepsof-P2" + player1health + "stepsof-P1");

  // IF PLAYER-2 DEFEATS PLAYER 1

  if (player2health <= player1health) {
    P2WIN = P2WIN + 1;

    wins2.innerHTML = P2WIN;
  } else if (player1health < player2health) {
    //IF PLAYER-1 DEFEATS PLAYER-2
    P1WIN = P1WIN + 1;

    console.log("WINNER IS PLAYER 1");

    wins1.innerHTML = P1WIN;
  } else {
    P1WIN = P1WIN + 1;
    P2WIN = P2WIN + 1;
    wins2.innerHTML = P2WIN;
    wins1.innerHTML = P1WIN;
    console.log("BOTH WON");
  }

  // GAME OVER !!!
  let alertbtn;
  if (P1WIN === 3) {
    wins1.innerHTML = P1WIN;

    let winner1 = "PLAYER 1 IS WINNER !!!";
    player1.append(winner1);
    document.getElementById("btn").disabled = true;
    refresh.append("   REFRESH THE PAGE TO RESTART");
  } else if (P2WIN === 3) {
    wins2.innerHTML = P2WIN;

    let winner = "PLAYER 2 IS WINNER !!!";
    player2.append(winner);

    document.getElementById("btn").disabled = true;
    refresh.append("   REFRESH THE PAGE TO RESTART");
  }
});
