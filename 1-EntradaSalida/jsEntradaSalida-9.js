/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var sueldoAumento;
	var resultado;

	sueldo=document.getElementById('sueldo').value;

	sueldo=parseInt(sueldo);
	sueldoAumento=sueldo*0.1;
	resultado=sueldo+sueldoAumento;
	
	document.getElementById('resultado').value=resultado;
	
}
