const main = document.getElementById('main');

renderizarCartas()
const arrDuplicado = [...personagens,...personagens];
const personagensEmbaralhados = shuffleArray(personagens);

console.log(arrDuplicado);

function renderizarCartas() {
    for (let i = 0; i < personagens.length ; i++) {

        let cartaA = document.createElement('img');
        cartaA.src="..//projeto-inicial/img/QuestionBlock.png";
        let cartaB = document.createElement("img");
        cartaB.src="..//projeto-inicial/img/QuestionBlock.png";
    


        main.appendChild(cartaA);
        main.appendChild(cartaB);
    }
}

    function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


