function Mostrar()
{
	var sexo;
	var sexo = prompt("ingrese f ó m .");

	while(sexo!="f"&&sexo!="m")
	{
		sexo = prompt("error, ingrese f ó m .");
	}
	if (sexo=="f")
	 {
	 	sexo="femenino";
	 }
	  else 
	  {
	  	sexo="masculino";
	  }




	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN