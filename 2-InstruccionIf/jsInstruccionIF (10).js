function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	 var numeroAleatoreo;

	    numeroAleatoreo= Math.floor((Math.random() * 10) + 1);
	   	console.log(numeroAleatoreo); 

	   if(numeroAleatoreo>8)
	   {
	   	alert("Exelente");

	   }
	   else
	   	{  
	   		if(numeroAleatoreo>3&&numeroAleatoreo<9)
	   			{
	   		  	alert("Aprobo");
  				}
  			else{
  				alert("Vamos, la proxima se puede");
  				}
	   	}

/*
if(numeroAleatoreo>8){
	alert("Exelente");
}
if(numeroAleatoreo>4&& numeroAleatoreo<9){
	alert("Aprobo");
}
if(numeroAleatoreo>0&&numeroAleatoreo<4){
	alert("Vamos, la proxima se puede");
}
*/
}//FIN DE LA FUNCIÓN