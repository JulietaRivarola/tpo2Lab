let navbar = document.querySelector('#navbarTogglerDemo01');

document.querySelector('.navbar-toggler').addEventListener('click', handleTogglerClick);


function handleTogglerClick()
{
    let toggled = navbar.classList.contains('show');

    if(toggled)
        navbar.classList.remove('show');
    else
        navbar.classList.add('show');
}

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