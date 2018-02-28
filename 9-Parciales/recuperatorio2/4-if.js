//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese un numero");
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	 {
	 	resultado=numeroUno*numeroDos;
	 }
	 else
	 {
	 	if (numeroUno>numeroDos)
	 	 {
	 	 	resultado=numeroUno-numeroDos;
	 	 }
	 	 else
	 	 {
	 	 	resultado=numeroUno+numeroDos;
	 	 }
	 }
	alert("el resultado es : "+resultado);
}

