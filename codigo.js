var numero=0;
var nombre=[];
var canastaDos=[];
var canastaTres=[];
var tiempoJugado=[];
var totalCanastaDos=0;
var totalCanastaTres=0;
var totalTiempoJugado=0;
var totalAnotado=0;
var maxAnotador="";
var nombre1="";
var canastas2="";
var canastas3="";
var tiempoJugado1="";
function contenido(){
while (nombre1 != "salir") {
    numero=numero+1;
    nombre1=prompt(`Escribe el nombre del corredor ${numero}`);
    nombre.push(nombre1);
    if (nombre1 != "salir") {
      canastas2=Number(prompt(`Escribe las canastas de dos del jugador numero ${numero}`));
      canastaDos.push(canastas2);
      totalCanastaDos+=canastas2;
      canastas3=Number(prompt(`Escribe las canastas de tres del jugador numero ${numero}`));
      canastaTres.push(canastas3);
      totalCanastaTres+=canastas3;
      tiempoJugado1=Number(prompt(`Escribe el tiempo jugado del jugador numero ${numero} en minutos`));
      tiempoJugado.push(tiempoJugado1);
      totalTiempoJugado+=tiempoJugado1;
      }
      if (totalAnotado<canastas2+canastas3) {
        maxAnotador=nombre1;
        totalAnotado=canastas2+canastas3;
      }
    }
      console.log(`El maximo anotador es ${maxAnotador} con ${totalAnotado} canastas.`);
}
contenido();
var numeroJugadores=numero-1;
function mediaCanastasDos (){
  mediaCanastasDos=totalCanastaDos/numeroJugadores;
  }
mediaCanastasDos();
console.log(`La media de canastas de dos entre los ${numeroJugadores} jugadores es de ${Math.trunc(mediaCanastasDos)}.`);

function mediaCanastasTres (){
  mediaCanastasTres=totalCanastaTres/numeroJugadores;
  }
mediaCanastasTres();
console.log(`La media de canastas de tres entre los ${numeroJugadores} jugadores es de ${Math.trunc(mediaCanastasTres)}.`);
function mediaTiempoJugado (){
  mediaTiempoJugado=totalTiempoJugado/numeroJugadores;
  }
mediaTiempoJugado();
console.log(`La media de tiempo jugado entre los ${numeroJugadores} jugadores es de ${mediaTiempoJugado} minutos.`);
