#saber.sql


create table tipos(
id integer primary key autoincrement,
cod text unique,
tag text,
txt text);

insert into tipos (cod,tag,txt) values ('WHO','Personas','Autores, pensadores, etc');
insert into tipos (cod,tag,txt) values ('CLAN','Grupos','Clubes, partidos, Religiones, etc');
insert into tipos (cod,tag,txt) values ('WHEN','Tiempo','Eras, periodos, años');
insert into tipos (cod,tag,txt) values ('ZONA','Lugares','Paises, zonas, areas, etc');
insert into tipos (cod,tag,txt) values ('WHAT','Conceptos','Cerebro, coche, casa, etc');
insert into tipos (cod,tag,txt) values ('IDEA','Ideas','Libro, partitura, algoritmo, etc');
insert into tipos (cod,tag,txt) values ('LOGIA','Ciencias','Geologia, Biologia,Matemáticas, etc');

create table nodos(
id integer primary key autoincrement,
tag text,
ctg text references tipos(cod),
txt text);

create table arcos (
idini	integer references nodos(id),
idfin	integer references nodos(id),
txt text
);