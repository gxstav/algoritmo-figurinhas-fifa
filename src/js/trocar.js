const { converterLista } = require('../utils/main.js')

const minhasFaltantes = converterLista('minhas-faltantes')
const minhasDisponiveis = converterLista('minhas-disponiveis')
const faltantes = converterLista('trocar/faltantes')
const disponiveis = converterLista('trocar/disponiveis')

const selecionarDisponiveis = function () {
    const preciso = {};
    const precisa = {};
    let qtdPreciso = 0;
    let qtdPrecisa = 0;

    for (const time of Object.keys(minhasDisponiveis)) {
        let figurinhas = [];
        faltantes[time].map(figurinha => {
            if (minhasDisponiveis[time].indexOf(figurinha) !== -1) {
                let index = minhasDisponiveis[time].indexOf(figurinha)
                figurinhas.push(minhasDisponiveis[time][index])
                // console.log(`${time} ${figurinha} - ELE(A) PRECISA`)
                qtdPrecisa++
            }
        })
        
        precisa[time] = figurinhas
        figurinhas = []
        
        minhasFaltantes[time].map(figurinha => {
            if (disponiveis[time].indexOf(figurinha) !== -1) {
                let index = disponiveis[time].indexOf(figurinha)
                figurinhas.push(disponiveis[time][index])
                // console.log(`${time} ${figurinha} - EU PRECISO`)
                qtdPreciso++
            }
        })

        preciso[time] = figurinhas
    }

    console.log(`${qtdPrecisa} figurinhas selecionadas que ele(a) precisa: `, precisa)
    console.log(`${qtdPreciso} figurinhas selecionadas que eu preciso: `, preciso)
}

selecionarDisponiveis()
