
document.getElementById("enviar").onclick =()=>{
    let opcion = document.getElementById("opcion").value;
    //if (opcion!=NULL){ 
    var i = 0;
    for(i=0;i<opcion;i++){    
    let divImagenes = document.getElementById("imagenes");
    let imagenVisual = document.createElement("img");
    imagenVisual.src='./img/concierto.jpg';

   
    divImagenes.append(imagenVisual);
    }//divImagenes.append(zeuz);
    
console.log(opcion);//}
}








