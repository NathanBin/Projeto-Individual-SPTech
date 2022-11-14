var database = require("../database/config");

function postagem(idPostagem) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idPostagem);

    var instrucao = `
    SELECT 
    imagemBase64,
    fkUsuario,
    icone,
    nickname,
    descricaoAutor,
    titulo,
    descricaoPost,
    likes,
    comentarios,
    visualizacao
FROM
    usuario
        JOIN
    postagem ON idUsuario = fkUsuario
        JOIN
    imagem ON fkImagem = idImagem
WHERE
    idPostagem = ${idPostagem};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}




function perfil(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idArtista);

    var instrucao = `
    select distinct idPostagem, backgroundImage, icone, nickname, descricaoAutor, email, capa, titulo from usuario join postagem on idUsuario = fkUsuario where idUsuario = ${idArtista};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function carregar(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregar():")

    var instrucao = `
    select distinct idPostagem, titulo, capa, nickname from postagem join usuario on idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    postagem,
    perfil,
    carregar
}

