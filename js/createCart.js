function create(list, category, title) {
	container.innerHTML = ``;
	if (category == `all`) {
		//*Если выбрана категрия "все категории"
		for (let i = 0; i < list.length; i++) {
			container.innerHTML += `
			<a href="#catalog" class="baloonCard">
			<div data-value="${list[i].category}" data-title="${list[i].title}" class="baloonCard-container next-category">
				<img src="${list[i].src}" alt="Шарики"
					class="baloonCard-image">
				<div class="baloonCard-body">
					<span class="baloonCard-title">${list[i].title}</span>
				</div>
			</div>
			<div data-value="${list[i].category}" data-title="${list[i].title}" class="baloonCard-button button button-category">Перейти</div>	
			</a>
	`;
		}

		// Теперь в конкретную категорию можно попадать не только по кнопке "Перейти", но и по фотографии.
		// Это нужно для удобства нашего юзера
		const setLogic = (options) => {
			const items = document.querySelectorAll('.' + `${options}`)
			items.forEach(option => {
				option.addEventListener('click', () => logic(option))
			})
		}
		setLogic('next-category')
		setLogic('button-category')

	} else {
		for (let i = 0; i < list.length; i++) {
			//*Проходимся по полученному списку и проходимся, обробатывая и получая данные его элементов
			let costList = list[i].price;
			let price = 0;
			let nummetrIs = false;
			if (costList) {
				for (key in costList) {
					price = price + cost[key] * costList[key];
					if (key === `numMetr`) {
						//*Если Карточка имеет свойство аренды и покупки
						nummetrIs = true;
						container.innerHTML += `
					<div class="baloonCard">
					<div class="baloonCard-container">
						<div class="baloonCard_image-container">
							<img src="assets/catalog/${category}/${category}${sets[category].indexOf(list[i]) + 1}.webp" alt="Шарики"
								class="baloonCard-image baloonCard-image__catalog">
							<span class="price">Аренда: 800</span>
							<span class="price price2">Покупка: 2100</span>
						</div>
						<div class="baloonCard-body">
							<span class="baloonCard-title">${title} №${sets[category].indexOf(list[i]) + 1}</span>
						</div>
					</div>
					<a href="#contact">
						<div class="baloonCard-button button">Выбрать</div>
					</a>
					</div>
						`;
					}
				}
			}

			if (!nummetrIs) {
				//*Отрисовка стандартных карточек
				container.innerHTML += `
				<div class="baloonCard">
				<div class="baloonCard-container">
					<div class="baloonCard_image-container">
						<img src="assets/catalog/${category}/${category}${sets[category].indexOf(list[i]) + 1}.webp" alt="Шарики"
							class="baloonCard-image baloonCard-image__catalog">
						<span class="price">${price + 60}</span>
					</div>
					<div class="baloonCard-body">
						<span class="baloonCard-title">${title} №${sets[category].indexOf(list[i]) + 1}</span>
					</div>
				</div>
				<a href="#contact">
					<div class="baloonCard-button button">Выбрать</div>
				</a>
				</div>
			`;
			}
		}
	}

	//!модальное окно REWRITE
	createModal(list);
	//!
}
