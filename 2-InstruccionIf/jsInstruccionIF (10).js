function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var nota;
	numeroRandom=Math.floor((Math.random() * 10) + 1);
	nota=numeroRandom;
	console.log("nota es: "+nota);
	 if (nota>8)
	  {
	  	alert("EXELENTE");
	  }
	   else 
	  {
	  	if (nota<4)
	  	 {
	  	 	alert("vamos, la proxima se puede");
	  	 } 
	  	 else
	  	  {
	  	  	alert("aprobo");
	  	  }

	  }




	

}//FIN DE LA FUNCIÓN