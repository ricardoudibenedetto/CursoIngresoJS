/*ingreso de alumnos 
, pedir nombre,
 cuantos alumnos ingrese
 ,final document.write ingrese 9 alumnos*/
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

	while(continuar!="no")
	{
		nombreAlumnos=prompt("ingrese nombre de alumno: ");
		cantidadDeAlumnos=cantidadDeAlumnos+1;
		nota=prompt("ingrese un nota");		
 		nota=parseInt(nota);
 		while(nota<0 ||nota>10)
 		{
 			nota=prompt("ingrese un nota");		
 			nota=parseInt(nota);

 		}
 		sexo=prompt("ingrese sexo f o m");
 		while(sexo!="f" || sexo!="m")
 		{
 			sexo=prompt("ingrese sexo");		
 		}
 		if (sexo="f") 
 		{
 			sexoF+1;
 		}
 		else{
 			sexoM+1;
 		}

 		acumulador=acumulador+nota;

		
		continuar=prompt("No para salir ");
	}
	promedio=acumulador/cantidadDeAlumnos;

	document.write("La cantidad de alumnos ingresados son: "+cantidadDeAlumnos);
	document.write("el promedio de las notas es: "+promedio);
	document.write("La cantidad de sexo masculino es: "+sexoM);
	document.write("La cantidad de sexo femenino es: "+sexoF);

}
