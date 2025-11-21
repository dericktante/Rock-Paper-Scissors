function playGame(){
        
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        switch(humanChoice){
            case "rock":
                switch(computerChoice){
                    case "rock":
                        console.log("Tie!");
                        break;
                    case "paper":
                        console.log("You Lose!");
                        computerScore++;
                        break;
                    case "scissors": 
                        console.log("You Win!");
                        humanScore++;
                        break;
                }
                break;

            case "paper":
                switch(computerChoice){
                    case "rock":
                        console.log("You Win!");
                        humanScore++;
                        break;
                    case "paper":
                        console.log("Tie!");
                        break;
                    case "scissors":
                        console.log("You Lose!");
                        computerScore++;
                        break;
                }
                break;

            case "scissors":
                switch(computerChoice){
                    case "rock":
                        console.log("You Lose!");
                        computerScore++;
                        break;
                    case "paper":
                        console.log("You Win!");
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("Tie!");
                        break;
                }
                break;
        }
        console.log(`score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection,computerSelection);
        }

        if(humanScore > computerScore){
            console.log("You Won the Game");
        }else if(computerScore > humanScore){
            console.log("You Lost! Computer Won the Game");
        }else{
            console.log("It's a tie Game!");
        }

}

playGame();

function getHumanChoice(){
    const humanChoice = prompt("Choose rock, paper, or scissors:");
    console.log(`Your Choice: ${humanChoice}`);
    return humanChoice;
}

function getComputerChoice(){
    const randomNumber = getRandomInt(0,3);
    const choices = ["rock","paper","scissors"];
    console.log(`Computer's Choice: ${choices[randomNumber]}`);
    return choices[randomNumber];
}

function getRandomInt(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}