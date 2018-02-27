function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivos=0;
	var negativos=0;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadDeCeros=0;
	var cantidadNumerosPares=0;
	var promedioNumerosPositivos=0;
	var promedioNumerosNegativos=0;
	var resultadoResta=0;
	var numero;

	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		//SUMA NEGATIVOS Y POSITIVOS
		if (numero<0)
		 {
		 	sumaNegativos=sumaNegativos+numero;
		 }
		 else
		 {
		 	sumaPositivos=sumaPositivos+numero;
		 }
		 //CANTIDAD DE 0 POSITIVOS Y NEGATIVOS
		 if (numero==0)
		  {
		  	cantidadDeCeros++;
		  	
		  }
		  else
		  {
		  	if (numero<0)
		  	 {
		  	 	cantidadNegativos++;
		  	 	negativos=negativos+numero;
		  	 	
		  	 }
		  	 else
		  	 {
		  	 	cantidadPositivos++;
		  	 	positivos=positivos+numero;
		  	 }
		  }

		  //CANTIDAD NUMEROS PARES
		  if (numero%2==0)
		   {
		   	cantidadNumerosPares++
		   }




		
		respuesta=prompt("no para salir");
	}//LLAVE WHILE

	promedioNumerosNegativos=negativos/cantidadNegativos;
	promedioNumerosPositivos=positivos/cantidadPositivos;
	resultadoResta=positivos+negativos;


	document.write("<br>"+"suma de los negativos: "+sumaNegativos);
	document.write("<br>"+"suma de los positivos: "+sumaPositivos);
	document.write("<br>"+"cantidad de ceros: "+cantidadDeCeros);
	document.write("<br>"+"cantidad de positivos: "+cantidadPositivos);
	document.write("<br>"+"cantidad de negativos: "+cantidadNegativos);
	document.write("<br>"+"cantidad de pares: "+cantidadNumerosPares);
	document.write("<br>"+"promedios de numeros positivos : "+promedioNumerosPositivos);
	document.write("<br>"+"promedio numeros negativos: "+promedioNumerosNegativos);
	document.write("<br>"+"resultado resta positivos - negativos: "+resultadoResta);




}//FIN DE LA FUNCIÓN