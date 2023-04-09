let add=document.getElementById("add");
let btn=document.getElementById("btn");
let inser=document.getElementById("inser");
btn.addEventListener("click",()=>{
    let str=add.value;
    if(str.length !=0){
    let p=document.createElement("p");
    p.innerHTML=str;
    inser.appendChild(p);
    add.value="";
    p.addEventListener("dblclick",()=>{
        p.style.textDecoration="line-through";
    })
    }
    // else{
    //     document.getElementById("error").innerHTML="Empty";
    // }
})
