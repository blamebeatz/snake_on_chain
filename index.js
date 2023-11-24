const grid = document.querySelector('.grid')
const startGameBtn = document.getElementById('start-btn')
let scoreDisplay = document.getElementById('score')
let score = 0
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10
let intervalTime = 1000
let timerId = 0


function createGrid() {
 
 for (let i = 0 ; i <100 ; i++) {

   const square = document.createElement('div')
   
   square.classList.add('square')
   
   grid.appendChild(square)

   squares.push(square)
 }
}
 
createGrid(); 

currentSnake.forEach(index => squares[index].classList.add('snake'));

function startGame() {

  currentSnake.forEach(index => squares[index].classList.remove('snake'))
  squares[appleIndex].classList.remove('apple')

  clearInterval(timerId)
 currentSnake = [2,1,0]
 score = 0
  scoreDisplay.textContent = score

 direction = 1
 intervalTime = 1000
generateApple()
timerId = setInterval(move , intervalTime)
}

function move() {

   if ( 
    (currentSnake[0] + width >= 100 && direction === 10 ) || 
    (currentSnake[0] % width === 9 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] - width < 0 && direction === -10 ) ||
    squares[currentSnake[0] + direction].classList.contains('snake')
   ) 
   return clearInterval(timerId) ;

   const tail = currentSnake.pop()

   squares[tail].classList.remove('snake')

   currentSnake.unshift(currentSnake[0] + direction ) 

    if (squares[currentSnake[0]].classList.contains('apple')) {

      squares[currentSnake[0]].classList.remove('apple')

      currentSnake.push(tail)

       generateApple();
         
       score++ 
       scoreDisplay.textContent = score 
       
       clearInterval()
      intervalTime = intervalTime * 0.9
      timerId = setInterval(move , intervalTime)
 
    }



   squares[currentSnake[0]].classList.add('snake')
}





function generateApple() {
  do {

    appleIndex = Math.floor(Math.random() * squares.length)

  } while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
} 

generateApple();





function control(e) {
  if (e.keyCode === 39) {
    console.log ('right keyCode Pressed')
    direction = 1 } 
  else if (e.keyCode === 37) {
    console.log('left keyCode pressed')
    direction = -1
  } else if (e.keyCode === 38) {
    console.log('Up keyCode Pressed')
    direction = -width }
     else if (e.keyCode === 40) {
    console.log('Down keyCode Pressed')
    direction = +width
  }
}

document.addEventListener('keyup' , control);  
startGameBtn.addEventListener('click' , startGame) ;


const alertBox = document.querySelector('.warning-msg')

setTimeout(() => alertBox.remove() , 5000)

const alertBox2 = document.querySelector('.warning-msg2')

setTimeout(() => alertBox2.remove() , 5000)