function Mostrar()
{
	var edades=0;
	var sexo=0;
	var promedioEdades;
	var acumuladorEdades=0;
	var edadMinima=200;
	var contadorVaronesMayores=0;

	for(contador=0;contador<10;contador++)
	{
		edades=prompt("ingrese una edad");
		edades=parseInt(edades);
		while(edades<0||edades>100||isNaN(edades))
		{
			edades=prompt("Edad incorrecta ,ingrese una edad entre 0 y 100");
			edades=parseInt(edades);
		}
		sexo=prompt("ingrese un sexo");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error, ingrese un sexo f o m");
		}
		
		if (sexo=="m"&&edades>19)
		 {
		 	contadorVaronesMayores++;
		 }
		 if (contador==1)
		  {
		  	edadMinima=edades;
		  }
		  else
		  {
		  	if (edades<edadMinima)
		  	 {
		  	 	edadMinima=edades;
		  	 }
		  }
		acumuladorEdades=acumuladorEdades+edades;
	}//llave For
	promedioEdades=acumuladorEdades/contador;
	alert("promedio de edades: "+promedioEdades);
	alert("la edad mas baja: "+edadMinima);
	alert("varones mayores a 20años: "+contadorVaronesMayores);
}
