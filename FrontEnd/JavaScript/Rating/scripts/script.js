function rate(value) {
    
    clearStars();    
    addStars(value); 
   
   
}

//Desactivar estrellas
function clearStars() { 
    for(var i=1; i<=5; i++) {
        document.getElementById("star" + i).classList.remove("active");
    }
}

//Activar estrellas
function addStars(value) { 
    for(var i=1; i<=value; i++) {
        document.getElementById("star" + i).classList.add("active");
    }
}
//Reiniciar estrellas si se hace click fuera del rate
window.addEventListener("click", function(out) { 
    if(!document.getElementById("rate").contains(out.target)) { 
        clearStars();
    }
})