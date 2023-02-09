//Código dos Obstáculos

//listas
let xObstaculos = [600, 600, 600, 600, 600, 600];
let yObstaculos = [41, 96, 266, 142, 213, 318];
let velocidadeObstaculos = [6, 4, 3.5, 1.5, 2.5, 1.3];
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