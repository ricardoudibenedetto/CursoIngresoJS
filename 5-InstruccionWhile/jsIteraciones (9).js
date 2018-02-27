function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo=-1000000;
	var minimo=1000000;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("no para salir");

		if (contador==1)
	 {
	 	maximo=numero;
	 	minimo=numero;
	 } 
	 else
	  {
	  	if (numero>maximo)
	  	 {
	  	 	maximo=numero;

	  	 }
	  	 if (numero<numero)
	  	  {
	  	  	minimo=numero;
	  	  }

	  }
	
	}//LLAVE WHILE

	

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN