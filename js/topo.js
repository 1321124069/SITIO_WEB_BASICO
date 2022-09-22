
var vel;
var velocidad = 1000;
var puntos = 0;
var configurar = 0;
var iterval;

btnconfigurar = document.getElementById('configurar');

btnconfigurar.addEventListener('click', function(){
	configurar++;
	if(configurar >= 1){
		clearInterval(iterval);
		vel= prompt("inserte la velocidad en segundos que desee con tres 000 acompañados");
		velocidad=vel
		iniciar();
	}
})

iniciar();
function iniciar(){
	$(".topos").removeClass("active");
	iterval = setInterval(function(){
		saleTopo();
	},velocidad);
}

$(function(){
	$(".topos").hover(function(){
		var a = $(this);
		a.find(".hueco").click(function(){			
			if(a.hasClass("active")){
				a.removeClass("active");
				puntos++;
				$("#puntos").html(puntos);
			} else{
				console.log("no hay topo");
			}
		})
	})
})


saleTopo = function(){
	var num = parseInt(Math.random() * 7);
	$(".topos").removeClass("active");
	$(".topos:nth-child("+num+")").addClass("active");
}

