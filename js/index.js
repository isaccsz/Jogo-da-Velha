let player = 1;
let gameboard_x = [5];
let gameboard_o = [4];
let aux_x = 0;
let aux_o = 0;
let total = 0;
let playerOne = 0;
let playerTwo = 0;
let velha = 0;
let winner = [3];

const winningSequences = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

function playerTurn(numID){
    let outplay = document.getElementById(numID).innerHTML;

    if(player==1){
        document.getElementById('showPlayer').innerHTML = 'Jogador: O';
    }else{
        document.getElementById('showPlayer').innerHTML = 'Jogador: X'
    }
    if(player==1 && outplay!='O' && outplay!='X'){
        document.getElementById(numID).innerHTML = 'X';
        player = 2;
        
        switch(numID){
            case 'cell_1':
                document.getElementById('cell_1').style.background = 'blue'
                gameboard_x[aux_x]=1;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_2':
                document.getElementById('cell_2').style.background = 'blue'
                gameboard_x[aux_x]=2;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_3':
                document.getElementById('cell_3').style.background = 'blue'
                gameboard_x[aux_x]=3;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_4':
                document.getElementById('cell_4').style.background = 'blue'
                gameboard_x[aux_x]=4;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_5':
                document.getElementById('cell_5').style.background = 'blue'
                gameboard_x[aux_x]=5;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_6':
                document.getElementById('cell_6').style.background = 'blue'
                gameboard_x[aux_x]=6;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_7':
                document.getElementById('cell_7').style.background = 'blue'
                gameboard_x[aux_x]=7;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_8':
                document.getElementById('cell_8').style.background = 'blue'
                gameboard_x[aux_x]=8;
                aux_x+=1;
                total+=1;
                break;
            case 'cell_9':
                document.getElementById('cell_9').style.background = 'blue'
                gameboard_x[aux_x]=9;
                aux_x+=1;
                total+=1;
                break;
        }

    }else if(outplay !='X' && outplay!='O'){
        document.getElementById(numID).innerHTML = 'O';
        player = 1;

        switch(numID){
            case 'cell_1':
                document.getElementById('cell_1').style.background = 'red'
                gameboard_o[aux_o]=1;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_2':
                document.getElementById('cell_2').style.background = 'red'
                gameboard_o[aux_o]=2;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_3':
                document.getElementById('cell_3').style.background = 'red'
                gameboard_o[aux_o]=3;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_4':
                document.getElementById('cell_4').style.background = 'red'
                gameboard_o[aux_o]=4;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_5':
                document.getElementById('cell_5').style.background = 'red'
                gameboard_o[aux_o]=5;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_6':
                document.getElementById('cell_6').style.background = 'red'
                gameboard_o[aux_o]=6;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_7':
                document.getElementById('cell_7').style.background = 'red'
                gameboard_o[aux_o]=7;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_8':
                document.getElementById('cell_8').style.background = 'red'
                gameboard_o[aux_o]=8;
                aux_o+=1;
                total+=1;
                break;
            case 'cell_9':
                document.getElementById('cell_9').style.background = 'red'
                gameboard_o[aux_o]=9;
                aux_o+=1;
                total+=1;
                break;
    
        }
    }else{
        alert("Posi????o ocupada");
    }

    winTheGame();
}

function winTheGame(){
    let i;
    let j;
    let k;
    let num=0;

    for(i=0;i<8;i++){
        for(j=0;j<3;j++){
            for(k=0;k<5;k++){
                if(num==3){
                    break;
                }else if(winningSequences[i][j]==gameboard_x[k]){
                    num+=1;
                }
            }
            if(num==3){
                break;
            }
        }
        if(num==3){
            playerWon(1);
            break;
        }else{
            num=0;
        }
    }

    if(num!=3){
        for(i=0;i<8;i++){
            for(j=0;j<3;j++){
                for(k=0;k<5;k++){
                    if(num==3){
                        break;
                    }else if(winningSequences[i][j]==gameboard_o[k]){
                        num+=1;
                    }
                }
                if(num==3){
                    break;
                }
            }
            if(num==3){
                playerWon(2);
                break;
            }else{
                num=0;
            }
        }
    }

    if(total==9){
        playerWon(3);
    }
    
}

function playerWon(playerNumber){

    if(playerNumber==1){
        playerOne++;
        document.getElementById('x').innerHTML=playerOne;
        alert("Player 1 ganhou!!!");
        restartGame();
    }else if(playerNumber==2){
        playerTwo+=1;
        document.getElementById('o').innerHTML=playerTwo;
        alert("Player 2 ganhou!!!");
        restartGame();
    }else{
        velha+=1;
        document.getElementById('v').innerHTML=velha;
        alert("Deu Velha!!!");
        restartGame();
    }
}

function restartGame(){
    player = 1;
    document.getElementById('showPlayer').innerHTML='Jogador: X';
    gameboard_x = [0, 0, 0, 0, 0];
    gameboard_o = [0, 0, 0, 0];
    aux_x = 0;
    aux_o = 0;
    total = 0;
    document.getElementById('cell_1').innerHTML = '';
    document.getElementById('cell_2').innerHTML = '';
    document.getElementById('cell_3').innerHTML = '';
    document.getElementById('cell_4').innerHTML = '';
    document.getElementById('cell_5').innerHTML = '';
    document.getElementById('cell_6').innerHTML = '';
    document.getElementById('cell_7').innerHTML = '';
    document.getElementById('cell_8').innerHTML = '';
    document.getElementById('cell_9').innerHTML = '';

    document.getElementById('cell_1').style.background = '';
    document.getElementById('cell_2').style.background = '';
    document.getElementById('cell_3').style.background = '';
    document.getElementById('cell_4').style.background = '';
    document.getElementById('cell_5').style.background = '';
    document.getElementById('cell_6').style.background = '';
    document.getElementById('cell_7').style.background = '';
    document.getElementById('cell_8').style.background = '';
    document.getElementById('cell_9').style.background = '';
}
