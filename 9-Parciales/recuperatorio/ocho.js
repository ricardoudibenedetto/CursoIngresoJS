function Mostrar()
{
	var numeros;
	var respuesta="si";
	var contadorNumerosPares=0;
	var promedioNumeros=0;
	var acumuladorNumeros=0;
	var contador=0;
	var maximo=-100000;
	var minimo=100000;
	while(respuesta!="no")
	{
		contador++;
		numeros=prompt("ingrese un numero");
		numeros=parseInt(numeros);
		while(numeros<0||isNaN(numeros))
		{
			numeros=prompt("ingrese un numero");
		    numeros=parseInt(numeros);
		}
		if(numeros%2==0)
		{
			contadorNumerosPares++;
		}
		if (contador==1) 
		{
			maximo=numeros;
			minimo=numeros;
		}
		else
		{
			if (numeros>maximo)
			 {
			 	maximo=numeros;
			 }
			 if (numeros<minimo)
			  {
			  	minimo=numeros;
			  }
		}
		acumuladorNumeros=acumuladorNumeros+numeros;

		respuesta=prompt("No para salir");
	}//llave While
	promedioNumeros=acumuladorNumeros/contador;
	document.write("<br>"+"La cantidad de numeros pares es: "+contadorNumerosPares);
	document.write("<br>"+"El promedio de todos los numeros es :"+promedioNumeros);
	document.write("<br>"+"la suma de todos los numeros es: "+acumuladorNumeros);
	document.write("<br>"+"numero maximo es : "+maximo);
	document.write("<br>"+"numero minimo es : "+minimo);
}
