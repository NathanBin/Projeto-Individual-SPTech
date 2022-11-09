var database = require("../database/config");

function postagem(idPostagem) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function postagem():", idPostagem);

    var instrucao = `
    SELECT 
    base64,
    icone,
    nickname,
    descricaoAutor,
    titulo,
    descricaoPost,
    likes,
    comentarios,
    views
FROM
    usuario
        INNER JOIN
    postagem ON idUsuario = fkUsuario
        INNER JOIN
    imagem ON fkImagem = idImagem
WHERE
    idPostagem = ${idPostagem};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

/* function pegarUltimoB64(b64) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select base64 from desenho order by idDesenho desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarUltimoIDB64(id) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select idDesenho from desenho order by idDesenho desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function attTitulo(titulo, b64) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarTitulo():", titulo);

    var instrucao = `
    UPDATE desenho SET titulo = '${titulo}' where idDesenho = ${b64};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}
 */

module.exports = {
    postagem
}

