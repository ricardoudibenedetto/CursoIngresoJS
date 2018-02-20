function Mostrar()
{
	var numero;
	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);
	while(numero>10 || numero<0){
		numero = prompt("numero incorrecto, ingrese un número entre 0 y 10.");

	}

	alert("numero correcto");
}//FIN DE LA FUNCIÓN