Protótipo de algorítimo para randomização de nomes baseadas em samples de nomes incomuns.

O banco de dados possui como entradas os nomes originais e uma separação em três partes, feita de forma arbitrária por consistência.

A requisição na rota /nomes busca no banco de dados, aleatóriamente, uma entrada por coluna de partículas, concatena as strings em uma e retorna a string resultante no corpo da requisição.
