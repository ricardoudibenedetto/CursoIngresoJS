function Mostrar()
{

	//var repetciones = prompt("ingrese el número de repeticiones");
	var numeroRandom;
	var contadorDe0=0;
	var contadorDe1=0;
	var contadorDe2=0;
	var contadorDe3=0;
	var contadorDe4=0;
	var contadorDe5=0;
	var contadorDe6=0;
	var contadorDe7=0;
	var contadorDe8=0;
	var contadorDe9=0;

	for (contador=0;contador<10000;contador++)
	{
		numeroRandom=Math.floor(Math.random() * 10);
		document.write("<br>"+numeroRandom); 
		switch(numeroRandom)
		{
			case 0:
				contadorDe0++;
				break;
			case 1:
				contadorDe1++;
				break;
			case 2:
				contadorDe2++;
				break;
			case 3:
				contadorDe3++;
				break;
			case 4:
				contadorDe4++;
				break;
			case 5:
				contadorDe5++;
				break;
			case 6:
				contadorDe6++;
				break;
			case 7:
				contadorDe7++;
				break;
			case 8:
				contadorDe8++;
				break;
			case 9:
				contadorDe9++;
				break;
		}
	}
	document.write("<br>"+"contador de 0: "+contadorDe0);
	document.write("<br>"+"contador de 1: "+contadorDe1);
	document.write("<br>"+"contador de 2: "+contadorDe2);
	document.write("<br>"+"contador de 3: "+contadorDe3);
	document.write("<br>"+"contador de 4: "+contadorDe4);
	document.write("<br>"+"contador de 5: "+contadorDe5);
	document.write("<br>"+"contador de 6: "+contadorDe6);
	document.write("<br>"+"contador de 7: "+contadorDe7);
	document.write("<br>"+"contador de 8: "+contadorDe8);
	document.write("<br>"+"contador de 9: "+contadorDe9);
	



}
//FIN DE LA FUNCIÓN