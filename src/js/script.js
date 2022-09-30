const hamburger = document.querySelector('.main__hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');
container = document.querySelector('.container');
// обращаемся к документу, чтобы получить элемент <.класс>


hamburger.addEventListener('click', () => {
	//отслеживаем клики по гамбургеру
	menu.classList.add('active');
	//добавляем к элементу с классом .menu класс .active
	// container.classList.add('container-active');
});
closeElem.addEventListener('click', () => {
	//отслеживаем клики по гамбургеру
	menu.classList.remove('active');
	//убираем у элемента с классом .menu класс .active
	// container.classList.remove('container-active');
});