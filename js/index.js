let player = 1;

function playerTurn(numID){
    if(player==1){
        document.getElementById(numID).innerHTML = 'X';
        player = 2;
    }else{
        document.getElementById(numID).innerHTML = 'O';
        player = 1;
    }
}