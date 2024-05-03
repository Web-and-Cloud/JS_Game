const cardArray = [
    {
        name:'apple',
        img: 'apple.jpg',
    },
    {
        name:'banana',
        img: 'banana.png',
    },
    {
        name:'bluberry',
        img: 'bluberry.png',
    },
    {
        name:'strawberry',
        img: 'strawberry.jpg',
    },
    {
        name:'kiwi',
        img: 'kiwi.png',
    },
    {
        name:'peach',
        img: 'peach.png',
    },
    {
        name:'apple',
        img: 'apple.jpg',
    },
    {
        name:'banana',
        img: 'banana.png',
    },
    {
        name:'bluberry',
        img: 'bluberry.png',
    },
    {
        name:'strawberry',
        img: 'strawberry.jpg',
    },
    {
        name:'kiwi',
        img: 'kiwi.png',
    },
    {
        name:'peach',
        img: 'peach.png',
    }
]



cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen =[];
let cardChosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img'); // Create an img element and assign it to a variable 'card'
        card.setAttribute('src', 'images/blank.png');
       card.setAttribute('data-id', i);
       card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);

    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0];
    
    const optionTwoId = cardChosenIds[1];
    
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert("You have clicked the same image");
        return;
    }

    if(cardChosen[0] == cardChosen[1]){
        alert('You found a match!')
        cards[cardChosenIds[0]].setAttribute('src','images/white.png');
        cards[cardChosenIds[1]].setAttribute('src','images/white.png');
        cards[cardChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardChosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen);
    } else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('Sorry try again!');
    } 
    
    resultDisplay.textContent = cardsWon.length
    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

function flipCard(){
    
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    

    this.setAttribute('src','images/'+ cardArray[cardId].img);
    if (cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

}