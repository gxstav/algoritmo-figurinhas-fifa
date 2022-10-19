const { converterLista } = require('../utils/main.js')

const faltantes = converterLista('minhas-faltantes')
const disponiveis = converterLista('comprar/disponiveis')

const selecionarDisponiveis = function () {
    let quantidade = 0;
    let selecionadas = {};
    for (const time of Object.keys(disponiveis)) {
        let figurinhas = [];
        faltantes[time].map(figurinha => {
            if (disponiveis[time].indexOf(figurinha) !== -1) {
                let index = disponiveis[time].indexOf(figurinha)
                figurinhas.push(disponiveis[time][index])
                // console.log(`${time} ${figurinha} - PRECISO`)
                quantidade++
            }
        })
        selecionadas[time] = figurinhas
    }
    console.log('Lista das selecionadas: ', selecionadas)
    console.log(`${quantidade} figurinhas encontradas -- R$ ${quantidade * 0.80}`)
    return selecionadas;
}

selecionarDisponiveis()