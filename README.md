Protótipo de algorítimo para randomização de nomes e expressões realizados como estudo de bancos de dados relacionais, usando PostgreSQL.

O banco de dados possui como entradas os nomes/expressões originais e três categorias de separações, definidas de forma arbitrária.

A requisição na rota /nomes busca no banco de dados, aleatóriamente, uma entrada por coluna de partículas, concatena as strings em uma e retorna a string resultante no corpo da requisição.
Foi também instalado um sistema de autenticação para interação com o CRUD da database.
