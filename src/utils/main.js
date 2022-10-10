const { readFileSync } = require('fs');
function converterLista (arquivo) {
    const conteudo = readFileSync(`.\\src\\${arquivo}.txt`, 'utf-8');
    const linhas = conteudo.split(/\r?\n/);
    let listaConvertida = {};
    for (const linha of linhas) {
        const [time, figurinhas] = linha.split(':')
        const _figurinhas = figurinhas.replace(/ /g, '').split(',')
        listaConvertida[time] = _figurinhas.map(figurinha => Number(figurinha))
    }
    return listaConvertida;
};

module.exports = {
    converterLista
}