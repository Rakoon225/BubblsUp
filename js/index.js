//sistem
const filter = document.querySelector(`.filter`); //*главный родитель фильтра
const filter_icon = document.querySelector(`.filter-icon`); //*стрелочка (иконка) фильтра
const filter_window =
	document.querySelector(`.filter-window`); //*Окно фильтра
const pagination = document.querySelector(`.pagination`); //*Родитель пагинационных кнопок
let category; //*Переменная, в которой храниться текущая категория (то, что выбрали в фильтре)
const container = document.querySelector(`#cards`); //*Контейнер для карточек
const options = document.querySelectorAll(`.window-elements`); //*Все кнопки фильтра
const onPage = 6; //*Столько карточек будет на одной странице (пагинация)

//*Меняет стили select
function logicalSelect(title) {
	if (title) {
		document.querySelector(`.filter-span`).innerHTML =
			title;
	}

	if (filter.classList.contains(`filter-active`)) {
		filter_icon.src = `assets/content/selectW.png`;
		filter.classList.remove(`filter-active`);
		filter_window.classList.remove(`window-active`);
	} else {
		filter_icon.src = `assets/content/selectB.png`;
		filter.classList.add(`filter-active`);
		filter_window.classList.add(`window-active`);
	}
}

//*Отрисовка карточек
create(sets.all, `all`); //*Дефолт
pagination.innerHTML += `<div class="pag-element pag-active">${1}</div>`; //*Дефолт

//*При нажатии в любое место фильтр закрывется
document.addEventListener(`click`, function (evt) {
	let item = evt.target.closest(`.filter`);
	if (item || filter.classList.contains(`filter-active`)) {
		logicalSelect();
	}
});

//*Все категории кнопки
options.forEach((option) => {
	if (option) {
		option.addEventListener(`click`, function () {
			logic(option);
		});
	}
});


