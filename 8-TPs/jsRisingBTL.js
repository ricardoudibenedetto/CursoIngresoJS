/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidad;

	edad=prompt("ingrese una edad");
	edad=parseInt(edad);
	while(edad<18||edad>90|| isNaN(edad))
	{
		edad=prompt("Error, ingrese una edad entre 18 y 90 años");
		edad=parseInt(edad);
	}
	sexo=prompt("ingrese una sexo");
	while(sexo!="F"&&sexo!="M")
	{
		sexo=prompt("Error, ingrese un sexo F o M");
		
	}
	switch(sexo)
		{
			case "F":
				sexo="Femenino";
				break;
			case "M":
				sexo="Masculino";
				break; 
		 }

	estadoCivil=prompt("ingrese un estado civil 1 para soltero, 2 para casado, 3 para divorciados, 4para viudos ");
	while(estadoCivil>4||estadoCivil<0|| isNaN(estadoCivil))
	{
		estadoCivil=prompt("Error, ingrese un estado civil 1 para soltero, 2 para casado, 3 para divorciados, 4para viudos ");
	}
	switch(estadoCivil)
		{
			case "1":
				estadoCivil="soltero";
				break;
			case "2":
				estadoCivil="casado";
				break;
			case "3":
				estadoCivil="divorciado";
				break;
			case "4":
				estadoCivil="viudo";
				break;
		}
	sueldoBruto=prompt("ingrese un sueldo (bruto)");
	sueldoBruto=parseInt(sueldoBruto);

	while(sueldoBruto<8000||isNaN(sueldoBruto))
	{
		sueldoBruto=prompt("Error, ingrese un sueldo (bruto)");
		sueldoBruto=parseInt(sueldoBruto);
	}

	numeroDeLegajo=prompt("ingrese un numero de legajo");
	numeroDeLegajo=parseInt(numeroDeLegajo,10)
	while(numeroDeLegajo<1000||isNaN(numeroDeLegajo)||numeroDeLegajo>9999)
	{
		numeroDeLegajo=prompt("Error, ingrese un numero de legajo");
	}

	nacionalidad=prompt("ingrese nacionalidad A para argentino E para extranjero y N para nacionalizados");
	while(nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N")
	{
		nacionalidad=prompt("Error, ingrese nacionalidad A para argentino E para extranjero y N para nacionalizados");
	}
	switch(nacionalidad)
		{
			case "A":
				nacionalidad="Argentino";
				break;
			case "E":
				nacionalidad="extranjero";
				break;
			case "N":
				nacionalidad="nacionalizados";
				break;
			}
	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=sueldoBruto;
	document.getElementById('Legajo').value=numeroDeLegajo;
	document.getElementById('Nacionalidad').value=nacionalidad;
 
}
