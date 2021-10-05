let lista = [{id:0},{id:7},{id:2},{id:1},{id:1}];
let id = 1;

function idExiste(){
    for(let n=0;n<lista.length;n++){
        if(lista[n].id == id){
            delete lista[n]
        }
    }
    
    console.log(lista)
}



idExiste()