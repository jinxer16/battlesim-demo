let Charmander = {
    name: "CHARMANDER",
    health: 39,
    level: 5
    }

let Squirtle = {
    name: "SQUIRTLE",
    health: 42,
    level: 5
}    


    const printOnScreen = () => {
       
        document.getElementById("player-name").innerText = Charmander.name;
        document.getElementById("player-hp-current").innerText = Charmander.health;
        document.getElementById("player-hp-max").innerText = Charmander.health;
        document.getElementById("player-level").innerText = "L" + Charmander.level;

        document.getElementById("enemy-name").innerText = Squirtle.name;
        document.getElementById("enemy-hp-current").innerText = Squirtle.health;
        document.getElementById("enemy-hp-max").innerText = Squirtle.health;
        document.getElementById("enemy-level").innerText = "L" + Squirtle.level;

    }

    printOnScreen();