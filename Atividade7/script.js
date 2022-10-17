alert("Preparado para jogar?")
jogada = prompt("jogada Pedra, papel ou Tesoura? ").toUpperCase();
if (jogada == "PEDRA"){
    numJogada = 0;
}
if (jogada == "PAPEL"){
    numJogada = 1;
}
if (jogada == "TESOURA"){
    numJogada = 2;
}

alert("Player 1 (Pessoa) escolhe " + jogada)
jogadaMaquina = Math.round((Math.random(0,3)))
if (jogadaMaquina == 0){
    alert("Player 1 (Pessoa): " + jogada + "\nPlayer 2 (Máquina): PEDRA")
}
if (jogadaMaquina == 1){
    alert("Player 1 (Pessoa): " + jogada + "\nPlayer 2 (Máquina): PAPEL")
}
if (jogadaMaquina == 2){
    alert("Player 1 (Pessoa): " + jogada + "\nPlayer 2 (Máquina): TESOURA")
}

if ((jogadaMaquina == 0 && numJogada == 0) || (jogadaMaquina == 1 && numJogada == 1) || (jogadaMaquina == 2 && numJogada ==2)){
    alert("Houve um empate!!!")
    }
if ((jogadaMaquina == 0 && numJogada == 2) || (jogadaMaquina == 2 && numJogada == 0)){
    alert("Pedra quebra Tesoura.")
}
if ((jogadaMaquina == 2 && numJogada == 1) || (jogadaMaquina == 1 && numJogada == 2)){
    alert("Tesoura corta Papel")
}
if ((jogadaMaquina == 1 && numJogada == 0) || (jogadaMaquina == 0 && numJogada == 1)){
    alert("Papel cobre a Pedra")
}

if (jogadaMaquina == 0 && numJogada == 2 || jogadaMaquina == 2 && numJogada == 1 || jogadaMaquina == 1 && numJogada == 0){
    alert("Vitória do Player 2!")
}

if (jogadaMaquina == 2 && numJogada == 0|| jogadaMaquina == 1 && numJogada == 2 || jogadaMaquina == 0 && numJogada == 1){
    alert("Vitória do Player 1!")
}