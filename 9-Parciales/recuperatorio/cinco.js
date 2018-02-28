function Mostrar()
{
	var mes;

	mes=prompt("ingrese un mes");

	switch(mes)
	{
		case "Diciembre":
			alert("Se vienen las fiestas");
			break;
		case "Enero":
			alert("comienza el año");
			break;
		default:
			alert("no es ni Diciembre ni Enero");

	}

}
