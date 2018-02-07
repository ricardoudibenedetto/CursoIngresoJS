function Mostrar()
{
  var importeproducto;
  var importedescuento;
  var importefinal;

  importeproducto=prompt("ingrese importe del producto");

  importedescuento=importeproducto*0.25;
  importefinal=importeproducto-importedescuento;

  alert("Importe por fin de temporada: "+importefinal);
}
