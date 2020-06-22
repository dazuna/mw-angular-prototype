function validarDni(e) {
if(e.value === '') { return; }
var lastchar = e.value.substring(e.value.length - 1);
  if(isNaN(lastchar) || e.value.length > 10) {
      e.value = e.value.substring(0, e.value.length - 1);
  }
}

$(".clasificacion").find("input").change(function(){
  var valor = $(this).val()
  $(".clasificacion").find("input").removeClass("activo")
  $(".clasificacion").find("input").each(function(index){
     if(index+1<=valor){
      $(this).addClass("activo")
     }

  })
})

$(".clasificacion").find("label").mouseover(function(){
  var valor = $(this).prev("input").val()
  $(".clasificacion").find("input").removeClass("activo")
  $(".clasificacion").find("input").each(function(index){
     if(index+1<=valor){
      $(this).addClass("activo")
     }

  })
})

// solo numeros
$(function(){

  $('#validanumericos').keypress(function(e) {
	if(isNaN(this.value + String.fromCharCode(e.charCode)))
     return false;
  })
  .on("cut copy paste",function(e){
	e.preventDefault();
  });

});
