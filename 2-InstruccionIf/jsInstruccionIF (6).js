function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value;
//si la persona es mayor a 17 es mayor de edad
if(edad>17)
{
	alert("Usted es mayor de edad");

}
//sino es:
else
{
//si es mayor de 12 y menor a 18 es adolecente
	if(edad<18&&edad>12)
	{
		alert("usted es adolecente");
	}
//sino es los que falta
	else
	{
		alert("usted es un niño");
	}
	}




}//FIN DE LA FUNCIÓN