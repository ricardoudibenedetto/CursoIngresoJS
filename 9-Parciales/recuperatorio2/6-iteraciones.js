//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var importe;
	var importeMaximo=-100000000;
	var importeMinimo=100000000;
	var iteraciones=7;
	var contador=0;

	while(contador<iteraciones)
	{
		contador++;
		importe=prompt("ingrese un importe");
		importe=parseInt(importe);
		while(importe<0)
		{
			importe=prompt("Error, ingrese un importe mayor a cero");
			importe=parseInt(importe);
		}

		if (contador==1)
		 {
		 	importeMaximo=importe;
		 	importeMinimo=importe;

		 }
		 else
		 {
		 	if (importe>importeMaximo)
		 	 {
		 	 	importeMaximo=importe;
		 	 }
		 	 if (importe<importeMinimo)
		 	  {
		 	  	importeMinimo=importe;
		 	  }
		 }
	}
	alert("el importe mayor es : "+importeMaximo);
	alert("El importe menor es : "+ importeMinimo);
	
}

