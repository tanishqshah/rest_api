create table EmpRecord(

	EmpCode integer,
	Name varchar(50),
	Designation varchar(50),
	Email varchar(50),
	Location varchar(50)
);

insert into EmpRecord values(1,'Tanisqh','Developer','t@gmail.com','Bangalore');
insert into EmpRecord values(2,'Gaurav','SDE3','g@gmail.com','Gurgaon');
insert into EmpRecord values(3,'hrithik','Manager','h@gmail.com','Mumbai');
insert into EmpRecord values(4,'Kartik','Manager','k@gmail.com','Pune');


select * from EmpRecord;