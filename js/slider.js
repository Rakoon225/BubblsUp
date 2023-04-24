const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Пагинация
	// If we need pagination
	//   pagination: {
	//     el: '.swiper-pagination',
	//   },

	// Граб курсор (хваталка)
	grabCursor: true,
	// Скорость прокручивания
	speed: 3700,
	// Авто прокручивание
	autoplay: {
		delay: 3700,
	},
	// Поиграйся с настройками, может у тебя получится баг убрать
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
