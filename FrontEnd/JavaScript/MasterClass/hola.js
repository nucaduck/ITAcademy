




	<script type="text/javascript">

		alert("Holaaaa");
		//var usuario="Pepe";
		//var precio="12.50";
		//var es_premium = true;

		var importe = 100;
		var importeB = 200;

		console.log("La suma de A+B es: " + (importe + importeB));

		//alert("Resultado de importes: " + importe + importeB);

		console.log(Math.round(0.7));
		console.log(Math.pow(2,2));
		console.log(Math.ceil(7.004));
		console.log(Math.floor(7.9));

		var nombre="ismael";
		nombre = nombre.replace("a","e");
		console.log(nombre);

		var nombre = "yo mismo2";
		var nombre_cortado = nombre.slice(0,2);
		console.log(nombre_cortado);

		var nombres = ["Rita","Pedro","Miquel","Ana","Vanesa"];
		var masculinos=nombres.slice(1,3);
		console.log(masculinos);

		var edad=12;
		if(edad>=18) console.log("Mayor de edad");
		else console.log("Soy menor de edad");

		var numero1=30;
		var numero2="30";

		if(numero1==numero2){
			console.log("Hay un 30");
		}

		if(numero1===numero2){
			console.log("Hay un número 30");
		}

		/*El límite es 10

		for(var i=0;i<10;i++){
			console.log(i);
		}
		*/

		//Bucle en un array

		var array_nombres = ["Ismael","Jake","Xavi","Marti"];
		console.log(array_nombres.length);//retorna 4
		for (var i=0;i<array_nombres.lenght;i++){
			console.log(aray_nombres[i]);

		}

		//Array multidimensional

		var items=[
			["coche",20000],
			["moto",4000],
			["avion",12000000]
		];

		console.log("Mi "+items[0][0]+" cuesta "+items[0][1]+" euros");



	</script>
