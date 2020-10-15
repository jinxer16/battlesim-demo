class Pokemon {
    constructor(name, health, level){
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.level = level;}
    
        changeHealth(amount){
            if (this.health - amount > 0) {
                this.health -= amount;
            } else {
                this.health = 0;
                if (player === this) {
                    setTimeout(function() {
                        document.getElementById("player-sprite").classList="playerfaint";
                        gameMessage("YOU WHITED OUT!");
                    }, 3001)
                } else {
                    setTimeout(function() {
                        gameMessage("ENEMY FAINTED, YOU WON!");
                        document.getElementById("enemy-sprite").classList="faint";
                    }, 3005)
                }
        }
 }}

 class Attack{
    constructor(name, power){
    this.name = name;
    this.power = power;
    
    }
}

let TailWhip = new Attack("TAIL WHIP", 3);

let Scratch = new Attack("SCRATCH", 4 );

let Charmander = new Pokemon("CHARMANDER", 10 , 5);

let Squirtle = new Pokemon("SQUIRTLE", 20 , 5);

let player = Charmander;

let enemy = Squirtle;

const playerAttack = (Attack) =>{
    
    Squirtle.changeHealth(Attack.power);
    
    gameMessage(player.name +  " USED" + " " + Attack.name + "!") ;

    setTimeout(() => printOnScreen(), 1500);

    
}

const enemyAttack = (Attack) =>{
    
    Charmander.changeHealth(Attack.power);
    
    gameMessage("SQUIRTLE USED" + " " + Attack.name + "!") ;

    setTimeout(() => printOnScreen(), 1500);

    setTimeout(() => showMenu(), 3000);
}


const attackTour = () =>{

    playerAttack(Scratch);
    if (Squirtle.health > 0) {
            setTimeout(()=> enemyAttack(TailWhip), 3000);
    }
}


const printOnScreen = () => {
    
    document.getElementById("player-name").innerText = Charmander.name;
    document.getElementById("player-hp-current").innerText = Charmander.health;
    document.getElementById("player-hp-max").innerText = Charmander.maxHealth;
    document.getElementById("player-level").innerText = Charmander.level;
   // document.getElementById("player-sprite").setAttribute = Charmander.sprite;//
    

    document.getElementById("enemy-name").innerText = Squirtle.name;
    document.getElementById("enemy-hp-current").innerText = Squirtle.health;
    document.getElementById("enemy-hp-max").innerText = Squirtle.maxHealth;
    document.getElementById("enemy-level").innerText = Squirtle.level;

}

function gameMessage(message) {
    let messageArray = message.split("");
    let arr = [];
    document.getElementById("game-menu").style = "display: none;";
    document.getElementById("message").style = "display: block;";
    document.getElementById("message").innerHTML = "";
    let temp = "";
    function letterByLetter(array) {
        if (arr.length != message.length) {
            temp = array.shift();
            arr.push(temp);
            window.setTimeout(function() {
                document.getElementById("message").innerHTML = arr.join("");
                letterByLetter(messageArray);
            }, 40)
        }
    }
    letterByLetter(messageArray);
     
}

const soundtrack = new Audio("sound/soundtrack.mp3")

const showMenu = () =>{
    document.getElementById("game-menu").style = "display: flex;";
    document.getElementById("message").style = "display: none;";
}

const runningAway = () => {
    gameMessage("YOU CAN'T RUN AWAY RIGHT NOW!");
    setTimeout(() => showMenu() , 3000)
}

function start() {
    document.getElementById("overlay").style="display: none;";
    soundtrack.volume = 0.05;
    soundtrack.play();
}
    
printOnScreen();
