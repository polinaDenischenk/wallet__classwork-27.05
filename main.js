let purcasheArray = [];
let btn = form.addBtn;
let tbody = document.querySelector("#tbody");
let categories = document.querySelectorAll(".legend__desc");
let prices = document.querySelectorAll(".legend__price");

console.log(categories);

// Обработка клика кнопки "Добавить"
btn.addEventListener("click", (evt) => {
  // Объвление объекта покупки
  let purcashe = {};

  // Отмена действия по умолчанию
  evt.preventDefault();

  // Получить значение из полей форм и записать в объект покупки

  // Наименование покупки
  purcashe.name = form.name.value;

  // Стоимость покупки
  // Знак плюса перед значением преобразовывает в числовой тип
  purcashe.price = +form.price.value;

  // Получить коллекцию option из селекта
  let options = form.selectCategory.options;

  // selectedIndex - индекс выбранного элемента в селекте
  // selectCategory -идентификатор селекта
  // Получить имя категории (Продукты, Фастфуд, Спорт, Напитки)
  purcashe.category = options[form.selectCategory.selectedIndex].innerText;

  for (let category of categories) {
    if (purcashe.category == category.innerText) {
      category.nextElementSibling.textContent =
        Number(category.nextElementSibling.innerText) + purcashe.price;
    }
  }
  // Передаем в массив созданный объект (покупку)
  purcasheArray.push(purcashe);

  console.log(purcasheArray);

  // В элемент tbody передаем разметку, используя метод insertAdjacentHTML
  tbody.insertAdjacentHTML(
    "beforeEnd",
    `        
            <tr class="purcashes__item purcashes__row" data-category="product">
                <td class="purcashes__td">${purcashe.name}</td>
                <td class="purcashes__td">${purcashe.category}</td>
                <td class="purcashes__td">${purcashe.price}</td>
                <td class="purcashes__td"><i class="purcashes__item-del fa-solid fa-xmark"></i></td>
            </tr>
        `
  );

  // Сброс полей
  form.reset();
});

// Удаление покупки
tbody.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("purcashes__item-del")) {
    evt.target.closest("tr").remove();
  }
});
