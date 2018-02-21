function Mostrar()
{
	var contador=-10;
	var iteraciones=10;
	var par=0;
	var impar=0;
	var positivo=0;
	var negativo=0;
	var contadorDeCero

	/*for (var i = 0; i<10; i++) {
			}*/

	for(contador=-10;contador<iteraciones;contador++)
	{
		document.write("<br>"+contador);
		if (contador==0)
		 {
		 	contadorDeCero++;
		 }else
		 {


			if (contador%2==0)
			 {
			 	par++;
			}
			 else
			 {
			 	impar++;
			 }
			  if (contador>0)
			  {
			  	positivo++;
			  }else 
			  {
			  	negativo++;
			  }
		  }
		

		
		

		

	}
		document.write("<br>"+"impar:"+impar);//SALE EN 10 PORQUE EL CONTADOR LO SUMA ANTES DE COMPARAR.
		document.write("<br>"+"par:"+par);
		document.write("<br>"+"positivo:"+positivo);
		document.write("<br>"+"negativo:"+negativo);


}