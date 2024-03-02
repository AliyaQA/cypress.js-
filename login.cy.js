describe('Проверка авторизации', function () {

   it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввожу пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти доступна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текс совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

   it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio123'); //ввожу неверный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти доступна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текс совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

   it('Проверка валидации полей', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввожу пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти доступна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текс совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели логин
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текс совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

      it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('geerman@dolnikov.ru'); // ввели неверный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввожу верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти доступна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текс совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

   it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввожу верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти доступна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текс совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

})

