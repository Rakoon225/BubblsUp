function logic(option) {
  category = option.dataset.value; //*Категория (she, he)
  let title = option.dataset.title; //*Название категории (Для неё, Для него)
  let notes = sets[category].slice(0, onPage); //*Разделяем список для пагинации
  create(notes, category, title); //*Отрисовываем дефолтные первые карточки
  logicalSelect(title);

  let count_of_cards = sets[category].length; //*Сколько всего карточек в данной категории
  count_of_cards = Math.ceil(count_of_cards / onPage); //*Число пагинационных кнопок
  pagination.innerHTML = ``;
  for (let i = 0; i < count_of_cards; i++) {
    //*Добавляем пагинационные кнопки
    pagination.innerHTML += `
              <div class="pag-element">${i + 1}</div>
          `;

    //Пагинация
    //*Логика пагинации
    let pags = document.querySelectorAll(`.pag-element`); //*Все пагинационные кнопки
    pags[0].classList.add(`pag-active`); //*Дефолт
    for (let i = 0; i < pags.length; i++) {
      let pag = pags[i];
      pag.addEventListener(`click`, function () {
        //*При нажатии меняет стили
        if (pag) {
          if (!pag.classList.contains(`pag-active`)) {
            pags.forEach((pag) =>
              pag.classList.remove(`pag-active`)
            );
            pag.classList.add(`pag-active`);
          }

          //отрисовка
          if (!category) {
            //*Если категории нет, отрисовывается категрия 'all'
            category = `all`;
          }

          const pageNum = pag.innerHTML; //*Цифра, которую содержит в себе пагинационная кнопка
          const start = (pageNum - 1) * onPage; //*Начало отрисовки
          const end = start + onPage; //*Конец отрисовки
          notes = sets[category].slice(start, end); //*Обрезанный список
          create(notes, category, title); //*Отрисовываем данный список
        }
      });
    }
  }
}
