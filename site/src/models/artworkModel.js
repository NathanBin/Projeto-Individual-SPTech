var database = require("../database/config");

function postagem(idPostagem) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idPostagem);

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




function perfil(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idArtista);

    var instrucao = `
    select distinct idPostagem, backgroundImage, icone, nickname, descricaoAutor, email, capa, titulo from usuario join postagem on idUsuario = fkUsuario where idUsuario = ${idArtista};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

module.exports = {
    postagem,
    perfil
}

