var vetor = [2,4,5,45,64,32,0,45];

function Verificacao(rep) {
    for(let i = 0; i < rep.length; i++){
        if(rep.indexOf(rep[i]) != rep.lastIndexOf(rep[i])) {
            return 'Há valores Repetidos!';
        };
    }
    return 'Não há valores Repetidos!';
}
console.log(Verificacao(vetor));

/* 
Se  primeira ocorrência(indexOf) e a última(LastIndeOf) não forem iguais, o elemento contido no vetor
é repetido dentro desse vetor e se forem iguais, o elemento não é repetido.
*/