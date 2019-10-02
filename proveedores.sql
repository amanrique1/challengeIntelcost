create table proveedores (
	id INT NOT NULL AUTO_INCREMENT,
	nombres VARCHAR(60) NOT NULL,
	apellidos VARCHAR(60) NOT NULL,
	edad SMALLINT NOT NULL,
	correo_electronico VARCHAR(150) NOT NULL,
	celular BIGINT NOT NULL,
	telefono VARCHAR(20),
	registro DATETIME NOT NULL,
	UNIQUE (correo_electronico),
	PRIMARY KEY (id)
);
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Euell', 'Whear', 71, 'ewhear0@sourceforge.net', 1784514947, '8245693107', '2019-05-26 21:12:55');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Caddric', 'Barcke', 26, 'cbarcke1@about.me', 4832546403, '7477353078', '2019-02-15 20:15:01');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Lonnie', 'Lindup', 39, 'llindup2@meetup.com', 6699819785, '7758062955', '2019-03-18 11:03:04');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Konstantine', 'Parrin', 9, 'kparrin3@eepurl.com', 9021802776, '7924435179', '2018-12-24 21:36:16');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Bobby', 'Carrett', 66, 'bcarrett4@xing.com', 4461889652, '9564912579', '2019-04-09 07:05:28');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Coop', 'Albone', 63, 'calbone5@vinaora.com', 4929303295, '3155581161', '2019-07-21 14:20:25');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Glynda', 'Confait', 13, 'gconfait6@blogspot.com', 9159525736, '3891669508', '2019-04-22 07:03:23');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Killie', 'Stubbs', 65, 'kstubbs7@deviantart.com', 9709561557, '3917798211', '2019-09-01 13:26:59');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Brendan', 'Hallwood', 6, 'bhallwood8@multiply.com', 4007425852, '4438120604', '2019-05-13 20:26:07');
insert into proveedores (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) values ('Harriott', 'Teas', 69, 'hteas9@reverbnation.com', 5191419116, '2122641570', '2019-09-07 01:54:15');
