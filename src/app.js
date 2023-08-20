document.addEventListener("DOMContentLoaded",()=>{
    let cardArray = [
        {
            name:"fries",
            img: "src/images/fries.png",
        },
        {
            name:"cheeseburger",
            img: "src/images/cheeseburger.png",
        },
        {
            name:"hotdog",
            img: "src/images/hotdog.png",
        },
        {
            name:"ice-cream",
            img: "src/images/ice-cream.png",
        },
        {
            name:"milkshake",
            img: "src/images/milkshake.png",
        },
        {
            name:"pizza",
            img: "src/images/pizza.png",
        },
        {
            name:"fries",
            img: "src/images/fries.png",
        },
        {
            name:"cheeseburger",
            img: "src/images/cheeseburger.png",
        },
        {
            name:"hotdog",
            img: "src/images/hotdog.png",
        },
        {
            name:"ice-cream",
            img: "src/images/ice-cream.png",
        },
        {
            name:"milkshake",
            img: "src/images/milkshake.png",
        },
        {
            name:"pizza",
            img: "src/images/pizza.png",
        }
    ]
    // Card array sort for ramdomly obtaining array of cardArray objects    
    cardArray.sort(()=>0.5-Math.random());   

    const grid = document.querySelector(".grid");
    let gameResult = document.querySelector("#result");
    let cardChosen = [];
    let cardChosenIds = [];
    let cardsWon = [];
    function createBoard(){
        for(let i = 0;i<cardArray.length;i++){
            let card = document.createElement("img");
            card.setAttribute("src","src/images/blank.png");
            card.setAttribute("data-id",i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }
    function  flipCard(){
        let cardId = this.getAttribute("data-id");
        this.setAttribute("src",cardArray[cardId].img);
        cardChosen.push(cardArray[cardId].name);
        cardChosenIds.push(cardId);   
        if(cardChosen.length == 2){
            setTimeout(checkForMatch, 500);
        }
        console.log(cardChosenIds);
    }
    function checkForMatch(){
        const cards = document.querySelectorAll("img");
        let optionOneId = cardChosenIds[0];
        let optionTwoId = cardChosenIds[1];
        if(optionOneId == optionTwoId){
            alert("You have chosen same image");
            cards[optionOneId].setAttribute("src","src/images/blank.png");
            cards[optionTwoId].setAttribute("src","src/images/blank.png");
        }
        else if(cardChosen[0]===cardChosen[1]){
            alert("You have clicked the same image");
            cards[optionOneId].setAttribute("src","src/images/white.png");
            cards[optionTwoId].setAttribute("src","src/images/white.png");
            cards[optionOneId].removeEventListener("click",flipCard);
            cards[optionTwoId].removeEventListener("click",flipCard);
            cardsWon.push(cardChosen);
        }
        else{
            cards[optionOneId].setAttribute("src","src/images/blank.png");
            cards[optionTwoId].setAttribute("src","src/images/blank.png");
            alert("Choose again there is no match :(");
        }
        cardChosen = [];
        cardChosenIds  = [];
        console.log(cardChosen);
        console.log(cardsWon); 
        gameResult.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            gameResult.textContent = "Congratulations, you won the game :)";
        }
    }

    createBoard();
})