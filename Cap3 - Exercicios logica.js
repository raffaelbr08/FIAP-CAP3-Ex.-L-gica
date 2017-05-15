// Atividade capitulo 3.

// Exercicios de lógica de progamação

// Linguagem usada: Javascript / Jquery


//1
function firstExercise(){


}

//2
function secondExercise(){
	var peso = $('#peso-1').val();
	var tempo = $('#tempo-1').val()/60;
	var met = 10*peso*tempo;

	console.log("Você gastou" + met + "calorias"); 
}

//3 falta resolver
function thirdExercise(){
	var resultado = $('#result').val();

		switch (resultado){
			case resultado >= 1.05:
				console.log('normal');
				break;
			case resultado >= 0.89 && resultado <= 1.04:
				console.log('Baixa Massa Óssea');
				break;
			case resutado >= 0.00 && resultado <= 0.88:
				console.log("Osteoporose");
				break;
			case resultado < 0:
				console.log("Refazer Exame");
				break;
		}

}

//4
function fourthExercise(){
	var C = $("#grauCelsius").val();
	var F =  ((9*C)+160)/5;

	console.log("Graus em fariraut" + F);

}

//5 
function fifthExercise(){
	var horas = $("#horas-valor").val();
	var total =	$("#horas-trabalhadas").val();

	var pagamento = horas*total;

	console.log("O total do pagamento deste medico é" + pagamento);

}

//6
function sixthExercise(){
	var kg = $('#massaproteica').val();
	var resultado = kg*20;

	console.log("Este alimento durara" + resultado + "dias");

}

//7
function SeventhExercise(){	 
	 var sexo = $("#sexo").val();
	 var altura = $("#altura").val();

	 if(sexo == "masculino"){
	 	var pesoIdeal = (72.7 * altura)-58;
	 	console.log("O peso ideal para este homem é" + pesoIdeal);
	 }else{
	 	var pesoIdeal = (62.1 * altura)-44.7;
	 	console.log("O peso ideal para esta mulher é" + pesoIdeal);
	 }

}

//8 
function eigthExercise (){
	var minutoInicial = $("#minInicial").val(); 
	var horaInicial = $("#hourInicial").val();

	var horaFinal = $("#hourFinal").val();
	var minutoFinal = $("#minFinal").val();

	var resultInicial = (horaInicial * 60)+minutoInicial;
	var resultFinal = (horaFinal * 60)+minutoFinal;
	var resultDuracao = resultFinal - resultInicial;

	if(resultadoDuracao > 1440){
		console.log("A Duração passou das 24h");
	}else{
		var resultHour = resultDuracao/60;
		console.log("A duração da cultura da bacteria foi de" + resultHour + "horas");
	}


}