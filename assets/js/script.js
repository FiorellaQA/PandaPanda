document.getElementById("bt-Origen").addEventListener("click",function(e){
	document.getElementById("contentOrigen").classList.toggle("hidden");
});
document.getElementById("bt-Historia").addEventListener("click",function(e){
	document.getElementById("contentHistoria").classList.toggle("hidden");
});

var array = document.getElementsByClassName("close");
for( var i = 0 ; i < array.length ; i++){
	array[i].addEventListener("click",eliminar);
}
 function eliminar(e){
 	e.target.parentNode.style.display = "none";	
 }
document.getElementById("bt-Rest").addEventListener("click",function(e){
	var arr = document.getElementsByClassName("content-img");
	for( var i = 0 ; i < arr.length ; i++){
		arr[i].style.display = "block";
	}
});