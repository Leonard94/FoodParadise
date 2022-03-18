<h1 align="center">Сборник рецептов на React.js</h1>
</br>

<p align='center'>
<img width='700' src='http://vladkoleda.ru/img/gif__food-paradise.gif'>
</p>



## 🌟 Описание

Приложение для поиска рецептов блюд на основе API "TheMealDB"
<br>
- Поиск рецепта по категории
- Поиск рецепта по имени блюда
- Рецепт можно добавить в избранное
- Избранное синхронизируется с LocalStorage
<br>  

Использованные библиотеки:
- Redux
- React-Redux
- Redux-thunk
- React-router-dom
- Sass
- Lodash


## 🚀 Выбрать что готовить в выходные:


[Клик](http://foodparadise.vladkoleda.ru/)


<br>

## Описание
При переходе на страницу "Categories" приложение через api запрашивает информацию о всех категориях. После получения данных, происходит рендеринг карточек с фото категорий и названием. При нажатии на эту карточку, осуществляется переход на страницу со списком рецептов выбранной категории, эта страница запрашивает список рецептов на основании параметров URL. По такой же логике работает страница рецепта ("Recipe") - запрашивается детальный рецепт на основании URL.

Поиск возможен только на главной странице "Home". Он осуществляется по наличии названия рецепта в поисковом запросе. Если ничего не найдено, то сервер возвращает ответ "null", а пользователю отрисовывается надпись - "No results found for...". Поиск производится после подтверждения ввода нажатием на кнопку "Search" или клавишу enter 

Каждый рецепт можно добавить в избранное ("favorites") или удалить из него. Список избранных рецептов сохраняется в LocalStorage. Синхронизация происходит помощью persist





## 🛠️ Technologies & Tools
![HTML](https://img.shields.io/badge/-HTML-3C287D?style=for-the-badget&logo=html5)
![CSS](https://img.shields.io/badge/-CSS-3C287D?style=for-the-badget&logo=css3)
![JavaScript](https://img.shields.io/badge/-JAVASCRIPT-3C287D?style=for-the-badget&logo=JavaScript)
![REACT.JS](https://img.shields.io/badge/-REACT-3C287D?style=for-the-badget&logo=html5)


<br>



## 🔧 Установка
1. Склонировать репозиторий
```
git clone https://github.com/Leonard94/FoodParadise.git
```

2. Установить зависимости
```
npm install
```
3. Запустить проект
```
npm start
```
4. Готово!
```
Happy Hacking!
```

