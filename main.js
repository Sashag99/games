
// Get the link to the element with id 'commandInput'
var commandInput = document.getElementById('commandInput');
var game = document.getElementById('game');
var Nik = prompt('Choose a name for himself ');
var x = 0;
var y = 0;
var gold = 0;
// Execute function on any key press 
commandInput.addEventListener('keydown', function (e) {
    // if user pressed enter
    if (e.keyCode == 13) { 
        // get the value from input
        var command = commandInput.value;
        // empty the input
        commandInput.value = '';
        // call our command handler
        proccessCommand(command);
    }
});
function proccessCommand(command) {
    // write to game area our command
    game.innerHTML += ">> "+ command + "<br>";

    // proccess command
    switch (command) {
        case 'north':
            game.innerHTML += Nik + " is going to north <br> Your position" +"("+x+";"+y+") <br>";
            y += 1;
            gold += 3;
            break;
        case 'south':
            game.innerHTML += Nik + " is going to south <br> Your position" +"("+x+";"+y+") <br>";
            y += -1;
            gold += 3;
            break;
        case 'west':
            game.innerHTML += Nik + " is going to west <br> Your position" +"("+x+";"+y+") <br>";
            x += -1;
            gold += 3;
            break;
        case 'east':
            game.innerHTML += Nik + " is going to east <br> Your position" +"("+x+";"+y+") <br>";
            x += 1;
            gold += 3;
            break;
        case 'hello':
            game.innerHTML += "Hello! " + Nik +"<br> You have already returned <br> Your position" +"("+x+";"+y+") <br>";
            break;
        default:
            game.innerHTML += "Unknown command <br>";
            break;
        case "position":
            game.innerHTML +=  Nik +" <br> Your position" + "(" +x + ";" + y + ")" + "<br>" ;
            break;
        case "gold":
            game.innerHTML +=" The amount of gold in your pockets : "  + gold + "<br>";
    }
    
    if(x == 5, y == -3){
    alert("Congratulate you krasava!)");
    }
}
