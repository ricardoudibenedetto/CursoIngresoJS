function Mostrar()
{
	var numeroUno=0;
	var numeroDos=0;
	var numeroTres=0;
	var sumaDeNumeros=0;
	var promedio=0;
	var contador=0;
	var numeroMaximo=-1;
	var numeroMinimo=4;

	numeroUno=prompt("ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro numero");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("ingrese el ultimo numero");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos&&numeroUno>numeroTres)
	{
		numeroMaximo=numeroUno;

	}
	else
	{
		if (numeroDos>numeroUno&&numeroDos>numeroTres)
		 {
		 	numeroMaximo=numeroDos;
		 }
		 else
		 {
		 	numeroMaximo=numeroTres;
		 }
	}
	if(numeroUno<numeroDos&&numeroUno<numeroTres)
	{
		numeroMinimo=numeroUno;

	}
	else
	{
		if (numeroDos<numeroUno&&numeroDos<numeroTres)
		 {
		 	numeroMinimo=numeroDos;
		 }
		 else
		 {
		 	numeroMinimo=numeroTres;
		 }
	}
	alert("su numero maximos es : "+numeroMaximo+"y su numero minimo es "+numeroMinimo);
	


}
