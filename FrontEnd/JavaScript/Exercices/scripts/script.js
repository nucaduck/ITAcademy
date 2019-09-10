//Exercici 1 - Mostra per consola un texte.
console.log("Hello world");

//Exercici 2 - Mostrar un alert amb nom.
//alert("Em dic Xavier");

//Exercici 3 - Crear una dos variables amb nom i cognom 
//i mostrarla per consola.
var name, surname;
name = "Xavier";
surname = "Gamazo";
document.write(name + " " + surname);


//Exercici 4 - Crea dos variables amb nombres i suma'ls

sumNumbers();

  function sumNumbers(){
    var num1 = 10;
    var num2 = 7;
    var total = num1 + num2;
    console.log("La suma entre " + num1 + " y " + num2 +" es: "+ total );
  }
  

 
  
//Exercici 5 - Crea una variable "nota_examen" juntament amb un alert
//que digui si s'ha aprovat o no i amb la nota.
nota_exam(4);

function nota_exam(note){
  if(note >= 5){
    alert("Has aprovat amb un "+ note);
      
    }
    else{
      alert("Has suspès amb un "+ note);
    }
  }


//Exercici 6 - Reemplaça la paraula blau per verd 
//a la següent cadena de text: "Tinc un cotxe de color blau". 
//Després intenta fer-ho remplaçant les "o" per les "u".
  

  function replaceWord(a,b){
  
    var str= document.getElementById("exercice6a").innerHTML;
    var txt = str.replace(a,b);
    return document.getElementById('exercice6a').innerHTML = str +"<br>"+ txt;  
  }
  
 
  function replaceChar(a,b){
  
    var str= document.getElementById("exercice6b").innerHTML;
    var txt = str.replace(a,b);
    return document.getElementById('exercice6b').innerHTML = str +"<br>"+ txt;  
  }
  

//Donat el seguit llistat d’objectes: ‘taula’, ‘cadira’, ‘ordinador’, ‘libreta’, 
//per un bucle que mostri per pantalla cada objecte i la save posició al llistat.

  function objPosition(){
  
    var objects = ['Taula', 'Cadira','Ordinador','Llibreta'];
  
    for (var i=0; i < objects.length; i++){
      txt = document.getElementById("exercice7").innerHTML;      

      document.getElementById("exercice7").innerHTML = txt + objects[i] + " està a la posició "+ i +"<br>";
      //console.log("La posició de " + objects[i] + " es " + i );
    }
  }


//Crea una funció anomenada calculadora que tingui com a entrada 
//els següents paràmetres: operador, valor1 i valor2.
//Estructura de la funció que faci sumes, restes i multiplicacions. 
//El resultat haurà de ser mostrar per pantalla.

  function calculator(operator, val1, val2){
  
        switch(operator){
            case "add":
               txt = document.getElementById('exercice8a').innerHTML;  
               document.getElementById('exercice8a').innerHTML = txt +" "+ (val1 + val2);
                  break;

            case "subtract":
                txt = document.getElementById('exercice8b').innerHTML;
                document.getElementById('exercice8b').innerHTML = txt +" "+ (val1 - val2);
                  break;

            case "multiply":
                txt = document.getElementById('exercice8c').innerHTML;
                document.getElementById('exercice8c').innerHTML = txt +" "+ (val1 * val2);
                  break;
        }  
  }

