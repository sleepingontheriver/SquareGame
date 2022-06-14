const character = document.getElementById("character")
const goal = document.getElementById("goal")
const text = document.getElementById("text")


let PlayerSquare  = new Object

PlayerSquare.x = 0
PlayerSquare.y = 0
PlayerSquare.dx = 0
PlayerSquare.dy = 0
PlayerSquare.ddx = 0
PlayerSquare.ddy = 0

function Update_Pos(x, y){
    PlayerSquare.x = PlayerSquare.x + x
    PlayerSquare.y = PlayerSquare.y + y
}

function Draw_Player(){
    Update_Pos(PlayerSquare.dx, PlayerSquare.dy)
    character.style.top = PlayerSquare.y + "px"
    character.style.left = PlayerSquare.x + "px"
};

function Update_Size(height, width){
    character.style.height = height + "px"
    character.style.width = width + "px"
};

character.addEventListener("click", () => {
    console.log("Button clicked");
    Update_Pos(Math.random() * 100, Math.random() * 100)
});

addEventListener('keydown', ({key}) => {
    switch (key){
        case 'a':
            console.log("left")
            PlayerSquare.dx = -2.8
            PlayerSquare.dy = 0
            break
        case 'd':
            console.log("right")
            PlayerSquare.dx = 2.8
            PlayerSquare.dy = 0
            break
        case 'w':
            console.log("up")
            PlayerSquare.dy = -2.8
            PlayerSquare.dx = 0
            break
        case 's':
            console.log("down")
            PlayerSquare.dy = 2.8
            PlayerSquare.dx = 0
            break
            
        
    }
})





function update(progress) {
    // Update the state of the world for the elapsed time since last render
  }
  
function draw() {
    Draw_Player()
}

function checkWon(){
    if(PlayerSquare.x > 370 && PlayerSquare.x < 430 && PlayerSquare.y > 370 && PlayerSquare.x < 430){
        console.log("You reached the goal!")
        text.innerHTML = "You win!"
    }
}

function loop(timestamp) {
    var progress = timestamp - lastRender
  
    update(progress)
    draw()
    checkWon()
    lastRender = timestamp
    window.requestAnimationFrame(loop)
}
  var lastRender = 0
  window.requestAnimationFrame(loop)
  