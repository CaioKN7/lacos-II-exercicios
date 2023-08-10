
const perguntaNumero = +prompt("Me envie um número de 1 a 10 e irei imprimir a tabuada dele")

//const numeros = [1,2,3,4,5,6,7,8,9,10]->Para usar no for/of e for/for
 for(let i=1; i<=10; i++){
    console.log(perguntaNumero*i)
}

//Com for of
/* for (const item of numeros) {
    const resultado = perguntaNumero * item;
    console.log(`${perguntaNumero} x ${item} = ${resultado}`);
    
} */


//for com for e confirm
/* for(let i=1; i<=10; i++){
    confirm(`Gostaria de receber a tabuada de ${i}`)
    for (const item of numeros){
        let resultado = item*i
        console.log(`${i} x ${item} = ${resultado}`);
    }

} */
