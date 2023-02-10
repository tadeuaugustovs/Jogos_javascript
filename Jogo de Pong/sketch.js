//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro /2;

//variáveis da velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() { 
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificacolisaoRaquete(xRaquete, yRaquete);
  verificacolisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  //bolinhaNaoFicaPresa();
  
}

function mostraBolinha(){
  circle (xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function mostraRaquete(x,y,){
  rect(x, y, wRaquete,hRaquete)
}

  
function verificaColisaoBorda(){ 
  if (xBolinha + raio > width || 
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    
  }
  if (yBolinha + raio > height || 
      yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
    
  }
 }
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 15;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 15;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1
    
  }
}


function verificacolisaoRaquete(x, y) {
    colidiu = 
      collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function colisaoRaqueteOponenteBiblioteca() {
    colidiu = 
      collideRectCircle(xRaqueteOponente, yRaqueteOponente, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    
  }
}

function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - wRaquete/2 -30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function incluiPlacar(){
  stroke (255);
  textAlign(CENTER)
  textSize(16);
  fill(color(128,0,0));
  rect(140, 10, 40, 20);
    fill(255);
  text(meusPontos, 160, 26)
    fill(color(128,0,0));
  rect(440, 10, 40, 20)
    fill(255);
  text(pontosOponente, 460, 26)
}

function marcaPonto(){
  if(xBolinha > 593.5){
    meusPontos +=1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 20
    }
}

