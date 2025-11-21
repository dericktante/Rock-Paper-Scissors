function playGame(){
        
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

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
                    case "lizard":
                        console.log("You Win!");
                        humanScore++;
                        break;
                    case "spock":
                        console.log("You Lose!");
                        computerScore++;
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
                    case "lizard":
                        console.log("You Lose!");
                        computerScore++;
                        break;
                    case "spock":
                        console.log("You Win!");
                        humanScore++;
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
                    case "lizard":
                        console.log("You Win!");
                        humanScore++;
                        break;
                    case "spock":
                        console.log("You Lose!"); 
                        computerScore++;
                        break;
                }
                break;

            case "lizard":
                switch (computerChoice) {
                    case "rock": 
                        console.log("You Lose! Rock crushes Lizard"); 
                        computerScore++; 
                        break;
                    case "paper": 
                        console.log("You Win! Lizard eats Paper"); 
                        humanScore++; 
                        break;                        
                    case "scissors": 
                        console.log("You Lose! Scissors decapitates Lizard"); 
                        computerScore++;   
                        break;
                    case "lizard": 
                        console.log("Tie!"); 
                        break;
                    case "spock": 
                        console.log("You Win! Lizard poisons Spock"); 
                        humanScore++; 
                        break;
                    }
                    break;
        
                case "spock":
                    switch (computerChoice) {
                        case "rock": 
                            console.log("You Win! Spock vaporizes Rock"); 
                            humanScore++; 
                            break;
                        case "paper": 
                            console.log("You Lose! Paper disproves Spock"); 
                            computerScore++; 
                            break;
                        case "scissors": 
                            console.log("You Win! Spock smashes Scissors"); 
                            humanScore++; 
                            break;
                        case "lizard": 
                            console.log("You Lose! Lizard poisons Spock"); 
                            computerScore++; 
                            break;
                        case "spock": 
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
    let humanChoice = prompt("Choose rock, paper, scissors, lizard, or spock:");
    if (humanChoice === null){
        alert("You must choose rock, paper, scissors, lizard, or spock.");
        return getHumanChoice();
    }

    const response = humanChoice.trim().toLowerCase();
    if(response === "" ||
        response !== "rock" &&
        response !== "paper" &&
        response !== "scissors" &&
        response !== "lizard" &&
        response !== "spock"
    ){
        alert("Invalid input! Please enter rock, paper, or scissors, lizard, or spock.");
        return getHumanChoice();
    }
    console.log(`Your Choice: ${response}`);
    return response;
}

function getComputerChoice(){
    const randomNumber = getRandomInt(0,5);
    const choices = ["rock","paper","scissors","lizard","spock"];
    console.log(`Computer's Choice: ${choices[randomNumber]}`);
    return choices[randomNumber];
}

function getRandomInt(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}