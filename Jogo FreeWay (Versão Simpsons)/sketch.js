function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarElementos();
  mostraAtor();
  mostraObstaculo();
  movimentaObstaculo();
  movimentaAtor();
  voltaPosicaoInicialDoObstaculo();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  
}
