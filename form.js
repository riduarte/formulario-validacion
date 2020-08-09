  window.onload = () => {
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let advertencia = [];
 

        let numberCard = document.querySelector("#numberCard")
        let cvc = document.querySelector("#cvc")
        let cantidad = document.querySelector("#cantidad")
        let nombre = document.querySelector("#nombre")
        let apellido = document.querySelector("#apellido")
        let ciudad = document.querySelector("#ciudad")
        let listciudad = document.querySelector("#Listciudad")
        let codigoPostal = document.querySelector("#codigoPostal")
        let mensaje = document.querySelector("#mensaje")
        let error = document.querySelector("#error")
        let succes= document.querySelector("#good")


if(numberCard.value =="" || numberCard.value.length !==13){ 
    numberCard.classList.add("error") 
    advertencia.push(false)
}
else{
    numberCard.classList.remove('error')
    numberCard.classList.add("goodinput") 
   
  
}
if(cvc.value =="" || cvc.value.length !==3){ 
    cvc.classList.add("error") 
    advertencia.push(false)}
else{
    cvc.classList.remove('error')
    cvc.classList.add("goodinput")
    
    
}
if(cantidad.value ==""){ 
    cantidad.classList.add("error") 
     advertencia.push(false)}
else{
    cantidad.classList.remove('error')
     cantidad.classList.add("goodinput") 
    

}
if(nombre.value ==""){ 
    nombre.classList.add("error")
     advertencia.push(false)
}
else{
    nombre.classList.remove('error')
    nombre.classList.add("goodinput") 
     

}
if(apellido.value ==""){ 
    apellido.classList.add("error") 
     advertencia.push(false)}
else{
    apellido.classList.remove('error')
    apellido.classList.add("goodinput") 
     

}
if(ciudad.value ==""){ 
    ciudad.classList.add("error") 
     advertencia.push(false)}
else{
    ciudad.classList.remove('error')
     ciudad.classList.add("goodinput")
     

}
if(Listciudad.value =="Seleccione Pais"){ 
    Listciudad.classList.add("error") 
     advertencia.push(false)}
else{
    Listciudad.classList.remove('error')
     Listciudad.classList.add("goodinput")
     

}
if(codigoPostal.value ==""){ 
    codigoPostal.classList.add("error") 
     advertencia.push(false)}
else{
    codigoPostal.classList.remove('error')
     codigoPostal.classList.add("goodinput") 
     

}
if(advertencia.length>0){
error.style.display="inline"
good.style.display="none"

  }
else{
good.style.display="inline"
error.style.display="none"}
console.log(advertencia)
    })
    
}









































/* 
   const expresiones={
       numberCard:/^[0-9\s]{13,19}/,
       cvc:/^[0-9\s]{3}/,
       cantidad:/^[0-9]+/,
       nombre:/^[a-z|A-Z]/,
       apellido:/^[a-z|A-Z]/,
       ciudad:a ,
       codigoPostal:/^[0-9]{5}/,
       tarjetas:a


   }

    const validarform=(e)=>{
        switch (e.target.name) {
            case "numberCard":
                if(expresiones.numberCard.test(e.target.value)){

                }else{
                    document.getElementById
                }
                
                
                break;
            case "cvc":
                
                
                break;
            case "cantidad":
                
                
                break;
            case "nombre":
                
                
                break;
            case "apellido":
                
                
                break;
            case "ciudad":
                
                
                break;
            case "codigoPostal":
                
                
                break;
            case "tarjetas":
                
                
                break;
                
        
            default:
                break;
        }

    }
  
   inputs.forEach((input)=>{
       input.addEventListener("keyup", validarform);
       input.addEventListener("blur", validarform);
});

   formulario.addEventListener("submit", (e)=>{
       e.preventDefault();
   })
 */