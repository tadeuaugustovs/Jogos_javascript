//Imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemDonut;
let imagemCarro2;
let imagemCarro3;
let imagemBart;

//Sons do Jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage ("imagens/homer.png")
  imagemCarro = loadImage ("imagens/carro-1.png")
  imagemDonut = loadImage ("imagens/donut.png")
  imagemCasa = loadImage("imagens/casa.png")
  imagemCarro2 = loadImage ("imagens/carro-2.png")
  imagemCarro3 = loadImage ("imagens/carro-3.png")
  imagemBart = loadImage ("imagens/bart.png")
  imagemMoes = loadImage ("imagens/moesbar.png")
  imagemObstaculos = [imagemCarro, imagemCarro2, imagemCarro3, imagemBart, imagemCarro, imagemCarro2]
  
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound ("sons/Do'h! Homer.mp3")
  somDoPonto = loadSound ("sons/woohoo sound.mp3")
}