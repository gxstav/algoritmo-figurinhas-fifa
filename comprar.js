const {readFileSync, promises: fsPromises} = require('fs');

const selecionarDisponiveis = function (faltantes, disponiveis) {
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
}

const converterLista = function (arquivo) {
    const conteudo = readFileSync(`.\\${arquivo}`, 'utf-8');
    const linhas = conteudo.split(/\r?\n/);
    let listaConvertida = {};
    for (const linha of linhas) {
        const [time, figurinhas] = linha.split(':')
        const _figurinhas = figurinhas.replace(/ /g, '').split(',')
        listaConvertida[time] = _figurinhas.map(figurinha => Number(figurinha))
    }
    return listaConvertida;
}

const faltantes = converterLista('faltantes.txt')

const disponiveis = converterLista('comprar\\disponiveis.txt')

selecionarDisponiveis(faltantes, disponiveis)

