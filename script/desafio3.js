let nome = prompt('Qual seu nome ?')
let p1 = document.querySelector('#p1')
p1.innerHTML = `<h2>Olá ${nome} Escolha uma área para seguir</h2>`


function front() {
    alert(`Ótima área ${nome}`)
    let p2 = document.querySelector('#p2')
    p2.innerHTML = '<h3>Você prefere usar qual Tecnologia ?</h3>'
    let x = document.querySelector('#txt1')
    let y = document.querySelector('#txt2')
    let r1 = document.querySelector('#r1')
    let r2 = document.querySelector('#r2')
    r1.removeAttribute('disabled')
    r2.removeAttribute('disabled')

    x.innerHTML = '<strong>React</strong>'
    y.innerHTML = '<strong>Vue</strong>'


}

function back() {
    let paragraf = document.querySelector('#paragrafo')
    paragraf.innerHTML = 'Linguagem'
    alert(`Ótima área ${nome} !`)
    let p2 = document.querySelector('#p2')
    p2.innerHTML = '<h3>Você prefere progamar em qual Linguagem ?</h3>'
    let x = document.querySelector('#txt1')
    let y = document.querySelector('#txt2')
    let r1 = document.querySelector('#r1')
    let r2 = document.querySelector('#r2')
    r1.removeAttribute('disabled')
    r2.removeAttribute('disabled')

    x.innerHTML = '<strong>Progamar em c#</strong>'
    y.innerHTML = '<strong>Progamar em Java</strong>'


}

function teste() {
    let x = prompt(`${nome} Você tem certeza que essa é a área escolhida? Se sim informe (ok) ou de deseja seguir se desenvolvendo para se tornar Fullstack(full) ?  `)
    // while(x ==! '1' || x ==!'2'){
    // let num = Number(x)
    switch (x) {
        case 'ok':
            alert(`Legal ${nome}, se você se esmpenhar muito você consegue uma vaga e se sair bem nessa área`)
            break
        case 'full':
            alert(`Legal ${nome}, um profissional Fullstack é muito valorizado e você terá varías oportunidades !!`)
            break
        default:
            alert('Informe uma opção valída !!!')
            x = prompt(`${nome} Você pretende seguir se especializando na área escolhida (ok) ou seguir se desenvolvendo para se tornar Fullstack(full) ?  `)

    }

    let msg = prompt("Você gostaria de aprender alguma outra área ou tecnologia ? Digite 'ok' em caso positivo ou clique em cancelar caso negativo.");
while (msg === "ok"){
    let tec = prompt("Qual área/tecnologia?")
    alert(`${tec} é realmente uma área/tecnologia muito legal!`)
    /*let node = document.createElement('li')
    let txtnode = document.createTextNode(z)
    node.appendChild(txtnode)
    document.querySelector('#tr').appendChild(node)*/
    msg = prompt("Tem mais alguma que você gostaria de aprender? Digite 'ok' em caso positivo.")
}
}


