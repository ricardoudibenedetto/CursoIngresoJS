//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
  var importe;
  var importefinal;
  var importeiva;

  importe=prompt("Imtrodusca el inporte de un producto");
  importe=parseInt(importe)
  importeiva=importe*0.21;

  importefinal=importe+importeiva;

  document.getElementById('importe').value=importefinal;
	
}

