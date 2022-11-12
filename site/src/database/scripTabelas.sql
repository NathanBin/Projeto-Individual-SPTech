-- DESENVOLVIMENTO (LOCAL)

create database binstation;
use binstation;

create table usuario (
idUsuario int primary key auto_increment,
nickname varchar(45),
senha varchar(45),
email varchar(45),
icone mediumtext,
descricaoAutor varchar(255),
backgroundImage mediumtext
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
idPostagem int,
fkUsuario int,
fkImagem int,
dataH datetime,
titulo varchar(45),
descricaoPost varchar(255),
likes int,
comentarios int,
views int,
capa mediumtext,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkImagem) references imagem(idImagem),
primary key (idPostagem, fkUsuario, fkImagem)
);

create table desenho (
idDesenho int auto_increment,
titulo varchar(100),
base64 mediumtext,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idDesenho, fkUsuario)
);

create table postagemCurtida (
fkUsuario int,
fkPostagem int,
fkUsuarioPostagem int,
fkImagem int,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkPostagem) references postagem(idPostagem),
foreign key (fkUsuarioPostagem) references postagem(fkUsuario),
foreign key (fkImagem) references postagem(fkImagem),
primary key (fkUsuario, fkPostagem, fkUsuarioPostagem, fkImagem)
);


-- PRODUÇÂO (AZURE)


reate table usuario (
idUsuario int primary key identity(1,1),
nickname varchar(45),
senha varchar(45),
email varchar(45),
icone text,
descricaoAutor varchar(255),
backgroundImage text
);

create table follow (
fkUsuarioSeguidor int foreign key references usuario(idUsuario),
fkUsuarioSeguido int foreign key references usuario(idUsuario),
primary key (fkUsuarioSeguidor, fkUsuarioSeguido)
);

create table imagem (
idImagem int primary key identity(1,1),
base64 text
);

create table postagem (
idPostagem int,
fkUsuario int foreign key references usuario(idUsuario),
fkImagem int foreign key references imagem(idImagem),
dataH datetime,
titulo varchar(45),
descricaoPost varchar(255),
likes int,
comentarios int,
visualizacao int,
capa text,
primary key (idPostagem, fkUsuario, fkImagem)
);

create table desenho (
idDesenho int identity(1,1),
titulo varchar(100),
base64 text,
fkUsuario int foreign key references usuario(idUsuario),
primary key (idDesenho, fkUsuario)
);

create table colecao (
idColecao int identity(1,1),
fkUsuario int foreign key references usuario(idUsuario),
primary key (idColecao, fkUsuario)
);

create table postagemCurtida (
fkUsuarioCurtidor int foreign key references usuario(idUsuario),
fkPostagem int foreign key references postagem(idPostagem),
fkUsuarioPostagem int foreign key references postagem(fkUsuario),
fkImagem int foreign key references postagem(fkImagem),
primary key (fkUsuarioCurtidor, fkPostagem, fkUsuarioPostagem, fkImagem)
);