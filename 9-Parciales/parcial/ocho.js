/*ingreso de alumnos 
, pedir nombre,
 cuantos alumnos ingrese
 ,final document.write ingrese 9 alumnos
 cantidad de varones desaprobados,
 nombre de mejor nota*/
function Mostrar()
{
	var nombreAlumnos;
	var cantidadDeAlumnos=0;
	var continuar="";
	var acumulador=0;
	var promedio;
	var sexo;
	var sexoM=0;
	var sexoF=0;
	var desaprobadosM=0;
	var maximo=0;
	var nombreMejorNota=""; //Primer nombre, El maximo




	while(continuar!="no")
	{
		nombreAlumnos=prompt("ingrese nombre de alumno: ");
		cantidadDeAlumnos=cantidadDeAlumnos+1;
		//NOTAS
		nota=prompt("ingrese un nota");		
 		nota=parseInt(nota);
 		while(nota<0 ||nota>10)
 		{
 			nota=prompt("ingrese un nota");		
 			nota=parseInt(nota);
 		}
 		//CANTIDAD DE SEXO Y SUMA 
 		sexo=prompt("ingrese sexo f o m");
 		while(sexo!="f" && sexo!="m")
 		{
 			sexo=prompt("ingrese sexo");		
 		}
 		if (sexo=="f") 
 		{
 			sexoF++;
 		}
 		else
 		{
 			sexoM++;
 		}

 		//CANTIDAD DE VARONES desaprobados
 		if(sexoM&&nota<4)
 		 {
 		 	desaprobadosM++;
 		 }
 		 //Nombre de la mejor nota "el primero ", sacar maximo!!
 		 if(cantidadDeAlumnos==1)
 		 {
 		 	maximo=nota;
 		 	nombreMejorNota=nombreAlumnos;
 		 }
 		 else
 		 {
 		 	if (nota>maximo)
 		 	 {
 		 	 	maximo=nota;
 		 	 	nombreMejorNota=nombreAlumnos;
 		 	 }

 		 }
 		 

 		acumulador=acumulador+nota;
 		continuar=prompt("No para salir ");
	}
	promedio=acumulador/cantidadDeAlumnos;

	document.write("La cantidad de alumnos ingresados son: "+cantidadDeAlumnos);
	document.write("<br>"+"el promedio de las notas es: "+promedio);
	document.write("<br>"+"La cantidad de sexo masculino es: "+sexoM);
	document.write("<br>"+"La cantidad de sexo femenino es: "+sexoF);
	document.write("<br>"+"La cantidad de sexo masculino desaprobados es: "+desaprobadosM);
	document.write("<br>"+"El nombre de la mejor nota es: "+nombreMejorNota);


}
