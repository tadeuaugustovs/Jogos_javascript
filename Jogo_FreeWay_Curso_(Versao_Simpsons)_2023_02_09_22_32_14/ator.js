//ator
yAtor = 368;
xAtor = 85;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image (imagemDoAtor, xAtor, yAtor, 26, 27);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if  (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3
    }
    }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemObstaculos.length; i = i + 1){
    colisao = collideRectCircle(xObstaculos[i], yObstaculos[i], comprimentoObstaculos, alturaObstaculos, xAtor, yAtor, 16)
    if (colisao){
      voltaParaPosicaoInicial()
      somDaColisao.play();
      if (pontosMaiorQueZero()){
       meusPontos -= 1; 
      }
    }
  }
}

function voltaParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER)
  fill(color(255,240,0))
  textSize(25)
  text (meusPontos, width / 5, 27)
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 366;
  
}
