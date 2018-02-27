function Mostrar()
{
	var numeros;
	var respuesta="si";
	var promedioNumerosPositivos=0;
	var cantidadPares=0;
	var cantidadImpares=0;
	var numeroMaximo=-100;
	var numeroMinimo=100;
	var contador=0;
	var sumaPositivos=0;
	var cantidadNumerosPositivos=0;
	var contadorDeCero=0;

	while(respuesta!="no")
	{	contador++;
		numeros=prompt("ingrese un numero");
		numeros=parseInt(numeros);

		while(numeros<-50||numeros>50||isNaN(numeros))
		{
			numeros=prompt("Numero incorrecto, ingrese un numero del -50 al 50");

		}
		if (numeros==0)
		 {
		 	contadorDeCero++;
		 }
		else{
			if(numeros%2==0)
		{
			cantidadPares++;
		}
		else
		{
			cantidadImpares++;
		}
		}
		if (numeros>0)
		 {
		 	cantidadNumerosPositivos++;
		 	sumaPositivos=sumaPositivos+numeros;
		 	promedioNumerosPositivos=sumaPositivos/cantidadNumerosPositivos;
		 }
		 if (contador==1)
		  {
		  	numeroMaximo=numeros;
		  	numeroMinimo=numeros;
		  }
		  else
		  {
		  	if (numeros>numeroMaximo)
		  	 {
		  	 	numeroMaximo=numeros;
		  	 }
		  	 if (numeros<numeroMinimo)
		  	  {
		  	  	numeroMinimo=numeros;
		  	  }
		  }
		respuesta=prompt("Ingrese no para salir");
	}//LLAVE WHILE 

	document.write("<br>"+"la cantidad de numeros pares es : "+cantidadPares);
	document.write("<br>"+"la cantidad de numeros impares es : "+cantidadImpares);
	document.write("<br>"+"El promedio de los numeros positivos es : "+promedioNumerosPositivos);
	document.write("<br>"+"Numero maximo es : "+numeroMaximo);
	document.write("<br>"+"Numero minimo es : "+numeroMinimo);
}


















/*var importe;
	


	//importe=prompt("ingrese un importe").value;

	importe=parseInt(importe);

	for (contador=24;contador<24;contador++)
	 {

		importe=prompt("ingrese un importe").value;

	}*/