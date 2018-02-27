/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var importe;
	var importeFinal;
	var aumento;
	importe=document.getElementById('sueldo').value
	importe=parseInt(importe);
	aumento=1.1;
	importeFinal=importe*aumento
	document.getElementById('resultado').value=importeFinal;
}
