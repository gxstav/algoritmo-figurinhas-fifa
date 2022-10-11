# algoritmo-figurinhas-fifa
Criado durante o período da Copa do Mundo FIFA Qatar 2022 para facilitar a compra e a troca de figurinhas evitando o trabalho chato de comparar a sua lista com a lista do seu colega.

## Como usar?
Inicie o repositório com `yarn install`. <br>
Coloque nos arquivos de texto correspondentes a lista das figurinhas e execute o comando `yarn [modo]`. <br>
Use o padrão `[SIGLA]: [LISTA]` dentro dos arquivos de texto. Exemplo: `BRA: 1,2,5,7`.

## Modo Compra
Coloque no arquivo `src/minhas-faltantes.txt` a sua lista de figurinhas faltantes. <br>
Coloque no arquivo `src/comprar/disponiveis.txt` a lista de figurinhas que a pessoa tem disponível para venda. <br>
Rode no terminal o comando `yarn comprar` para receber a lista das figurinhas selecionadas para você comprar.

## Modo Troca
Coloque no arquivo `src/minhas-faltantes.txt` a sua lista de figurinhas faltantes. <br>
Coloque no arquivo `src/minhas-disponiveis.txt` a sua lista de figurinhas repetidas. <br>
Coloque no arquivo `src/trocar/faltantes.txt` a lista de figurinhas faltantes que a pessoa precisa. <br>
Coloque no arquivo `src/trocar/disponiveis.txt` a lista de figurinhas repetidas que a pessoa tem. <br>
Rode no terminal o comando `yarn trocar` para receber a lista das figurinhas selecionadas para você trocar.
