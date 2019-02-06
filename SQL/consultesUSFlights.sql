use USAirlineFlights2;

select * from Flights;
select * from Carriers;
select * from USAirports;

/* Consultes*/


/*1. Quantitat de registres de la taula de vols*/

select count(*) as 'Quantitat registres vols' from Flights;

/*2. Retard promig de sortida i arribada segons l’aeroport origen.*/

select avg(DepDelay) as 'Retard promig sortida', 
avg(ArrDelay) as 'Retard promig arribada', 
Origin as 'Origen' 
from Flights group by Origin;

/*3. Retard promig d’arribada dels vols, per mesos i segons l’aeroport origen.
A més, volen que els resultat es mostrin de la següent forma (fixa’t en l’ordre de les files):

LAX, 2000, 01, retard
LAX,2000, 02,  retard
LAX,2000, 03,  retard ...
LAX,2000, 12,  retard
LAX, 2001 , 01,  retard ...
LAX,2001, 12,  retard
ONT , 2000 , 01,  retard
ONT, 2000,  02,  retard
etc.*/

select Origin as 'Origen', colYear as 'Any', colMonth as 'Mes', 
AVG(ArrTime) as 'Retard promig arribades' 
from Flights 
group by Origin, colYear, colMonth 
order by Origin, colYear, colMonth;

/* 4.Retard promig d’arribada dels vols, per mesos i segons l’aeroport origen (mateixa consulta 
que abans i amb el mateix ordre). Però a més, ara volen que en comptes del codi de l’aeroport 
es mostri el nom de la ciutat.*/

select USAirports.City as 'Origen', colYear as 'Any', colMonth as 'Mes', 
AVG(ArrTime) as 'Retard promig arribades' 
from Flights 
inner join USAirports 
on Flights.Origin=USAirports.IATA
group by origin, colYear,colMonth 
order by origin, colYear,colMonth;

/* 5.Les companyies amb més vols cancelats. 
A més, han d’estar ordenades de forma que les companyies amb més cancelacions apareguin les primeres.*/

select  Carriers.Description as 'Companyia', count(*) as 'Cancelacions'
from Flights
inner join Carriers 
on Carriers.CarrierCode=Flights.UniqueCarrier
where Flights.Cancelled=1
group by Carriers.CarrierCode
order by Cancelacions desc;

/* 6.L’identificador dels 10 avions que més distància han recorregut fent vols.*/

select TailNum as 'Id Avió', sum(Distance) as 'Distancia'
from Flights
group by TailNum
order by 'Distancia' desc
limit 10;

/* 7.Companyies amb el seu retard promig només d’aquelles les quals 
els seus vols arriben al seu destí amb un retràs promig major de 10 minuts.*/

select UniqueCarrier as 'Companyia', avg(ArrDelay) as 'Retard'
from Flights 
group by UniqueCarrier having Retard>10;



