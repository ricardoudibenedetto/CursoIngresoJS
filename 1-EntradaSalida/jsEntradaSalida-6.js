/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

	var numerUno;	
	var numeroDos;
	var resultado;

	numerUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numerUno=parseInt(numerUno);
	numeroDos=parseInt(numeroDos);

	resultado=numerUno+numeroDos;
	alert("La suma es: "+resultado);

}

