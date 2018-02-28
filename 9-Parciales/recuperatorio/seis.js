function Mostrar()
{
 var pesos;
 var pesoMaximo=-10000000000000000;
 var pesoMinimo=1000000000000000;

for(contador=0;contador<5;contador++)
{
	pesos=prompt("ingrese un peso ");
	pesos=parseInt(pesos);
	while(pesos<0)
	{
		pesos=prompt("Numero incorrecto, ingrese un numero superior a 0 ");
		pesos=parseInt(pesos);
	}
if (contador==1)
 {
 	pesoMaximo=pesos;
 	pesoMinimo=pesos;
 }
 else
 {
 	if (pesos>pesoMaximo)
 	 {
 	 	pesoMaximo=pesos;	
 	 }
 	 if (pesos<pesoMinimo)
 	  {
 	  	pesoMinimo=pesos;
 	  }
 }

 
 
}//llave while
 document.write("el mas pesado fue : "+pesoMaximo);
 document.write(" el menos pesado fue : "+pesoMinimo);
}
