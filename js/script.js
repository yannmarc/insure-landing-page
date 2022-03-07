const menu = document.getElementById('menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click', () =>{
	menu.classList.add('active');
	close.classList.add('active');
	open.classList.add('active')
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
	open.classList.remove('active');
	close.classList.remove('active')
})