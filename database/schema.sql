drop database if exists burgerDB;
create databse burgerDB;

use burgerDB;

create table burgers (
	id int auto_increment not null,
	name varchar(255) not null,
	devoured boolean default false,
	primary key(id)
);