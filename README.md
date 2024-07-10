# SPA на Angular 

[Деплой](https://angular-test-task-for-nekta.onrender.com/)

Для входа:  
логин - demo@nekta.cloud  
пароль - qwertyqwerty  

## Реализовано:
- компонент авторизации по e-mail и паролю:
  - валидация формы,
  - обработка глобальных ошибок,
  - скрыть/показать пароль,
  - токен сохраняется в localStorage
    
- компонент отображения списка устройств:
  - запрос на сервер,
  - сохранение данных в localStorage,
  - обработка глобальных ошибок,
  - лоадер
  - логаут
    
- в дизайне частично использована библиотека Angular Material UI

## Локальный запуск:

#### Клонировать репозиторий:
```
git clone https://github.com/NatalieKalinkina/angular_test-task_for_nekta.git
```
#### Установить зависимости:

```
npm install
```
#### Запустить приложение:

```
ng serve --open
```
