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
                    console.log("hi");
                    setTimeout(function() {
                        document.getElementById("player-sprite").classList="playerfaint";
                        gameMessage("YOU WHITED OUT!");
                    }, 3005)
                } else {
                    setTimeout(function() {
                        gameMessage("ENEMY FAINTED, YOU WON!");
                        document.getElementById("enemy-sprite").classList="faint";
                    }, 3000)
                }
        }
 }}

let Charmander = new Pokemon("CHARMANDER", 5 , 5);


let Squirtle = new Pokemon("SQUIRTLE", 10 , 5);

let TailWhip = {
    name : "TAIL WHIP",
    power : 3,
}

let Scratch = {
    name: "SCRATCH",
    power: 4
}

let player = Charmander;
let enemy = Squirtle;

const playerAttack = (attack) =>{
    
    Squirtle.changeHealth(attack.power);
    
    gameMessage(player.name +  " USED" + " " + attack.name + "!") ;

    setTimeout(() => printOnScreen(), 1500);

    
}

const enemyAttack = (attack) =>{
    
    Charmander.changeHealth(attack.power);
    
    gameMessage("SQUIRTLE USED" + " " + attack.name + "!") ;

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
    document.getElementById("game-menu").style = "display: none;";
    document.getElementById("message").style = "display: block;";
    document.getElementById("message").innerHTML = message;   
}

const showMenu = () =>{
    document.getElementById("game-menu").style = "display: flex;";
    document.getElementById("message").style = "display: none;";
}

    
printOnScreen();
