const dataAtual = new Date();
const diaObjetivo = prompt("Insira o dia do seu aniversário (1 a 31):");
const mesObjetivo = prompt("Insira o mês do seu aniversário (1 a 12):");


const dataObjetivo = new Date(dataAtual.getFullYear(), mesObjetivo - 1, diaObjetivo, 23, 59, 59);
if (dataObjetivo < dataAtual) {
    dataObjetivo.setFullYear(dataAtual.getFullYear() + 1); 
}

const diasQueFaltam = Math.floor((dataObjetivo - dataAtual) / 86400000);


if (diasQueFaltam > 30 ) {
    document.querySelector("#dias_restantes").textContent = diasQueFaltam + " dias";
    
}else if (diasQueFaltam <= 30 && diasQueFaltam >= 15) {
    document.querySelector("#dias_restantes").textContent = diasQueFaltam + " dias";
    document.querySelector("#mensagem_aniversario").textContent = "Está quase chegando, pode ir se preparando!!!";
} else if (diasQueFaltam <= 14 && diasQueFaltam >= 7) {
    document.querySelector("#dias_restantes").textContent = diasQueFaltam + " dias";
    document.querySelector("#mensagem_aniversario").textContent = "Está logo ali, e aí já sabe o que vai querer de presente?";
} else if (diasQueFaltam <=6 && diasQueFaltam >=1)
{document.querySelector("#dias_restantes").textContent = diasQueFaltam +" dias";
document.querySelector("#mensagem_aniversario").textContent = "Contagem regressiva!";

} else if (diasQueFaltam ===0)
{document.querySelector("#dias_restantes").textContent = diasQueFaltam +" dias";
document.querySelector("#mensagem_aniversario").textContent = "Meus Parabéns!!!";
}