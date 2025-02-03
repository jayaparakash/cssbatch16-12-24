import dataF from "./data.js";
export  function data() {
    let a = document.getElementById('container')
    dataF.map(item=>{
        a.innerHTML += `
            <h1>${item.title}</h1>
        `
    })
}


export  function calAdd(a,b){
        console.log(a+b); 
}

export  function calsub(a,b){
    console.log(a+b); 
}
