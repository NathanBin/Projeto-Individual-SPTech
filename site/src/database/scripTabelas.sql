create database binstation;
use binstation;

create table usuario (
idUsuario int primary key auto_increment,
nickname varchar(45),
senha varchar(45),
email varchar(45),
icone text,
descricao varchar(255),
backgroundImage text
);

create table follow (
fkUsuarioSeguidor int,
fkUsuarioSeguido int,
foreign key (fkUsuarioSeguidor) references usuario(idUsuario),
foreign key (fkUsuarioSeguido) references usuario(idUsuario),
primary key (fkUsuarioSeguidor, fkUsuarioSeguido)
);

create table imagem (
idImagem int primary key auto_increment,
base64 text
)auto_increment = 1001;

create table postagem (
fkUsuario int,
fkImagem int,
dataH datetime,
titulo varchar(45),
descricao varchar(255),
likes int,
comentarios int,
views int,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkImagem) references imagem(idImagem),
primary key (fkUsuario, fkImagem)
);

create table colecao (
idColecao int auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idColecao, fkUsuario)
)auto_increment = 501;

create table postagemCurtida (
fkColecao int,
fkUsuario int,
fkImagem int,
foreign key (fkColecao) references colecao(idColecao),
foreign key (fkUsuario) references colecao(fkUsuario),
foreign key (fkImagem) references imagem(idImagem),
primary key (fkColecao, fkUsuario, fkImagem)
);

