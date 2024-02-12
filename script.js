const cardArray=[
    {
        name: 'burger',
        img: 'burger.jpg',
    },
    {
        name: 'bread',
        img: 'bread.jpg',
    },
    {
        name: 'chicken',
        img: 'chicken.jpg',
    },
    {
        name: 'dog',
        img: 'dog.jpg',
    },
    {
        name: 'astronaut',
        img: 'astronaut.jpg',
    },
    {
        name: 'girl',
        img: 'girl.jpg',
    },
    {
        name: 'burger',
        img: 'burger.jpg',
    },
    {
        name: 'bread',
        img: 'bread.jpg',
    },
    {
        name: 'chicken',
        img: 'chicken.jpg',
    },
    {
        name: 'dog',
        img: 'dog.jpg',
    },
    {
        name: 'astronaut',
        img: 'astronaut.jpg',
    },
    {
        name: 'girl',
        img: 'girl.jpg',
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay= document.querySelector('#grid')
const resultDisplay= document.querySelector('#result')
let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]

function createBoard(){
    for(let i=0; i<cardArray.length ;i++){
        const card=document.createElement('img')
        card.setAttribute('src','blank.png')
        card.setAttribute('data-id', i)
        card.style.width = '100px'; // Set the width of the image
        card.style.height = '100px';
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards= document.querySelectorAll('#grid img')
    if(cardsChosenIds[0]==cardsChosenIds[1]){
        cards[cardsChosenIds[0]].setAttribute('src', 'blank.png')
        alert('you have clicked the same image')
    }
    

    else if(cardsChosen[0]== cardsChosen[1]){
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    

else{
    cards[cardsChosenIds[0]].setAttribute('src', 'blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'blank.png')
}
resultDisplay.textContent= cardsWon.length
cardsChosen=[]
    cardsChosenIds=[]
if(cardsWon.length== cardArray.length/2){
resultDisplay.textContent='congratulations, you\'ve found them all!'
}
}

function flipCard(){
    let cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkMatch, 500)
    }
}   