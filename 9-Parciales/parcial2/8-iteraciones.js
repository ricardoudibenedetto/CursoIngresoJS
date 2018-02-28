//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*se ingresa hasta q el usuario quiera
el nombre de un animal
el peso del mismo 
validar mayor a 0
temperatura del abitat de este animal
validar entre -40 40
informar:
cantidad de temperaturas pares  :cantidadTempPar
cantidad temperaturas impares	:cantidadTempImpar
nombre de animal mas pesado		:nombrePesoMaximo
nombre animal menosn pesado		:nombrePesoMinimo
cantidad de animales que viven en abitat menores a 0 inclucive :animalesTempMenor0
promedio del peso de todos los animales 						:promedioPesoAnimales
temperatura maxima y minima*/
function Mostrar()
{
	var nombre;
	var nombrePesoMaximo;
	var nombrePesoMinimo;
	var peso;
	var pesoMaximo=-1;
	var pesoMinimo=100000000000000;
	var temperatura;
	var temperaturaMaxima=-50;
	var temperaturaMinima=50;
	var cantidadTempPar=0;
	var cantidadTempImpar=0;
	var animalesTempMenor0=0;
	var respuesta="si";
	var cantidadDeAnimales=0;
	var pesoTotal=0;

	while(respuesta!="no")
	{	cantidadDeAnimales++;
		nombre=prompt("ingrese nombre de un animal");
		peso=prompt("ingrese un peso ");
		peso=parseInt(peso);
		while(peso<0||isNaN(peso))
		{
			peso=prompt("Error, ingrese un peso ");
			peso=parseInt(peso);
		}
		temperatura=prompt("ingrese una temperatura");
		temperatura=parseInt(temperatura);
		while(temperatura<-40||temperatura>40||isNaN(temperatura))
		{
			temperatura=prompt("Error ,ingrese una temperatura");
			temperatura=parseInt(temperatura);
		}
		if (temperatura==0)
		 {

		 }
		 else
		 {
		 	if (temperatura%2==0)
		 	 {
		 	 	cantidadTempPar++;
		 	 }
		 	 else
		 	 {
		 	 	cantidadTempImpar
		 	 }
		 }

		 if (cantidadDeAnimales==1)
		  {
		  	nombrePesoMaximo=nombre;
		  	nombrePesoMinimo=nombre;
		  	pesoMaximo=peso;
		  	pesoMinimo=peso;
		  }
		  else
		  {
		  	if (peso>pesoMaximo)
		  	 {
		  	 	nombrePesoMaximo=nombre;
		  	 	pesoMaximo=peso;
		  	 }
		  	 if (peso<pesoMinimo)
		  	 {
		  	 	nombrePesoMinimo=nombre;
		  	 	pesoMinimo=peso;
		  	 }
		  }

		  if (temperatura<1)
		   {
		   	animalesTempMenor0++;
		   }

		   pesoTotal=pesoTotal+peso;


		   if (cantidadDeAnimales==1)
		    {
		    	temperaturaMaxima=temperatura;
		    	temperaturaMinima=temperatura;
		    }
		    else
		    {
		    	if (temperatura>temperaturaMaxima)
		    	 {
		    	 	temperaturaMaxima=temperatura;
		    	 }
		    	 if (temperatura<temperaturaMinima) 
		    	 {
		    	 	temperaturaMinima=temperatura;
		    	 }
		    }

		respuesta=prompt("No para salir");
	}
	promedioPesoAnimales=pesoTotal/cantidadDeAnimales;
	document.write("<br>"+"la cantidad de temperaturas pares son: "+cantidadTempPar);
	document.write("<br>"+"la cantidad de temperaturas impares son: "+cantidadTempImpar);
	document.write("<br>"+"el animal mas pesado es : "+nombrePesoMaximo);
	document.write("<br>"+"el animal menos pesado es : "+nombrePesoMinimo);
	document.write("<br>"+"la cantidad de animales que viven en temperaturas inferiores a 0 es: "+animalesTempMenor0);
	document.write("<br>"+"el promedio total del peso de los animales es: "+promedioPesoAnimales);
	document.write("<br>"+"la temperatura maxima es : "+temperaturaMaxima);
	document.write("<br>"+"la temperatura minima es: "+temperaturaMinima);
}

