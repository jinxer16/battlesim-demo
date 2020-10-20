
const checkItems = () =>{
    let z = document.getElementById("items-content")
  
      for(let x of player.items){
         z.appendChild(document.createTextNode(x.name))
      }
      return z;
  }

  function attackInitialize(){
    let lol =  document.getElementById("fight-menu");
      for(let x of player.activePokemon.attacks){
        let attackElement = document.createElement('li');
        attackElement.innerText = x.name;
        attackElement.id = x.id;
        lol.appendChild(attackElement);
        attackElement.addEventListener('click', function() {attackTour(x)});
      }
      
      
    }

    function pkmnInitialize(){
        let lol = document.getElementById("pkmn-menu");
        for(let x of player.pokemons){
            let Pokemon = document.createElement("li");
            Pokemon.innerText = x.name;
            lol.appendChild(Pokemon);
            Pokemon.addEventListener('click', function() {pokemonChange(x)});
        }
    }
  

class Pokemon {
    constructor(name, health, level, sprite, attacks){
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.level = level;
        this.sprite = sprite;
        this.attacks = attacks;
    }
    
        changeHealth(amount){
            if (player.activePokemon === this) {
                setTimeout(function() {
                    document.getElementById("player-sprite").classList="flicker";
                }, 1200);
                setTimeout(function() {
                    document.getElementById("player-sprite").classList="";
                }, 1300);
            } else {
                setTimeout(function() {
                    document.getElementById("enemy-sprite").classList="flicker";
                }, 1200);
                setTimeout(function() {
                    document.getElementById("enemy-sprite").classList="";
                }, 1300);
            }
            if (this.health - amount > 0) {
                this.health -= amount;
            } else {
                this.health = 0;
                if (player.activePokemon === this) {
                    setTimeout(function() {
                        document.getElementById("player-sprite").classList="playerfaint";
                        gameMessage("YOU WHITED OUT!");
                    }, 3002)
                } else {
                    setTimeout(function() {
                        playSoundEffect("sound/Victory.mp3");
                    }, 1700)
                    setTimeout(function() {
                        pauseSoundtrack();
                        gameMessage("ENEMY FAINTED, YOU WON!");
                        document.getElementById("enemy-sprite").classList="faint";
                    }, 3005)
                }

        }
 }}



 class Attack{
    constructor(name, power, sound, id){
    this.name = name;
    this.power = power;
    this.sound = sound;
    this.id = id;
    
    }
}

class HealingItem{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
        action() {
            if(player.activePokemon.health === player.activePokemon.maxHealth){
                gameMessage("YOUR HEALTH IS FULL!")
                document.getElementById("items-menu").style="display: none;";
                setTimeout(() => showMenu(), 3000)
            }
            else if(player.activePokemon.health + this.value >= player.activePokemon.maxHealth){
                let a = player.activePokemon.maxHealth - player.activePokemon.health;
                let b = player.items.indexOf(this)
                let c = document.getElementById("items-content")
                player.activePokemon.health = player.activePokemon.maxHealth;
                
                gameMessage("YOU ARE GETTING HEALED BY " + a + "HP")
                document.getElementById("items-menu").style="display: none;";
                c.remove();
                player.items.splice(b, 1);
                checkItems();
                
                setTimeout(() => printOnScreen(), 1500)
                setTimeout(() => showMenu(), 3000)
            }
            else if(player.activePokemon.health + this.value < player.activePokemon.maxHealth){
                player.activePokemon.health = player.activePokemon.health + this.value;
                let b = player.items.indexOf(this)
                let c = document.getElementById("items-content")

                gameMessage("YOU ARE GETTING HEALED BY " + this.value + "HP")
                document.getElementById("items-menu").style="display: none;";
                c.remove();
                player.items.splice(b, 1);
                checkItems();


                setTimeout(() => printOnScreen(), 1500)
                setTimeout(() => showMenu(), 3000)
            }

        }
    }

    let berry = new HealingItem("BERRY", 5)


let TailWhip = new Attack("TAIL WHIP", 3 , "sound/Tackle.mp3", "tail-whip");

let Scratch = new Attack("SCRATCH", 4 , "sound/Scratch.mp3", "scratch");

let Charmander = new Pokemon("CHARMANDER", 10 , 5 , "images/charmander.png", [TailWhip, Scratch]);

let Squirtle = new Pokemon("SQUIRTLE", 30 , 5, "images/squirtle-removebg-preview.png", [TailWhip, Scratch]);

let Bulbasaur = new Pokemon("BULBASAUR", 40, 5, "images/bulbasaur.png", [TailWhip, Scratch]);


let player = {

    activePokemon : Charmander,
    items: [berry],
    pokemons: [Charmander, Bulbasaur]

}

let enemy = Squirtle;

const playerAttack = (Attack) =>{
    
    Squirtle.changeHealth(Attack.power);
    
    gameMessage(player.activePokemon.name +  " USED" + " " + Attack.name + "!") ;

    setTimeout(() => playSoundEffect(Attack.sound) , 1300);

    setTimeout(() => printOnScreen(), 1500);

    
}

const enemyAttack = (Attack) =>{
    
    player.activePokemon.changeHealth(Attack.power);
    
    gameMessage("SQUIRTLE USED" + " " + Attack.name + "!") ;

    setTimeout(() => playSoundEffect(Attack.sound) , 1300);

    setTimeout(() => printOnScreen(), 1500);

    setTimeout(() => showMenu(), 3000);
}


const attackTour = (a) =>{

    playerAttack(a);
    document.getElementById("fight-menu").style="display: none;";
    if (enemy.health > 0) {
            setTimeout(()=> enemyAttack(TailWhip), 3000);
    }
}

function pokemonChange(pokemonToChange){
    if(player.activePokemon === pokemonToChange){
        closePkmn();
        gameMessage("You are already using " + pokemonToChange.name + " !")
        setTimeout(() => showMenu(), 3000)
    }
     else{
         player.activePokemon = pokemonToChange;
         closePkmn();
         gameMessage("You are choosing " + pokemonToChange.name + " !");
         setTimeout(() => printOnScreen(), 1500)
         setTimeout(() => showMenu(), 3000)
     }
    }


const printOnScreen = () => {
    
    
    
    document.getElementById("player-name").innerText = player.activePokemon.name;
    document.getElementById("player-hp-current").innerText = player.activePokemon.health;
    document.getElementById("player-hp-max").innerText = player.activePokemon.maxHealth;
    document.getElementById("player-level").innerText = player.activePokemon.level;
    document.getElementById("player-sprite-id").src = player.activePokemon.sprite;
    

    document.getElementById("enemy-name").innerText = Squirtle.name;
    document.getElementById("enemy-hp-current").innerText = Squirtle.health;
    document.getElementById("enemy-hp-max").innerText = Squirtle.maxHealth;
    document.getElementById("enemy-level").innerText = Squirtle.level;
    document.getElementById("enemy-sprite-id").src = enemy.sprite;
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

const playSoundEffect = (dir) => {
    
    let audio = new Audio(dir);
    audio.volume = 0.1
    audio.play();
}

const pauseSoundtrack = () =>{
    soundtrack.pause() === true;
}


const showMenu = () =>{
    document.getElementById("game-menu").style = "display: flex;";
    document.getElementById("message").style = "display: none;";
}

const runningAway = () => {
    gameMessage("YOU CAN'T RUN AWAY RIGHT NOW!");
    setTimeout(() => showMenu() , 3000)
}
function fight() {
    
    gameMessage("");
    document.getElementById("fight-menu").style="display: block;";
}
function closeFight() {
    showMenu();
    document.getElementById("fight-menu").style="display: none;";
}

function pkmn() {
    
    gameMessage("");
    document.getElementById("pkmn-menu").style="display: block;";
}
function closePkmn() {
    showMenu();
    document.getElementById("pkmn-menu").style="display: none;";
}

function items() {
    gameMessage("");
    document.getElementById("items-menu").style="display: block;";
}
function closeItems() {
    showMenu();
    document.getElementById("items-menu").style="display: none;";
}

function start() {
    document.getElementById("overlay").style="display: none;";
    soundtrack.volume = 0.05;
    soundtrack.play();

    document.getElementById("enemy-sprite").classList="battleStart";
    gameMessage("");
    setTimeout(function() {
        gameMessage("A wild SQUIRTLE appeared!");   
        
    }, 1300);
    setTimeout(function() {
        document.getElementById("enemy-info").style="visibility: visible;";
    }, 3600);
    setTimeout(function() {
        showMenu();   
    }, 3600);

    
    



checkItems();
printOnScreen();
attackInitialize();
pkmnInitialize();
}