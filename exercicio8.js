var x = 10, y = 7, z = 3;

var ValoresVetor = [7,6,7,3,2,1,0,10,2];

function CalcularMedia3(val1, val2, val3) {
    let media = (val1 + val2 + val3) / 3;
    media = media.toFixed(2);
    console.log(media);
}

function CalcularMediaVetor(vetor){
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    let media = soma / vetor.length;
    media = media.toFixed(2);
    console.log(media);
}

CalcularMedia3(x,y,z);
CalcularMediaVetor(ValoresVetor);

/* 
A primeira função calcula a média passando 3 valores como parâmentro, 
já a segunda função é passado um vetor onde vai passar como parâmentro quantos elementos quiser.
Na segunda função é feito um loop para percorrer o vetor e somar os elementos.
*/