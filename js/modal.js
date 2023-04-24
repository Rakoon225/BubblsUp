const createModal = (list) => {
	if (window.innerWidth > 540) {
		const body = document.querySelector(`body`); //*body
		const popup = document.querySelector(`#popup`); //*Главный родитель модального окна
		let card_images = document.querySelectorAll(
			`.baloonCard-image__catalog`
		); //*Все картинки карточек, при нажатии на них всплывает модальное окно

		//*Анскроллит и скролит body
		function bodyLock() {
			// Чтобы слайдер не просвечивался через фотографии > !
			const slider = document.querySelector('.slider');
			if (!body.classList.contains(`lock`)) {
				const lockPaddingValue =
					window.innerWidth -
					document.querySelector(`.wrapper`).offsetWidth +
					`px`; //*Ширина скрола к body, чтобы контент не съезжал
				body.style.paddingRight = lockPaddingValue;
				body.classList.add(`lock`);
				document.querySelector('footer').style.width = '100vw'
				document.querySelector('footer').style.paddingRight = lockPaddingValue;
				//! Мы задаем индекс -1
				slider.style.zIndex = -1;
			} else {
				body.style.paddingRight = 0 + `px`;
				document.querySelector('footer').style.paddingRight = 0 + `px`;
				body.classList.remove(`lock`);
				//! Если модалка закрыта, то возваращем z-index, чтобы мы могли дальше взаимодействовать с ним
				slider.style.zIndex = 1;
				document.querySelector('footer').style.width = 'auto'
			}
		}

		if (card_images.length > 0) {
			card_images.forEach((image, i) => {
				image.addEventListener(`click`, function () {
					popup.innerHTML = ``;
					popup.innerHTML = `
                        <div class="popup__body">
                            <div class="popup__image">
                                <img src="assets/catalog/${category}/${category}${sets[category].indexOf(list[i]) + 1}.webp" class="popup__image_img" alt="Картинка шариков">
                                <div class="close-button">Х</div>
                            </div>
                        </div>
                        `;
					popup.classList.add(`open`);
					bodyLock();
				});
			});
		}
		//*При нажатии на любое место, модальное окно закрывается
		popup.addEventListener(`click`, function (evt) {
			let item = evt.target;
			if (popup.classList.contains(`open`)) {
				if (!item.classList.contains(`popup__image_img`)) {
					popup.classList.remove(`open`);
					setTimeout(bodyLock, 750);
				}
			}
		});
	}
};
