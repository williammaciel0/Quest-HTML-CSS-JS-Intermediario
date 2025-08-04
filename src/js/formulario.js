const inputs = document.querySelectorAll('.input')
const inputDado = document.querySelectorAll('.inputs')

for (let i = 0; i <= inputs.length; i++){
    inputs[i].classList.add('ativado')
}

function validacao() {
    for(let i = 0; i <= inputs.length; i++){
        inputs[i].classList.remove('ativado');
        if(inputDado[i].value !== ''){
            inputs[i].classList.add('ativado');
            inputDado[i].classList.remove('input-invalido')
            inputDado[i].classList.add('input-valido')
            
        } else{
            inputDado[i].classList.remove('input-valido')
            inputDado[i].classList.add('input-invalido')
        }
    }

}

