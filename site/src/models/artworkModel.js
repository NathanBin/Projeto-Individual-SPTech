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
    select distinct idPostagem, backgroundImage, icone, nickname, descricaoAutor, email, capa, titulo 'tituloPost' from usuario left join postagem on idUsuario = fkUsuario where idUsuario = ${idArtista};
    `;
    /* select titulo 'tituloDese', desenhoBase64, idDesenho, fkUsuario from desenho join usuario on idUsuario = fkUsuario where idUsuario = ${idArtista};  */


console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function perfill(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idArtista);

    var instrucao = `
    select titulo 'tituloDese', desenhoBase64, idDesenho, idUsuario from desenho join usuario on idUsuario = fkUsuario where idUsuario = ${idArtista}; 
    `;
    /* select distinct idPostagem, backgroundImage, icone, nickname, descricaoAutor, email, capa, titulo 'tituloPost' from usuario left join postagem on idUsuario = fkUsuario where idUsuario = ${idArtista}; */


console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}


function carregar(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregar():")

    var instrucao = `
    select distinct top 48 idPostagem, titulo, capa, nickname from postagem join usuario on idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function trending(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function trending():")

    var instrucao = `
    select distinct top 12 idPostagem, titulo, capa, nickname, likes from postagem join usuario on idUsuario = fkUsuario order by likes desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function desenhos(idDesenhoCanvas) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function desenhos():");

    var instrucao = `
    select desenhoBase64, fkUsuario, titulo, icone, nickname, descricaoAutor, likes, comentarios, visualizacao from desenho join usuario on idUsuario = fkUsuario where idDesenho = ${idDesenhoCanvas};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function deletarPostagem(idPostagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarPostagem():", idPostagem);
    var instrucao = `
        DELETE FROM postagem WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function deletarDesenho(idDesenho) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarDesenho():", idDesenho);
    var instrucao = `
        DELETE FROM desenho WHERE idDesenho = ${idDesenho};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    postagem,
    perfil,
    carregar,
    trending,
    desenhos,
    perfill,
    deletarPostagem,
    deletarDesenho
}

