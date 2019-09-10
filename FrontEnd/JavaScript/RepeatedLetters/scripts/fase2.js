//Imprimeix per consola si és vocal, consonant o nombre.

letters ();

function letters(){
    var name = ['X','A','V','I','3','R'];
    var nameString = name.join('');
        console.log('Partim del meu nom: '+ nameString);
    var i = 0;
  
    // Mirem si es nombre o lletra
    for(i=0; i < name.length; i++){

        if( isNaN(name[i]) ){  //Si no es un nombre es una lletra; mirem si es vocal o consonant.
              var str="aeiou_AEIOU";
              if(str.match(name[i])){
                console.log("Trobada la vocal --> "+ name[i]);
              }
              else {  // Si no es vocal es consonant
                console.log("Trobada la consonant --> "+ name[i]);
              }
            }

        else {  // Si no es vocal o consonant es nombre.
                console.log("Trobat el nombre --> "+ name[i] + " --> Els noms de persones no contenen nombres");
            }
    }    
}