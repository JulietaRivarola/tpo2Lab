let click = true;

function mostrar(){ 
   if(click){

   		document.getElementById(this.getAttribute('dia')).style.display ="flex";
   		document.getElementById(this.getAttribute('bu')).style.display ="flex";
   		document.getElementById(this.getAttribute('ba')).style.display= "none";

   		click = false;

   } else{
    	
    	
    	document.getElementById(this.getAttribute('dia')).style.display = "none";
    	document.getElementById(this.getAttribute('bu')).style.display= "none";
   		document.getElementById(this.getAttribute('ba')).style.display ="flex";   
    	click = true;
   }   
}

document.querySelectorAll('.fila-dia').forEach(fila =>{
	fila.addEventListener('click', mostrar);
});