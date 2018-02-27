function Mostrar()
{
 var numero=0;
 var letra;
 var promedioTotal;
 var cantidadDeNumeros=0;
 var respuesta="si";
 var letraNumeroMaximo;
 var letraNumeroMinimo;
 var contador=0;
 var numeroMinimo=400;
 var numeroMaximo=-400;
 var acumuladorDeNumeros=0;

 while(respuesta!="no")
 {
  contador++;
  letra=prompt("ingrese una letra");
  while(!(isNaN(letra))){
    letra=prompt("Usted no ingreso una letra, ingrese una letra");
  }
  numero=prompt("Ingrese un numero");
  numero=parseInt(numero);
  while(numero<-200||numero>200 || isNaN(numero))
  {
    numero=prompt("Numero incorrecto, ingrese un numero del -200 al 200");
    numero=parseInt(numero);
  }

  if (contador==0)
   {
    numeroMaximo=numero;
    numeroMinimo=numero;
    letraNumeroMinimo=numero;
    letraNumeroMaximo=numero;

   }
   else
   {
    if (numero>numeroMaximo)
     {
      numeroMaximo=numero;
      letraNumeroMaximo=numero;
     }
     if (numero<numeroMinimo)
      {
        numeroMinimo=numero;
        letraNumeroMinimo=numero;
      }
   }
   if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")
    {
      cantidadDeNumeros++;
      acumuladorDeNumeros=acumuladorDeNumeros+numero;
    }

  respuesta=prompt("Ingrese no para salir");
 }//llave de while
 promedioTotal=acumuladorDeNumeros/cantidadDeNumeros;
  document.write("<br>"+"La letra del menor numero es : "+letraNumeroMinimo);
  document.write("<br>"+"La letra del mayor numero es : "+letraNumeroMaximo);
  document.write("<br>"+"El promedio de las vocales es  : "+promedioTotal);
}

 /* var notas;
  var sexo;
  var promedioNotas;
  var cantidadSexoMasculino=0;
  var iteraciones=5;
  var contador=0;
  var acumuladorDeNotas=0;
  var notaMinima=10000;
  var notasPares=0;
  var notasImpares=0;
  var sexoFdesaprobado=0;
  var notasMujeres=0;
  var promedioNotasMujeres=0;
  var cantidadDeMujeres=0;
  var sumaNotaTotales=0;

  while(contador<iteraciones)
  {
    contador++;
    notas=prompt("ingrese una nota");
    notas=parseInt(notas);
    
    while(notas<0||notas>10)
    {
      notas=prompt("Nota incorrecta, ingrese una nota de 0 a 10");
      notas=parseInt(notas);
    }
    sexo=prompt("Ingrese un sexo f o m ");
    while(sexo!="f"&&sexo!="m")
    {
      sexo=prompt("Sexo incorrecto, Ingrese un sexo f o m ");
    }
    //document.write("la nota es : "+nota +" y el sexo es : "+ sexo);
    if (sexo=="m"&&notas>5)
    {
      cantidadSexoMasculino++;
    }
    if (sexo=="f"&&notas<4)
     {
      sexoFdesaprobado++;
     }

    if (contador==1)
     {
      notaMinima=notas;
     }
     else
     {
      if (notas<notaMinima) 
      {
        notaMinima=notas;
      }
     }

     if (notas%2==0)
      {
        notasPares++;
      }
      else
      {
        notasImpares++;
      }
      if (sexo=="f")
       {
        cantidadDeMujeres++
        notasMujeres=notasMujeres+notas;

       }
    promedioNotasMujeres=notasMujeres/cantidadDeMujeres;
    acumuladorDeNotas=acumuladorDeNotas+notas;
    promedioNotas=acumuladorDeNotas/contador;
    sumaNotaTotales=sumaNotaTotales+notas;
  document.write("<br>"+"la nota es : "+notas +" y el sexo es : "+ sexo);

  }//llave while

  document.write("<br>"+"promedio notas totales es : "+promedioNotas);
  document.write("<br>"+"La nota mas baja es : "+notaMinima);
  document.write("<br>"+"La cantidad de varones cuya nota es mayor o igual a 6 son : "+cantidadSexoMasculino);
  document.write("<br>"+"mujeres desaprobadas : "+sexoFdesaprobado);
  document.write("<br>"+"notas pares : "+notasPares);
  document.write("<br>"+"notas impares : "+notasImpares);
  document.write("<br>"+"promedio notas mujeres totales es : "+promedioNotasMujeres);
  document.write("<br>"+"la suma de las notas totales es : "+sumaNotaTotales);
*/
