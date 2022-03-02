function abc(a,b,c){
        console.log(a*b-c)
}


function cfun(a) {
    return (b)=>{
        console.log(a*b)
    }
    
}
newfun=cfun(5)
newfun(5)