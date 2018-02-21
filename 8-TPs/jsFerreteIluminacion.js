/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
	{
	  var precioLamparas;
	  var cantidadDeLamparas;
	  var descuentoEnPorcentaje;
	  var marca;
	  var precioBruto;
	  var precioFinal;
	  var precioIbb;

	  precioLamparas=35;
	  descuentoEnPorcentaje=1;
	  precioIbb=1.1;
	  

	  cantidadDeLamparas=document.getElementById('Cantidad').value;
	  marca=document.getElementById('Marca').value;
	  precioBruto=cantidadDeLamparas*precioLamparas;

	  console.info(cantidadDeLamparas); //informa en la consola la cantidad de lamparas seleccionadas
	  cantidadDeLamparas=parseInt(cantidadDeLamparas); //paso el valor del input a numerico


	  if (cantidadDeLamparas>5)
	   {
	   	descuentoEnPorcentaje=0.5;
	   } //LLAVE PRIMER IF
	   else
	   {
	   	if (cantidadDeLamparas==5)
	   	{
	   		if (marca=="ArgentinaLuz")
	   		 {
	   		 	descuentoEnPorcentaje=0.6;
	   		 }
	   		 else
	   		 {
	   		 	descuentoEnPorcentaje=0.7;
	   		 }

	   	}//llave segundo if
	   	else
	   	{
	   		if (cantidadDeLamparas==4)
	   		 {
	   		 	if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
	   		 	{
	   		 		descuentoEnPorcentaje=0.75;
	   		 	}
	   		 	else
	   		 	{
	   		 		descuentoEnPorcentaje=0.8;
	   		 	}

	   		 }
	   		 else
	   		 {
	   		 	if (cantidadDeLamparas==3) 
	   		 	{
	   		 		if (marca=="ArgentinaLuz")
	   		 		 {
	   		 		 	descuentoEnPorcentaje=0.85;
	   		 		 }
	   		 		 else
	   		 		 {
	   		 		 	if (marca=="FelipeLamparas")
	   		 		 	 {
	   		 		 	 	descuentoEnPorcentaje=0.9;
	   		 		 	 }
	   		 		 	 else
	   		 		 	 {
	   		 		 	 	descuentoEnPorcentaje=0.95;

	   		 		 	 }

	   		 		 }
	   		 	}

	   		 }
	   	}//llave segundo else




	   }//LLAVE DE PRIMER ELSE

	   precioFinal=precioBruto*descuentoEnPorcentaje;
	   if (precioFinal<120) 
	   {
	   	document.getElementById('precioDescuento').value=precioFinal;
	   }
	   else{
	   	precioFinal=precioFinal*precioIbb;
	   	 document.getElementById('precioDescuento').value=precioFinal;

	   }
	   

	}
