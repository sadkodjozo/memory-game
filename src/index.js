document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())

    console.log(cardArray);
    
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    
    let cardsWon = []

    
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
      }
      
    }
  
   

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        console.log(cardId);
        console.log(cardArray[cardId].name);
        if(cardsChosen.length ===2){
          setTimeout(checkForMatch,500)
        }
    }

    function checkForMatch(){
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]

      if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
        alert('You clicked the same card')

      } else if(cardsChosen[0] === cardsChosen[1]){
        alert('You find a match') 
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard) 
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
      }
      
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.innerText = cardsWon.length
      if(cardsWon.length === cardArray.length/2){
        resultDisplay.innerText = 'Congratulations! You have won!'
      }

    }
  
    createBoard()
  })