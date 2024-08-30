let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses:0,
  ties: 0
};

updateScoreElement();

/*if(score===null){
score = {
  wins: 0,
  loses:0,
  ties: 0
};
}*/


function playGame(playerMove){
const computerMove= pickComputerMove();
let result = '';

if (playerMove==='Rock'){
    if(computerMove==='Rock'){
      result = 'Tie';
    } else if (computerMove==='Paper'){
      result = 'You are lose';
    } else if (computerMove==='Scissor'){
      result = 'You win';
    }

} else if(playerMove==='Paper'){
    if(computerMove ==='Paper'){
      result = 'Tie';
    } else if (computerMove ==='Scissor'){
      result = 'You are lose';
    } else if (computerMove ==='Rock'){
      result = 'You win';
    }

} else {
    if(computerMove ==='Scissor'){
      result = 'Tie';
    } else if (computerMove ==='Rock'){
      result = 'You are lose';
    } else if (computerMove ==='Paper'){
      result = 'You win';
    }

}

if(result==='You win'){
  score.wins +=  1;
}else if (result==='You are lose'){
  score.loses +=  1;
}else if (result==='Tie'){
  score.ties +=  1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();


document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML = `You
<img src ="images/${playerMove}.png" class ="move-icon">
<img src = "images/${computerMove}.png" class ="move-icon">
Computer`;

}

function updateScoreElement(){
document.querySelector('.js-score')
  .innerHTML= `Wins:${score.wins}, Loses:${score.loses}, Ties:${score.ties}`;
}

function pickComputerMove(){
const random_number = Math.random();
let computerMove = '';

if (random_number >= 0 && random_number < 1/3){
  computerMove = 'Rock';
} else if (random_number >= 1/3 && random_number <2/3){
  computerMove = 'Paper';
}else if(random_number >= 2/3 && random_number < 1){
  computerMove = 'Scissor';
}

return computerMove ;


}