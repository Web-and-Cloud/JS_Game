
const grid = document.querySelector('.grid')
const blockWidth = 100
const blockheight = 20
const ballDiameter = 20
const boardWidth = 560
let timerId
let xDirection = 2
let yDirection = 2


const userStart =[230, 10]
let currentPosition = userStart

const ballStart = [230, 10]
let ballCurrentposition = ballStart

//create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockheight]
        this.topRight = [xAxis + blockWidth, yAxis + blockheight]
    }
}

//all my block
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]


//Draw my block

function addBlocks(){
    
    for (let i = 0; i< blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom =blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)

    }
}

addBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()

grid.appendChild(user)

//draw the user
function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

// draw the ball
function drawBall(){
    ball.style.left = ballCurrentposition[0] + 'px';

    ball.style.right = ballCurrentposition[1] + 'px';
}


//move useer
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            currentPosition[0] -= 10
            drawUser()
            break;
    }
}

document.addEventListener('keydown', moveUser)

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//move ball
function moveBall(){
    ballCurrentposition[0] += xDirection
    ballCurrentposition[1] += yDirection
    drawBall()
}

timerId = setInterval(moveBall, 30)

//check for collisions
function checkForCollision(){
    //check for wall collision
    if (ballCurrentposition[0] >= (boardWidth - ballDiameter)) {
        changeDirection()
    }
}

function changeDirection(){
    if (xDirection === 2 && yDirection == 2) {
        yDirection = -2
        return
    }
    //if ()
}