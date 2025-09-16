CREATE DATABASE escola
    DEFAULT CHARACTER SET = 'utf8mb4';

use escola;

create table aluno(
    id int AUTO_INCREMENT not null,
    nome VARCHAR(100) null,
    idade int,
    PRIMARY KEY(id)
);

select * from aluno;

insert into aluno(nome,idade) values ('Lana',54);