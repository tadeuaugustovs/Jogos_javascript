//Código dos Obstáculos

//listas
let xObstaculos = [600, 600, 600, 600, 600, 600];
let yObstaculos = [41, 96, 266, 142, 213, 318];
let velocidadeObstaculos = [6, 3.8, 3.7, 1.5, 3.5, 2.5];
let comprimentoObstaculos = 50
let alturaObstaculos = 35


function mostraObstaculo(){
  for (let i = 0; i < imagemObstaculos.length; i++){
    image(imagemObstaculos [i], xObstaculos [i], yObstaculos[i], comprimentoObstaculos, alturaObstaculos);
  }

}

function movimentaObstaculo(){
  for (let i = 0; i < imagemObstaculos.length; i++) 
  xObstaculos[i] -= velocidadeObstaculos[i];
}

function voltaPosicaoInicialDoObstaculo(){
  for (let i = 0; i < imagemObstaculos.length; i++){
    if (passouTodaATela(xObstaculos[i])) {
    xObstaculos [i] = 600;
   }
  }
}

function passouTodaATela(xObstaculos){
  return xObstaculos < - 50;
}