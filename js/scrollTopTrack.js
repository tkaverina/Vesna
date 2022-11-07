document.addEventListener('DOMContentLoaded', function () {
	scrollTop();//при загрузке страницы вызываем функцию
});

window.onscroll = function () {
	scrollTopTrack();//при прокрутке страницы вызываем функцию показа кнопки наверх
}
function scrollTopTrack() {
	const buttonUp = document.querySelector('.upbutton');//Подставить свой класс кнопки наверх
	window.pageYOffset > 700 ? buttonUp.classList.add('show') : buttonUp.classList.remove('show');//Класс show отвечает за класс показа скрытия кнопки
}
function scrollTop() {
	const buttonUp = document.querySelector('.upbutton');//Подставить свой класс кнопки наверх

	buttonUp.addEventListener('click', function (e) {
		e.preventDefault();
		backToTop();
	});

}


function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 0);
	}
}