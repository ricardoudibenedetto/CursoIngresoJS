function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	var acumulador=0;

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

	if(numero>-1){
		positivo=numero+positivo;
	}
	else{
		negativo=numero*negativo;
	}
		respuesta=prompt("si para ingresar otro numero");


	}
	
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN