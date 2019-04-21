// Emmagatzemar en un Map tant les lletres de la llista com el nombre de vegades que apareixen.
arrayMapCount();
function arrayMapCount(){
    var arrayName = ['X','A','V','I','3','R','G','A','M','A','Z','O'];    
        var arrayLetters = new Map();
        for(i=0; i < arrayName.length; i++){
            if(arrayLetters.has(arrayName[i])){
              arrayLetters.set(arrayName[i], arrayLetters.get(arrayName[i])+1);
            }
            else{
              arrayLetters.set(arrayName[i], 1);
          }
    }    
    console.log(arrayLetters);
}