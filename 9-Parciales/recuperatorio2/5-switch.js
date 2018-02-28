//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 5-Switch");
	var mes;
	mes=prompt("ingrese un mes del año");

	switch(mes)
	{
		case "enero":
		case "febrero":
			alert("veranito!!!");
			break;
		default:
		 	alert("extraño enero y febrero");
	}
	
}

