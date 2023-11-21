const lista=document.getElementsByTagName("li")

const inputs=document.querySelectorAll("input")

const btn=document.getElementsByTagName("button")[0]

inputs.forEach((item, index)=>{
    btn.addEventListener("click", function(event){
        event.preventDefault();
        if(item.value===""){
            lista[index].classList.remove("campo-preenchido")
            lista[index].classList.add("campo-nao-preenchido") 
            item.style.fontWeight="700"         
        }
        else{
            lista[index].classList.remove("campo-nao-preenchido")
            lista[index].classList.add("campo-preenchido")   
            item.style.fontWeight="400"
        }
    })
})
