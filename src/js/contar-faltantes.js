const { converterLista } = require('../utils/main.js')

const faltantes = converterLista('minhas-faltantes')

const contarFaltantes = function () {
    let quantidadeTotal = 0;
    let selecionadas = {};
    for (const time of Object.keys(faltantes)) {
        let quantidade = faltantes[time].length
        selecionadas[time] = quantidade
        quantidadeTotal += quantidade        
    }
    const faltantesQtd = Object.values(selecionadas);
    const menorFaltante = Math.min(...faltantesQtd.filter(Boolean));
    const maiorFaltante = Math.max(...faltantesQtd);
    const times = Object.keys(selecionadas)
    let index = faltantesQtd.indexOf(menorFaltante);
    console.log('Quantidade de figurinhas faltantes (por time): ', selecionadas)
    console.log('Quantidade de figurinhas faltantes (total): ', quantidadeTotal)
    console.log(`Time com a MENOR quantidade de figurinhas faltantes: ${times[index]}`, menorFaltante)
    index = faltantesQtd.indexOf(maiorFaltante);
    console.log(`Time com a MAIOR quantidade de figurinhas faltantes: ${times[index]}`, maiorFaltante)
    return selecionadas;
}

contarFaltantes()