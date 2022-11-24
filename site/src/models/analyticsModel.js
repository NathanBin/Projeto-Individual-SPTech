var database = require("../database/config");

function curtidos() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function curtidos():");
    var instrucao = `
    select distinct top 3 capa, likes, nickname from postagem join usuario on idUsuario = fkUsuario order by likes desc;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function visualizados() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function visualizados():");
    var instrucao = `
    select distinct top 3 capa, visualizacao, nickname from postagem join usuario on idUsuario = fkUsuario order by visualizacao desc;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function recentes() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recentes():");
    var instrucao = `
    SELECT distinct top 3 CONVERT(VARCHAR(10), dataH, 111) AS dia, capa, nickname from postagem join usuario on idUsuario = fkUsuario order by dia desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    curtidos,
    visualizados,
    recentes
}