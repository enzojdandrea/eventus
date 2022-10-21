function inicial(){
    let cantEventos;
    let diferentes;
   alert("Comencemos");
   do{
    cantEventos=parseInt(prompt("Cuantos eventos desea diseñar(Solo se Permite hasta 10 eventos) "));
   }while(cantEventos>10 || cantEventos==0)
   
   do{
    if(cantEventos!=1){
        diferentes=prompt("Los eventos seran todos iguales SI/NO");
    }else{
        diferentes="no";
    }
   }while(diferentes!='si' && diferentes!='no');

   if(diferentes=="si"){
    varioseventos(1);
   }else{
    varioseventos(cantEventos);
   }
   
}

function varioseventos(cantidad){
    for(let i=1;i<=cantidad;i++){
        selcVaso();
        selcPlato();
        selcMantel();
        selcMesa();
        selcUbi();
    }
}


//esto esta en prueba no es para la entrega XD
function copa(num){
    if(num=="2"){
        document.getElementById("copa").src="../assets/images/platoscuadrados.jfif";
    }else{
        document.getElementById("copa").src="../assets/images/copa.jpg";
    }
}