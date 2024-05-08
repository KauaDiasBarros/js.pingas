//variaveis bolinha
let xBolinha = 300
let yBolinha = 200;
let diametro = 15
let raio = diametro / 2

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//velocidade bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

//variaveis da raquete
let chanceDeErrar = 0;
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 100;

let colidiu = false 

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYoponente;


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
 //estrutura mude o background para não dar merda p mim
function draw() {
  background('rgba(0, 255, 0, 0.25)');
//bolinha
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
//raquete
  mostraRaquete ();
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente)
  verificaColisaoRaquete(xRaquete,yRaquete)
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
    
  if (xBolinha + raio> width || 
     xBolinha - raio< 0){ 
    velocidadeXBolinha *= -1;
  } 
  if (yBolinha +raio > height ||
     yBolinha - raio <0){ 
    velocidadeYBolinha *= -1;
  }
 
}

function mostraRaquete (x, y){
 rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  } 
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
} 

function verificaColisaoRaquete(){
  if(xBolinha -raio< xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
      
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
}

// CASO QUEIRA JOGAR SEM CONTROLAR A RAQUETE DO OPONENTE TIRE OS DOIS "//" O MESMO PARA CASO QUEIRA JOGAR CONTROLANDO

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 50;
    yRaqueteOponente += velocidadeYOponente
    calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
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

//function movimentaRaqueteOponente(){
//    if (keyIsDown(87)){
//        yRaqueteOponente -= 10;
//    }
//    if (keyIsDown(83)){
//        yRaqueteOponente += 10;
//    }
//}

function incluiPlacar() {
    textAlign(CENTER)
    textSize(16)
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 591){
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 8){
        pontosDoOponente += 1;
      ponto.play();
    }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}

function vamonaocolar () {
  
  text('hi', 50, 50);

}