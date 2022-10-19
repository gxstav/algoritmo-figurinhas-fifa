const { readFileSync } = require('fs');
function converterLista (arquivo) {
    const conteudo = readFileSync(`./src/${arquivo}.txt`, 'utf-8');
    const linhas = conteudo.split(/\r?\n/);
    let listaConvertida = {};
    for (const linha of linhas) {
        const [time, figurinhas] = linha.split(':')
        const convertidas = figurinhas.replace(/ /g, '').split(',')
        const tratadas = convertidas.map(figurinha => Number(figurinha))
        listaConvertida[time] = tratadas.length && tratadas[0] === 0 ? [] : tratadas
    }
    return listaConvertida;
};

module.exports = {
    converterLista
}