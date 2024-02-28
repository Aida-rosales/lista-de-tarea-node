const readline= require("readline-sync");
const lista=[]
function añadir(){
    const indicador= readline.question("indicador");
    const descripcion= readline.question("descripcion");
    añadir.push({indicador,descripcion,completed:false});
    console.log("se añadio")
}

function eliminar(){
    const jose=readline.question("tarea a eliminar");
    if(jose>= 0 && jose < lista.length){
        lista.splice(jose,1); 
        console.log("elimine la tarea");
        
    }else{
        console.log("no se elimino");
    }
}

function completar(){
    const jose=readline.question("se completo la tarea");
    if(jose>= 0 && jose < lista.length){
        tareas[jose].completed = true;
        console.log("tarea realizada");
        
    }else{
        console.log("no se completo");
    }

}
function menu() {
    while (true) {
      console.log('\nOpciones:');
      console.log('1. Añadir tarea');
      console.log('2. Eliminar tarea');
      console.log('3. Completar tarea');
      console.log('4. Mostrar tareas');
      console.log('5. Salir');
  
      const choice = readline.question('Elige una opción: ');
  
      switch (choice) {
        case '1':
          añadir();
          break;
        case '2':
          eliminar();
          break;
        case '3':
          compl
case '3':
          completar();
          break;
        case '5':
          return;
        default:
          console.log('Opción no válida.');
      }
    }
  }
  
  menu();
