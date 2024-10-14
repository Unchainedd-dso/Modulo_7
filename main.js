const form = document.getElementsByTagName('form')[0]
console.log(form)

function bMaiorQueA(a,b){
    return b > a
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e)

    let numeroAContainer = document.getElementById('numero-a')
    let numeroBContainer = document.getElementById('numero-b')

    let correctContainer = document.getElementById('correct')
    let wrongContainer = document.getElementById('wrong')

    const mensagemAcerto = `Correto. O número B(${numeroBContainer.value}) é maior que o número A(${numeroBContainer.value})`
    const mensagemErro = `O número B(${numeroBContainer.value}) não é maior que o número A(${numeroBContainer.value})`

    const formValido = bMaiorQueA(numeroAContainer.value,numeroBContainer.value)
    if(formValido){
        wrongContainer.style.display = 'none' //garante que, se uma alternativa incorreta tenha sido anteriormente feita, a mensagem seja apagada 
        correctContainer.innerHTML = mensagemAcerto
        correctContainer.style.display = 'block'

        numeroAContainer.value = ''
        numeroBContainer.value = ''
    }
    else if(numeroAContainer.value != '' &&  numeroBContainer.value != ''){
        correctContainer.style.display = 'none' //garante que, se uma alternativa correta tenha sido anteriormente feita, a mensagem seja apagada
        wrongContainer.innerHTML = mensagemErro 
        wrongContainer.style.display = 'block'
    }
})