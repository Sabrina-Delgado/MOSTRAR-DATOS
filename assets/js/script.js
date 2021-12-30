//--------------------------------------------------------------------------------------
// boton activadot = id="escoge-carrera"
// div a aparecer = id="menu-busca-carrera"
// boton para cerrar = id="menu1Cerrar"

$(document).ready(function () {
  document.getElementById("menu-busca-carrera").style.display= "none"
  $("#escoge-carrera").click(function () {
    $("#menu-busca-carrera").show("slow");//mostrar
  });
  $("#menu1Cerrar").click(function () {
    $("#menu-busca-carrera").hide("slow"); //ocultar
  });
  
});


//--------------------------------------------------------------------------------------
// botom activador =  id="registrate-li"
// div aparecer = id="form-cerrar"
// boton cerrar = id="formulario-registrate"
$(document).ready( function () {
    document.getElementById("formulario-registrate").style.display="none";
    $("#registrate-li").click(function (){
        $("#formulario-registrate").show("slow");
    })
    $("#form-cerrar").click(function (){
        $("#formulario-registrate").hide("slow");
    }) 
})
//--------------------------------------------------------------------------------------------------------------------





//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//Function Igieneria de alimentos
// botom activador =  id= image-carrera-1
// div a aparecer = id= aparecer-carreras
$(document).ready(function () {
    document.getElementById("ingalimentos").style.display= "none"
    $("#imageingalimentos").click(function () {
      $("#ingalimentos").show("slow");//mostrar
    });
    $("#cerrarcarreraingalimentoss").click(function () {
      $("#ingalimentos").hide("slow"); //ocultar
    });
    
});
//--------------------------------------------------------------------------------------------------------------------
//Function Traductores
// botom activador =  id= imagetraductores
// div a aparecer = id= traductores
// butom cerrar = id=cerrarcarreratraductores
$(document).ready(function () {
    document.getElementById("traductores").style.display= "none"
    $("#imagetraductores").click(function () {
      $("#traductores").show("slow");//mostrar
    });
    $("#cerrarcarreratraductores").click(function () {
      $("#traductores").hide("slow"); //ocultar
    });
    
});

//--------------------------------------------------------------------------------------------------------------------
//Function Nutricion
// botom activador =  id= imagenutricion
// div a aparecer = id= nutricion
// butom cerrar = id=cerrarcarreranutricion
$(document).ready(function () {
    document.getElementById("nutricion").style.display= "none"
    $("#imagenutricion").click(function () {
      $("#nutricion").show("slow");//mostrar
    });
    $("#cerrarcarreranutricion").click(function () {
      $("#nutricion").hide("slow"); //ocultar
    });
    
});
//--------------------------------------------------------------------------------------------------------------------
//Function Cine y Audiovisuales
// botom activador =  id="imagecine"
// div a aparecer = id="cine"
// butom cerrar = id="cerrarcarreracine"
$(document).ready(function () {
    document.getElementById("cine").style.display= "none"
    $("#imagecine").click(function () {
      $("#cine").show("slow");//mostrar
    });
    $("#cerrarcarreracine").click(function () {
      $("#cine").hide("slow"); //ocultar
    });
    
});
//--------------------------------------------------------------------------------------------------------------------
//Function Agronomia
// botom activador =  id="imageagronomia"
// div a aparecer = id="agronomia"
// butom cerrar = id="cerrarcarreraagronomia"
$(document).ready(function () {
    document.getElementById("agronomia").style.display= "none"
    $("#imageagronomia").click(function () {
      $("#agronomia").show("slow");//mostrar
    });
    $("#cerrarcarreraagronomia").click(function () {
      $("#agronomia").hide("slow"); //ocultar
    });
    
});
//--------------------------------------------------------------------------------------------------------------------
//Function Periodismo
// botom activador =  id="imageperiodismo"
// div a aparecer = id="periodismo"
// butom cerrar = id="cerrarcarreraperiodismo"
$(document).ready(function () {
    document.getElementById("periodismo").style.display= "none"
    $("#imageperiodismo").click(function () {
      $("#periodismo").show("slow");//mostrar
    });
    $("#cerrarcarreraperiodismo").click(function () {
      $("#periodismo").hide("slow"); //ocultar
    });
    
});
//--------------------------------------------------------------------------------------------------------------------
//Function Ver mas 2
// botom activador =  id="mcarreras1"
// div a aparecer = id="vermas2"
// div a desaparecer = id="vermas1"
$(document).ready(function () {
    document.getElementById("vermas2").style.display= "none"
    $("#mcarreras1").click(function () {
      $("#vermas2").show("slow");//mostrar
    });
    $("#mcarreras1").click(function () {
      $("#mcarreras1").hide("slow"); //ocultar
    });
    
});
/*
$(document).ready(function () {
    document.getElementById("vermas2").style.display= "none"
    $("#+carreras1").click(function () {
      $("#vermas1").hide("slow"); //ocultar  
      $("#vermas2").show("slow");//mostrar
    });        
});
*/

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//Function Diseño Grafico
// botom activador =  id="imagedgrafico"
// div a aparecer = id="dgrafico"
// butom cerrar = id="cerrarcarreradgrafico"
$(document).ready(function () {
    document.getElementById("dgrafico").style.display= "none"
    $("#imagedgrafico").click(function () {
      $("#dgrafico").show("slow");//mostrar
    });
    $("#cerrarcarreradgrafico").click(function () {
      $("#dgrafico").hide("slow"); //ocultar
    });
    
});
//--------------------------------------------------------------------------------------------------------------------
//Function Bioquimica
// botom activador =  id="imagebioquimica"
// div a aparecer = id="bioquímica"
// butom cerrar =  id="cerrarcarrerabioquímica"
$(document).ready(function () {
    document.getElementById("bioquímica").style.display= "none"
    $("#imagebioquimica").click(function () {
      $("#bioquímica").show("slow");//mostrar
    });
    $("#cerrarcarrerabioquímica").click(function () {
      $("#bioquímica").hide("slow"); //ocultar
    });
});
//--------------------------------------------------------------------------------------------------------------------
//Function Fotografia
// botom activador =  id="imagefoto"
// div a aparecer = id="foto"
// butom cerrar =  id="cerrarcarrerafoto"
$(document).ready(function () {
    document.getElementById("foto").style.display= "none"
    $("#imagefoto").click(function () {
      $("#foto").show("slow");//mostrar
    });
    $("#cerrarcarrerafoto").click(function () {
      $("#foto").hide("slow"); //ocultar
    });
});
//--------------------------------------------------------------------------------------------------------------------
//Function Bromatilogia
// botom activador =  id="imagebromatologia"
// div a aparecer = id="bromatología"
// butom cerrar =  id="cerrarcarrerabromatologia"
$(document).ready(function () {
    document.getElementById("bromatología").style.display= "none"
    $("#imagebromatologia").click(function () {
      $("#bromatología").show("slow");//mostrar
    });
    $("#cerrarcarrerabromatologia").click(function () {
      $("#bromatología").hide("slow"); //ocultar
    });
});
//--------------------------------------------------------------------------------------------------------------------
//Function Veterinaria
// botom activador =  id="imageveterinaria"
// div a aparecer = id="veterinaria"
// butom cerrar =  id="cerrarcarreraveterinaria"
$(document).ready(function () {
    document.getElementById("veterinaria").style.display= "none"
    $("#imageveterinaria").click(function () {
      $("#veterinaria").show("slow");//mostrar
    });
    $("#cerrarcarreraveterinaria").click(function () {
      $("#veterinaria").hide("slow"); //ocultar
    });
});
//--------------------------------------------------------------------------------------------------------------------
//Function Diseño de Indumentaria
// botom activador =  id="imagemoda"
// div a aparecer = id="moda"
// butom cerrar =  id="cerrarcarreramoda"
$(document).ready(function () {
    document.getElementById("moda").style.display= "none"
    $("#imagemoda").click(function () {
      $("#moda").show("slow");//mostrar
    });
    $("#cerrarcarreramoda").click(function () {
      $("#moda").hide("slow"); //ocultar
    });
});











//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------
//Comunicaciones
// botom activador =  id="comunicacionescomun"
// div a aparecer = comunicaciones
// butom cerrar =  

//MOstrar segun id de comunicacion que compartan, y eso generarlo como variables
$(document).ready(function () {
  
  $("#comunicacionescomun").click(function () {
    comunicaciones.hide("slow"); //ocultar
  });
  $("#comunicacionescomun").click(function () {
    carrerras[1].show("slow");//mostrar
  });
});

//-------------------------------------------------------------------------------



/*

var chart = new CanvasJS.Chart("chartContainer", { //LLama canvasjs, para un nuevon Objeto
  animationEnabled: true,
  theme: "light2",
  title: {//Titutlo (frase de arrriba de la tabla)
      text: `Casos COVID-19 en ${data.name}` //llama variable del Api, para completar frase a aparecer
  },
  axisX: { // Eje horizontal se llamara "fecha"
      labelAngle: 50, //sus variables aparecesaran en un angulo de 50(inqulinadas)
      title: "Fecha",
  },
  axisY: {
      title: "Número de casos", //Eje Vertical de la derecha "Numero de Casos"
  },
  axisY2: {
      title: "Número de fallecidos",//Eje Vertical de la izquierda "Numero de fallecidos"
  },
  data: [//Reseña de la tabla
  {  // Linea Morada nuevos casos
      type: "line",
      showInLegend: true,
      legendText: "Nuevos casos",
      indexLabelFontSize: 16, //Tamaño de titulo
      dataPoints: createArr(data, timeSpan)[0],
  },
  {// Linea Verde nuevos casos
      type: "line",
      axisYType: "secondary",
      showInLegend: true,
      legendText: "Nuevos fallecimientos",
      indexLabelFontSize: 16,//Tamaño de titulo
      dataPoints: createArr(data, timeSpan)[1],
  }]
});



//------------------------------------------------------------------------------------------------------------------------------
//Grafico segun variables
//Crar Variables /Objrto/

var Grafico = [];


var grafico = [{
  x: parametros,
  y: valores,
  type: "linear",
}]

function showResults(){
  for(var i = 0; i< data.length; i++){
    parametros.push(document.querySelectorAll('.parametro')[i].value);

  }
}



var data = {
  comunicacionesg: {
    
}}
function mostrarDatos (comunicaciones){
  for(var i = 0; i< data; i++){
    $("#cerrarcarreratraductores").click(function () {
      año2015c[0].show("slow").type("bar");//mostrar
    });
  }
}

*/