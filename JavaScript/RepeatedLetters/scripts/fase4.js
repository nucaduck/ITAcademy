//Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.
fullName();
function fullName(){
    var arrayName = ['X','A','V','I','3','R'];    
    var arraySurname = ['G','A','M','A','Z','O']

    var arrayFullName = arrayName.concat(" ", arraySurname);      
    console.log(arrayFullName);
}