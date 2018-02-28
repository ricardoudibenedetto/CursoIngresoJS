//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*no usar while no validar solo (if) se ingresan dos numeros
 si son iguales se concatenan 
 si el mayor es el primero se multiplican 
de lo contrario se restan */
function Mostrar()
{
	//alert("Funciona 4-if");
	 var numeroUno;
	 var numeroDos;
	 var resultado;
	 var resultadoPar;
	 numeroUno=prompt("ingrese un numero");
	 numeroDos=prompt("ingrese un numero");

	 if(numeroUno==numeroDos)
	 {
	 	resultado=numeroUno+numeroDos;
	 }
	 else
	 {
	 		numeroUno=parseInt(numeroUno);
	 	 	numeroDos=parseInt(numeroDos);
	 	if (numeroUno>numeroDos)
	 	 {
	 	 	
	 	 	resultado=numeroUno*numeroDos;
	 	 }
	 	 else
	 	 {
	 	 	
	 	 	resultado=numeroUno-numeroDos;
	 	 }
	 }
	 if (resultado==0)
	  {

	  }
	  else
	  {
	  	if (resultado%2==0)
	  	 {
	  	 	resultadoPar="es par";
	  	 	resultado=resultado+resultadoPar;
	  	 }
	  }


	 document.write(resultado);
}

