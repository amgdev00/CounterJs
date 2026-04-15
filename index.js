
const boxContador= document.getElementById("counter-value")
const adButton= document.getElementById("btn-increase")
const delButton= document.getElementById("btn-decrease")
const resetButton= document.getElementById("btn-reset")

let contador= 0;

function atualizarContador() {
    boxContador.textContent = contador;
}

adButton.addEventListener('click', () => {
    contador++;
    atualizarContador();
});

delButton.addEventListener('click', () => {
    contador--;
    atualizarContador();
});

resetButton.addEventListener('click', () => {
    contador = 0;
    atualizarContador();
});