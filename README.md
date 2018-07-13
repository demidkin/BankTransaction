# BankTransaction
Test task on the front-end development

1. Подключение репозитория  

```git
    git clone https://github.com/demidkin/BankTransaction.git
    cd ./BankTransaction
```

2. Установка зависимостей

```cmd
    npm install
```

3. Заупск API сервера (http://localhost:3000)

```cmd
    npm run api
```    

4. Запуск веб-сервра front-end

```npm
    npm start
``` 

Сборка webpack

    css:    ./dist/main.css
    js:     ./dist/main.js
    html:   ./dist/index.html


code

# ++ dist в гите
    убрал через gitignor
# ++ Нельзя указывать версию библиотеки как последнюю, при этом будут безконтрольные обновления, которые могут приводит к ошибкам работы
    Указал через версию пакетов через "~"
# ++ Могу перейти на страницу авторизации, регистрации уже после авторизации
    Добавил для /login и /signup PrivateRoute
# Импорты должны быть от корня проекта, а не относительно файла
    исправил с помощью path.resolve
#  state => ({ store: state } - так делать нельзя, это означает, что данный компонент зависит от всего, что есть в store, хотя это совсем не так
# src/components/login.component.js:27 - выставляется значение state, которого не было при инициализации
# src/components/login.component.js:32 - не кажется ли, что токен штука глобальная и должна не локально выставлятся, а через redux?
# src/components/login.component.js:34 - все actions Должны быть там, ручного type быть не должно
# Везде идёт странная логика, загрузка банков и их сохранение в store - идёт в компонентах, чего явно быть не должно
# src/components/transaction-add.component.js:30 - это вообще что? 0_о
# Зачем везде отплавять userId и token, это по сути одно и то же
# src/components/transaction-add.component.js - две компоненты в одном файле
# Дублирвоание алгоритма загрузки банков в разных компонентах
# На странице вывода списка транзакций Банки и трназакции грузятся последовтаельно, а должны параллельно
# id банка и индекс в массиве - не одно и то же, сделайте чтобы все id были > 100