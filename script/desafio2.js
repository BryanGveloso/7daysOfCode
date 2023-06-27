function resp() {
    let name = document.querySelector('#nome')
    let idade = document.querySelector('#idade')
    let linguagem = document.querySelector('#ling')
    let x = (name.value)
    let y = (idade.value)
    let z = (linguagem.value)
    alert(`Oi ${x}, sua idade e de ${y} anos e você gosta de estudar ${z}`)
}
/*let nome = window.prompt("Qual sue nome ?")
let idade = window.prompt('Qual sua Idade ?')
let ling = window.prompt("Qual Linguagem você está estudando ?")
let saida = `Oi ${nome} tudo certo ? Sua idade é de ${idade} anos e a linguagem que você esta estudando atualmente é ${ling}`
alert(`Oi ${nome} tudo certo ? Sua idade é de ${idade} anos e a linguagem que você esta estudando atualmente é ${ling}`)
document.writeln(saida)*/

function soma() {
    let text1 = document.querySelector('#text1')
    let text2 = document.querySelector('#text2')
    let num1 = Number(text1.value)
    let num2 = Number(text2.value)
    let saida = document.querySelector('#saida')
    let soma = num1 + num2
    soma.innerHTML = soma
}