function Mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=document.getElementById('edad').value;

estadoCivil=document.getElementById('estadoCivil').value;
//se puede poner el if deotro del otro cuando es &&, si fuera un o se pone afuera
if(edad<18&&estadoCivil!="soltero")
{
alert("Es muy pequeño para No ser soleto");
}


}//FIN DE LA FUNCIÓN