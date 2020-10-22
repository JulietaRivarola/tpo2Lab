/**
 * Muestra la informacion de un dia en particular
 */
function mostrar(){
	let up = this.childNodes[1];
	let down = this.childNodes[3];
	let info = document.querySelector(`#${this.getAttribute('dia')}`);

	if(!verificarEstaMostrando(info)) {
		info.classList.remove('d-none');
		info.classList.add('d-block');

		up.classList.remove('d-block');
		up.classList.add('d-none');

		down.classList.remove('d-none');
		down.classList.add('d-block');
	} else {
		info.classList.remove('d-block');
		info.classList.add('d-none');

		up.classList.remove('d-none');
		up.classList.add('d-block');

		down.classList.remove('d-block');
		down.classList.add('d-none');
   }   
}

/**
 * Verifica si ya se esta mostrando la informacion
 * @param {HTMLElement} element 
 */
function verificarEstaMostrando(element){
	return element.classList.contains('d-block');
}

document.querySelectorAll('.fila-dia').forEach(fila =>{
	fila.addEventListener('click', mostrar);
});