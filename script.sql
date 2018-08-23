use crudNodejs;
create table customer(
    id int UNSIGNED auto_increment primary key,
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(15)
);

insert into customer(name,address,phone) 
values('kevin','cra77','90393');
insert into customer(name,address,phone) 
values('juan','susr88','555');
insert into customer(name,address,phone) 
values('kim','cra37','888');
