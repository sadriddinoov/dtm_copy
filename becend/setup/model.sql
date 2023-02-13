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


DROP TABLE IF EXISTS univer CASCADE;
CREATE TABLE univer(
    univer_Id serial primary key,
    univer_name varchar(64) not null,
    fanlar varchar[] not null
);

INSERT INTO univer(univer_name, fanlar) VALUES
('Toshkent Tibbiot Akademiyasi', array['Biologiya', 'Kimyo']),
('Toshkent Axborot Texnologiyalari Universiteti', array['Matematika', 'Fizika', 'Ingliz tili']),
('Toshkent Moliya Instituti', array['Matematika', 'Ingliz tili']),
('O''zbekiston Milliy Universiteti', array['Matematika', 'Biologiya', 'Kimyo', 'Fizika', 'Ingliz tili']);

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    user_Id serial primary key,
    full_name varchar(32) not null,
    email_or_phone text not null,
    username varchar(32) not null unique,
    viloyat varchar(32) references viloyatlar(viloyat_name) not null,
    password varchar(60) not null,
    gender gender_type not null,
    yonalish int references univer(univer_Id),
    first_fan varchar(32),
    second_fan varchar(32),
    bal int
);

DROP TABLE IF EXISTS fakultet;
CREATE TABLE fakultet(
    fakultet_Id serial,
    fakultets varchar[] not null,
    Garant varchar(32) not null,
    Shartnoma varchar(32) not null,
    univer_Id int references univer(univer_Id) not null
);

INSERT INTO fakultet(fakultets, Garant, Shartnoma, univer_Id) VALUES 
(array['Davolash', 'Tibbiy pedagogika', 'Malaka oshirish', 'Tibbiy profilaktika'], '80', '65', 1),
(array['Radio va mobil aloqa', 'Televizion exnologiyalar', 'Dasturiy injiniring', 'Kiberxavfsizlik'], '80', '70', 2),
(array['Iqtisodiyot', 'Soliqlar va sug''urta', 'Buxgalteriya hisobi va audit', 'Bank ishi'], '85', '75', 3),
(array['Arxivshunoslik', 'Arxeologiya', 'Ekonometrika'], '90', '75', 4);

DROP TABLE IF EXISTS tests;
CREATE TABLE tests(
    test_Id serial,
    test_Owner varchar not null,
    test_question varchar not null,
    answer_a varchar not null,
    answer_b varchar not null,
    answer_c varchar not null,
    answer varchar(2) not null
);

INSERT INTO tests(test_Owner, test_question, answer_a, answer_b, answer_c, answer) VALUES
('Matematika', '(25 * 33003) * 0', '82 507', '825 075', '0', 'c'),
('Matematika', '(25 * 10) / 0', '250', '0', '255', 'b'),
('Matematika', '(30 * 30) * 3', '270', '2700', '1000', 'b'),
('Matematika', '11 3 stependa nechi bo''ladi', '1331', '1221', '111', 'a'),
('Matematika', '2 8 stependa nechi bo''ladi', '256', '128', '512', 'a'),
('Matematika', '5 5 stependa nechi bo''ladi', '625', '25', '3125', 'c'),
('Matematika', '9 ildiz ostida nechi bo''ladi', '3', '9', '6', 'a'),
('Matematika', '121 ildiz ostida nechi bo''ladi', '11', '13', '12', 'a'),
('Matematika', '16 ildiz dan chiqan javob 3 stependa nechi bo''ladi', '256', '64', '128', 'b'),
('Matematika', '9 ildiz dan chiqan javob 9 stependa nechi bo''ladi', '6561', '2187', '19683', 'c'),
('Ingliz tili', 'Elephant soz''ining tarjimasi', 'Fil', 'Sigir', 'Buqa', 'a'),
('Ingliz tili', 'Fox soz''ining tarjimasi', 'Bo''ri', 'Tulki', 'Sher', 'b'),
('Ingliz tili', 'Bear soz''ining tarjimasi', 'Kit', 'Ayiq', 'Buqa', 'b'),
('Ingliz tili', 'Kit soz''ining to''gri yozilishi', 'While', 'Bear', 'Whale', 'c'),
('Ingliz tili', 'Quyosh soz''ining to''gri yozilishi', 'San', 'Quyoshcha', 'Sun', 'c'),
('Ingliz tili', 'Olma soz''ining to''gri yozilishi', 'Aple', 'Iphone', 'Apple', 'c'),
('Ingliz tili', 'So''zni davom etiring: IT specialist loves...', 'Coffee', 'Bug', 'Error', 'a'),
('Ingliz tili', 'Ispaniya qanaqa yoziladi', 'Ispain', 'Spain', 'Ispaniya', 'b'),
('Ingliz tili', 'Portugaliya qanaqa yoziladi', 'Portugaliya', 'Portugall', 'Portugal', 'c'),
('Ingliz tili', 'I live in ...', 'Uzbekistan', 'UZB', 'O''zbekiston', 'a'),
('Biologiya', 'Suyuq to''qimalar', 'Epiteliy', 'Qon', 'Muskul', 'b'),
('Biologiya', 'Tirik organizm bu:', 'Turli funktsiyalarga ega bo''lgan hujayralar guruhi', 'Turli funktsiyalarni bajaradigan to''qimalarni hosil qiluvchi hujayralar guruhi', 'Ushbu organizmni tashkil etuvchi hujayralar, to''qimalar va organlarning muvofiqlashtirilgan o''zaro ta''siri', 'c'),
('Biologiya', 'Tirik organizmlar yashaydigan er qobig''i:', 'Atmosfera', 'Litosfera', 'Biosfera', 'c'),
('Biologiya', 'Bakteriyalarning harakatlanish usuli:', 'Reaktiv - shilimshiqni tashlash', 'Qanotlardan foydalanish', 'Barcha javoblar to''g''ri', 'a'),
('Biologiya', 'Bakterial sporalar ...', 'Jinsiy hujayra', 'Noqulay sharoitlarda bakteriyalarning omon qolish shakli', 'Bakteriyalarning nomi', 'b'),
('Biologiya', 'Qo''ziqorinlarni o''rganadigon fan:', 'Ekologiya', 'Mikologiya', 'Biologiya', 'b'),
('Biologiya', 'Qo''ziqorinlar ko''payadi:', 'Nizolar', 'Urug''lar bilan', 'Vegetativ ravishda', 'c'),
('Biologiya', 'Mikoriziya:', 'Qo''ziqorin nomi ', 'Qo''ziqorin ildizi', 'Sporlar', 'b'),
('Biologiya', 'Bazidiomitsetlar sinfiga quyidagilar kiradi:', 'Russula', 'Tinder qo''ziqorini ', 'Yulduzli baliq ', 'a'),
('Biologiya', 'Qo''ziqorinlarda sporalar rivojlanadi:', 'Po''chkada', 'Sporangiada', 'Gif b''olib', 'c'),
('Kimyo','Qanday metall normal sharoitda suyuq holatda bo''ladi?', 'Natriy', 'Oltingugurt','Merkuriy','c'),
('Kimyo','Qaysi metall elektr tokini eng yaxshi o''tkazuvchi hisoblanadi?', 'Mis', 'Merkuriy', 'Sink','a'),('Kimyo', 'Qaysi metall elektr tokini eng yomon o''tkazuvchi hisoblanadi?', 'Oltin', 'Kumush', 'Merkuriy','c'),
('Kimyo', 'Ro''yxatdagi qaysi metall yuqori egiluvchanlikka ega?', 'Alyuminiy', 'Natriy', 'Merkuriy','a'),
('Kimyo', 'Qaysi asr mavjud emas?', 'Tosh', 'Oltin', 'Mis','b'),
('Kimyo', 'Bronza qanday qotishmadan yasalgan?', 'Mis va sink', 'Mis va qalay', 'Mis va volfram','b'),
('Kimyo','Qaysi jismoniy xususiyat metallarga xos emas?', 'Metall yorqinligi', 'Infuzionlik', 'Amorf','c'),
('Kimyo', 'Alyuminiy o''rnini qaysi metall egalladi?', 'Qalay', 'Qo''rg''oshin', 'Titan','c'),
('Kimyo', 'Qaysi temir qotishmasi mavjud emas?', 'Karborund', 'Quyma temir', 'Chelik','a'),
('Kimyo', 'D.I.Mendeleyevning PSCE dan nechta element metallar hisoblanadi?', '13', '88', '56','b'),
('Fizika','Hajmi va zichligi ma''lum bo''lgan massani formulasini ayting', 'm=pV', 'm=V/p', 'm=Pv2', 'a' ),
('Fizika', 'Kema qayerda suvda chuqurroq cho''kadi: dengizda yoki daryoda?', 'Daryoda', 'Dengizda', 'Bir xil', 'a' ),
('Fizika', 'Har qanday ob''ekt atrofida qanday maydon paydo bo''ladi', 'Magnit', 'Gravitatsion','Elektr', 'b'),
('Fizika','Manfiy elektr zaryadli barqaror elementar zarracha qanday nomlanadi', 'Elektron', 'Pozitron','Patron', 'a'),
('Fizika','Qayerda toshni ko''tarish osonroq: quruqlikdami yoki suvdami?', 'Bir xil', 'Quruqlikda','Suvda', 'c'),
('Fizika','Ishning o''lchov birligi nima deyiladi?', 'Joule', 'Paskal','Nyuton', 'a'),
('Fizika','Nyutonning 3-qonunining ta''sir kuchi va reaksiya haqidagi formulasi qanday ko''rinishga ega?', 'Erish nuqtasi', 'Qaynash nuqtasi','Kristallanish nuqtasi', 'b'),
('Fizika','Nyutonning 3-qonunining ta''sir kuchi va reaksiya haqidagi formulasi qanday ko''rinishga ega','F1=F2', 'F=ma','F=mc2', 'a'),
('Fizika','Xo''jalik razvetkasida qanday turdagi tok bor','O''zgaruvchan', 'Doimiy','Ikkalasi ham', 'a'),
('Fizika','1 kg paxta og''irmi 1 kg metallmi','Paxta', 'Bir xil','Metall', 'b');