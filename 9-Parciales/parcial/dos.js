function Mostrar()
{
  var importe;
  var importefinal;
  var importeiva;

  importe=prompt("Imtrodusca el inporte de un producto");

 importeiva=importe*0.21;

 importefinal=parseInt(importe)+parseInt(importeiva);

 document.getElementById('importeFinal').value=importefinal;
}
