var a = 3, b = 5;

a = [a,b];
b = a[0];
a = a[1];

console.log("A = " + a);
console.log("B = " + b);

/* 
Para trocar o valor das variáveis sem o uso de uma terceira variável, utilizei a variável 'a' como vetor
e atribui a ele o valor de 'a' e 'b', depois atribui a variável 'b' o valor da primeira posição do vetor 'a'
(que é o valor de 'a') e atribui o valor de 'b' a segunda variável do vetor 'a'.
*/