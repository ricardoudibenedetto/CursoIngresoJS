function Mostrar()
{
 var precioUno;
 var precioDos;
 var precioTres;
 var promedio;
 var acumuladorPrecio;

 precioUno=document.getElementById('precioUno').value;
 precioDos=document.getElementById('precioDos').value;
 precioTres=document.getElementById('precioTres').value;
 precioUno=parseInt(precioUno);
 precioDos=parseInt(precioDos);
 precioTres=parseInt(precioTres);

 acumuladorPrecio=precioUno+precioDos+precioTres;

 promedio=acumuladorPrecio/3;

 alert("suma de los precios: "+acumuladorPrecio);
 alert("el promedio de los numeros es: "+promedio);
}
