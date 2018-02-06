/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{

	var nombre;
	//esto es un comentario de una linea 
	//alert(nombre);
	/*alert("nombre");
	nombre="Ricardo";
	alert(nombre);
	*/
	//var person = prompt("Please enter your name", "Harry Potter");
	//la coma en el prompt es para definir por defecto
	nombre=prompt("ingrese nombre ", "natalia natalia");
	//se concatena con el mas + 
	alert("su nombre es: "+nombre);
}

