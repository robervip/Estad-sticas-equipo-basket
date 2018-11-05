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
function contenido(){
while (nombre != "salir") {
    numero=numero+1;
    nombre=prompt(`Escribe el nombre del corredor ${numero}`);
    if (nombre != "salir") {
      canastaDos=Number(prompt(`Escribe las canastas de dos del jugador numero ${numero}`));
      totalCanastaDos+=canastaDos;
      canastaTres=Number(prompt(`Escribe las canastas de tres del jugador numero ${numero}`));
      totalCanastaTres+=canastaTres;
      tiempoJugado=Number(prompt(`Escribe el tiempo jugado del jugador numero ${numero} en minutos`));
      totalTiempoJugado+=tiempoJugado;
      }
      if (totalAnotado<canastaDos+canastaTres) {
        maxAnotador=nombre;
        totalAnotado=canastaDos+canastaTres;
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
