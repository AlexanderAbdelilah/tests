function onClick() {

	// Récupération de l'élément .tab parent
    const tab = this.closest('.tab');
	// Récupération de l'élément "frère" suivant (ici .content)
	const content = tab.nextElementSibling;
	// Ajout/Suppression de la class display
	content.classList.toggle('display');

	const clickedcontent = tab.previousElementSibling;
	clickedcontent.classList.remove('display');

}


const btns = document.querySelectorAll('.tab .btn');
btns.forEach(btn => {
	btn.addEventListener('click', onClick);
	
});