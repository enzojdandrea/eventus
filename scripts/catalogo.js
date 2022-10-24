let total=0,totalUnEvento=0;
function inicial(){
    let cantEventos,iguales;
   alert("Comencemos");
   do{
    cantEventos=parseInt(prompt("Cuantos eventos desea diseñar(Solo se Permite hasta 10 eventos) "));
   }while(cantEventos>10 || cantEventos==0)
   
   do{
    if(cantEventos!=1){
        iguales=prompt("Los eventos seran todos iguales SI/NO");
    }else{
        iguales="no";
    }
   }while(iguales!='si' && iguales!='no');

   if(iguales=="si"){
    varioseventos(1);
    total=total*cantEventos;
    if(total==totalUnEvento){
        alert("El precio del evento es de :  "+total);
       }else{
        alert("El precio de todos los eventos es de :  "+total+"\nEl total de cada evento es de :  "+totalUnEvento);
    }
   }else{
    varioseventos(cantEventos);
    alert("El precio del evento es de :  "+total);
   }  
}

function varioseventos(cantidad){
    total=0;
    totalUnEvento=0;
    alert("cantidad :  "+cantidad);
 for(let i=1;i<=cantidad;i++){
     total=total+selcVaso();
     total=total+selcPlato();
    //  total=total+selcMantel();
    //  total=total+selcMesa();
    //  total=total+selcUbi();
     if(i==1){
         totalUnEvento=total;
     }
    }    
}

function selcVaso(){
    let selec,valor;
    do{
        selec=prompt("1- Vaso 1 - Precio = $10\n2- Vaso 2 - Precio = $20\n3- Vaso 3 - Precio = $30\n4- Vaso 4 - Precio = $40");    
    }while(selec!=1&&selec!=2&&selec!=3&&selec!=4)
    switch (selec){
        case "1":
            valor = 10;
            break;
        case "2":
            valor = 20;
            break;
        case "3":
            valor = 30;
            break;
        case "4":
            valor = 40;
            break;
        default:
            valor = 0;
            break;
    }
    return valor;
}
function selcPlato(){
    let selec,valor;
    do{
        selec=prompt("1- Plato 1 - Precio = $10\n2- Plato 2 - Precio = $20\n3- Plato 3 - Precio = $30\n4- Plato 4 - Precio = $40");    
    }while(selec!=1&&selec!=2&&selec!=3&&selec!=4)
    switch (selec){
        case "1":
            valor = 10;
            break;
        case "2":
            valor = 20;
            break;
        case "3":
            valor = 30;
            break;
        case "4":
            valor = 40;
            break;
        default:
            valor = 0;
            break;
    }
    return valor;
}


//esto esta en prueba no es para la entrega XD
function copa(num){
    if(num=="2"){
        document.getElementById("copa").src="../assets/images/platoscuadrados.jfif";
    }else{
        document.getElementById("copa").src="../assets/images/copa.jpg";
    }
}