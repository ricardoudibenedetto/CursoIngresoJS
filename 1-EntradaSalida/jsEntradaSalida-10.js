/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var descuento;
	var importeFinal;
	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	descuento=0.75; //el descuento es 25%
	importeFinal=importe*descuento;
	document.getElementById('resultado').value=importeFinal;
}
