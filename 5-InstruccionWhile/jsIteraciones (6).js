function Mostrar()
{

	var contador=0; //se suma con un numero
	var acumulador=0;// se suma con una variable
	var numero;
 	var promedio;
 	//o var interacion =5 y en el while comparar al contador con las interaciones
 	while(contador<5){
 		contador++;
 		numero=prompt("ingrese un numero");
 		numero=parseInt(numero);
 		acumulador=acumulador+numero;
 	}
 	promedio=acumulador/5
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;


}//FIN DE LA FUNCIÓN