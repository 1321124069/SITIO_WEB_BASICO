var contaPer=0;
var conCap=0;
var perder=5;
var vel;
var cap;
var velocidad = 1000;
var tecla = "";
var posY=6;
var elevador = document.getElementById("elevador");
var iterval;
var configurar= 0;
var capacidad=3;

btnconfigurar = document.getElementById('configurar');
btncapa = document.getElementById('capa');

btnconfigurar.addEventListener('click', function(){
	configurar++;
	if(configurar >= 1){
		clearInterval(iterval);
		vel= parseInt(prompt("inserte la velocidad en salir de las personas"));
		velocidad=vel
		iniciar();
	}
})

btncapa.addEventListener('click',function(){
    capacidad++;
    if(capacidad>1){
        clearInterval(iterval);
        cap=parseInt(prompt("ingrese la capacidad de personal dentro del elevador"));
        capacidad=cap;
        iniciar();
    }
})

iniciar();

function iniciar(){
    iterval=setInterval(function(){
        salePer();
    },velocidad);   
}

function recojer(){
    let p = document.querySelectorAll(".piso" + (posY + 1) + " div");
    for(let i=0; i<p.length; i++){
        if(p[i].style.display=="inline" && contaPer<capacidad){
            contaPer++;
            p[i].style.display="none";
        }
       
    }
    
}

function salePer(){
    var num = Math.ceil(Math.random() * 25);
    
    let persona=document.getElementById('persona'+num);
    persona.style.display="inline";

    let p = persona.parentNode.querySelectorAll("div");

    let contMostrando = 0;

    for(let i=0; i<p.length; i++){
        if(p[i].style.display=="inline" && contaPer<capacidad){
            contMostrando ++;
        }
       
    }
    console.log(contMostrando);
    if(contMostrando==5){
        clearInterval(iterval)
        alert("perdiste");
        return;
    }
}

document.onkeydown = function(tlc){
    tecla=tlc.keyCode;
    if(tecla==38){
        if(posY>0){
            posY--
        }
    }
    if(tecla==40){
        if(posY<5){
            posY++;
        }
    }
    elevador.style.top=16.666*posY+"%";
    if(posY==5){
        contaPer=0;
        
    }

    recojer();
}





