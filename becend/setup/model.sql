CREATE DATABASE dtm_copy;

\c dtm_copy;

CREATE TYPE gender_type AS ENUM ('Erkak', 'Ayol');

DROP TABLE IF EXISTS viloyatlar;
CREATE TABLE viloyatlar(
    viloyat_Id serial,
    viloyat_name varchar(32) not null primary key
);

INSERT INTO viloyatlar(viloyat_name) VALUES
('Andijon'),
('Buxoro'),
('Farg''ona'),
('Jizzax'),
('Xorazm'),
('Namangan'),
('Navoiy'),
('Qashqadaryo'),
('Qoraqalpog''iston Respublikasi'),
('Samarqand'),
('Sirdaryo'),
('Surxondaryo'),
('Toshkent viloyati'),
('Toshkent');


DROP TABLE IF EXISTS users;
CREATE TABLE users(
    user_Id serial,
    full_name varchar(32) not null,
    email_or_phone text not null,
    username varchar(32) not null unique,
    viloyat varchar(32) references viloyatlar(viloyat_name) not null,
    password varchar(60) not null,
    gender gender_type,
    yonalish varchar(32),
    first_fan varchar(32),
    second_fan varchar(32),
    first_block varchar(32),
    second_block varchar(32)
);