Create Database Clínica;
Use Clínica;

create table Médico (
Id int not null auto_increment primary key,
IdEspecialidade int not null,
Nome Varchar (255),
BI Varchar (15),
NIF varchar (15),
Sexo char(1)
);

Create table Pacientes(
Id int not null primary key auto_increment,
IdSeguradora int,
Nome varchar (255),
Idade int,
Peso float,
Sexo char (1),
GrupoSanguineo Varchar(255),
Telefone int,
Morada Varchar (255)
);

Create table Funcionários (
Id int not null primary key auto_increment,
Nome Varchar(255),
BI Varchar (15),
NIF varchar (15),
Idade int,
Sexo char (1)
);

Create table Consultas (
Id int not null primary key auto_increment,
IdMedico int,
IdFuncionarios int,
IdPacientes int,
IdEspecialidade int
);
select * from Consultas;

Create table Seguradora (
Id int not null primary key auto_increment,
Nome Varchar (255),
NIF Varchar (255)
);

Create table Especialidades (
Id int not null primary key auto_increment,
Designacao Varchar (255)
);

-- Fazendo Relacionamentos 
Alter table Médico 
Add Constraint fkMedEspec foreign key (IdEspecialidade) references Especialidades (Id);

Alter table Pacientes 
Add Constraint fkPaciSeguro foreign key (IdSeguradora) references Seguradora (Id);

Alter table Consultas
Add Constraint fkConsultasMed foreign key (IdMedico) references Médico (Id);

Alter table Consultas
Add Constraint fkConsuPac foreign key (IdPacientes) references Pacientes (Id);

Alter table Consultas 
Add Constraint fkConsuEspecie foreign key (IdEspecialidade) references Especialidades (Id);




