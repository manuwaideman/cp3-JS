//array de imagens
var imagens = [  
    "imagens/img1.jpg",
    "imagens/img2.jpg",
    "imagens/img3.jpg",
    "imagens/img4.jpg",
    "imagens/img5.png",
    "imagens/img6.jpg"
];

//criando uma var que armazena o índice da imagem atual e a inicializa com 0
var Index = 0;
//criando uma var para definir o tempo
var time = 2000;

function slideShow(){
    document.getElementById('image').src = imagens[Index]; //pega id e caminho
    Index++; //incrementa
    if(Index == imagens.length){
        Index = 0;
    } //verificando imagens
    setTimeout("slideShow()", time); //definindo o tempo de cada slide
}

//chamando a função
slideShow();