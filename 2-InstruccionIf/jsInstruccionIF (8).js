function Mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
edad=document.getElementById('edad').value;
estadoCivil=document.getElementById('estadoCivil').value;
//esta mal
if(edad<18&&estadoCivil!="Soltero")
{
 console.log("NO HACER NADA")
}
else
{
	if (estadoCivil=="Soltero"&&edad>17) {
	alert("Es soltero y no es menor");
	}
}	


}

//FIN DE LA FUNCIÓN