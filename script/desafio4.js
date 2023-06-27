const numAdivinhacao = 7;
let chute = '';
let acertou = false;

for(let cont = 0; cont < 3; cont ++){
    chute = prompt("Tente adivinhar o número de 0 a 10: ");
    if (chute == numAdivinhacao){
        alert(`Acertou em Cê é o bixão mermo em doido, o número era ${numAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert('Errouuuuu')
}
if (!acertou){
    alert(`Muito burro o número era ${numAdivinhacao}`)
}