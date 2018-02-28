function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var sumaNumeros;

	numeroUno=prompt("ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese un numero");
	numeroDos=parseInt(numeroDos);
 	sumaNumeros=numeroUno+numeroDos;
 	if (sumaNumeros==0)
 	 {
 	 	document.write("su numero es igual a cero");
 	 }
 	 else
 	 {
 	 	if (sumaNumeros>0)
 	 	 {
 	 	 	document.write("su numero es positivo");
 	 	 }
 	 	 else
 	 	 {
 	 	 	document.write("su numero es negativo");
 	 	 }
 	 }

}
