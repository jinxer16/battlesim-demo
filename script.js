let Charmander = {
    name: "CHARMANDER",
    health: 39,
    maxHealth: 39,
    level: 5,
    
    }

let Squirtle = {
    name: "SQUIRTLE",
    health: 7,
    maxHealth: 7,
    level: 5,
}

let TailWhip = {
    name : "TAIL WHIP",
    power : 3,
}

let Scratch = {
    name: "SCRATCH",
    power: 4
}
    
const playerAttack = (attack) =>{
    
    Squirtle.health = Squirtle.health - attack.power;
    
    gameMessage("CHARMANDER USED" + " " + attack.name + "!") ;

    setTimeout(() => printOnScreen(), 1500);

    
}

const enemyAttack = (attack) =>{
    
    Charmander.health = Charmander.health - attack.power;
    
    gameMessage("SQUIRTLE USED" + " " + attack.name + "!") ;

    setTimeout(() => printOnScreen(), 1500);

    setTimeout(() => showMenu(), 3000);
}


const attackTour = () =>{

    playerAttack(Scratch);
    setTimeout(()=> enemyAttack(TailWhip), 3000)
}



    /*changeHealth: function(amount) {
        if (this.health + amount > 0) {
            this.health += amount;
            printOnScreen()
            setTimeout(()=> gameMessage("SQUIRTLE used TAIL WHIP!"), 3000)
            setTimeout(()=>{
            Charmander.health = Charmander.health -3
            printOnScreen();}, 4500)
            setTimeout(()=> showMenu(), 6000)
        } else {
            this.health = 0;
            setTimeout(function() {
                gameMessage("ENEMY FAINTED, YOU WON!")
                document.getElementById("enemy-sprite").classList="faint";
            }, 3000)
        }
        

    }
}    



//const attack = () => {
    
    
   
       // gameMessage("CHARMANDER used SCRATCH!");
        
       // setTimeout(()=>{
        // Squirtle.health = Squirtle.health -4
       // Squirtle.changeHealth(-4);
       // printOnScreen();}, 1500)
        /*
        if(Squirtle.health -4 > 0) //So that 4 is fixed value now, but i dont really know how to code it
        {
        setTimeout(()=> gameMessage("SQUIRTLE used TAIL WHIP!"), 3000)
        setTimeout(()=>{
            Charmander.health = Charmander.health -3
            printOnScreen();}, 4500)
        setTimeout(()=> showMenu(), 6000)}
        else{
            setTimeout(()=> gameMessage("ENEMY FAINTED, YOU WON!"), 3000)
        }*/
            
        
    
    



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
