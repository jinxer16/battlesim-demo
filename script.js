let Charmander = {
    name: "CHARMANDER",
    health: 39,
    maxHealth: 39,
    level: 5
    }

let Squirtle = {
    name: "SQUIRTLE",
    health: 42,
    maxHealth: 42,
    level: 5
}    



const attack = () => {
    
    
   
        gameMessage("CHARMANDER used SCRATCH!");
        
        setTimeout(()=>{
        Squirtle.health = Squirtle.health -4
        printOnScreen();}, 1500)

        setTimeout(()=> gameMessage("SQUIRTLE used TAIL WHIP!"), 3000)
        setTimeout(()=>{
            Charmander.health = Charmander.health -3
            printOnScreen();}, 4500)
        setTimeout(()=> showMenu(), 6000)
            
        
    
    
}


const printOnScreen = () => {
    
    document.getElementById("player-name").innerText = Charmander.name;
    document.getElementById("player-hp-current").innerText = Charmander.health;
    document.getElementById("player-hp-max").innerText = Charmander.maxHealth;
    document.getElementById("player-level").innerText = "L" + Charmander.level;

    document.getElementById("enemy-name").innerText = Squirtle.name;
    document.getElementById("enemy-hp-current").innerText = Squirtle.health;
    document.getElementById("enemy-hp-max").innerText = Squirtle.maxHealth;
    document.getElementById("enemy-level").innerText = "L" + Squirtle.level;

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
//gameMessage("CHARMANDER used SCRATCH!");