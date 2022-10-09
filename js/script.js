const hamburger = document.querySelector('.burger'),
	  menu = document.querySelector('.menu'),
	  overlay = document.querySelector('.menu__overlay'),
	  close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});


$(window).scroll(function() {
	if($(this).scrollTop() > 950) {
		$('.pageup').fadeIn(300);
	}else {
		$('.pageup').fadeOut(300);
	}
});


$("a[href^='#']").click(function() {
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});

const checkBox = document.querySelector('.js-check');
const btn = document.querySelector('.dis_btn');

checkBox.addEventListener('click', () => {
	if(checkBox.checked) {
		btn.classList.remove('dis_btn');
	}else {
		btn.classList.add('dis_btn');
}});

const activeMenu = document.querySelector('.burger');
const body = document.querySelector('body');
const closeMenu = document.querySelector('.menu__close');
const closeOver = document.querySelector('.menu__overlay');

activeMenu.addEventListener('click', () => {
	body.classList.add('js-scroll');
});

closeMenu.addEventListener('click', () => {
	body.classList.remove('js-scroll');
});

closeOver.addEventListener('click', () => {
	body.classList.remove('js-scroll');
});