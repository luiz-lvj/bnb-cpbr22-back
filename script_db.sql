create database medsync;

create table usuarios(
    id int primary key,
    nome text,
    cpf text unique,
    public_key text unique
);

create table consultas(
    id int primary key,
    public_key text unique
);

create table exames(
    id int primary key,
    public_key text unique
);

create table hospitais(
    id int primary key,
    nome text,
    public_key text unique
);

create table medicos(
    id int primary key,
    nome text,
    especialidade text,
    crm int unique,
    public_key text unique
);

