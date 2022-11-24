<reference types="cypress-xpath" />
const navPanel = require("../../pageobjects/pagecomponents/nav.panel")
const suNews = require("../../pageobjects/searchViewGroup.page")
const loginPage = require("../../pageobjects/login.page")
const detailsPage = require("../../pageobjects/createUser.page")

const supportPages = require("../../pageobjects/referenceBook.page")
const elements = require("../../pageobjects/pagecomponents/elementsonpage")
const Page = require("../../pageobjects/page")
const page = new Page();

context('LaModa tests', () => {

  beforeEach(() => {
    page.navigate('http://www.lamoda.by/women-home/')

  });

  it('verify Lamoda text contains link', () => {

    cy.get(navPanel.lamoda)
      .should('have.attr', 'href', '/');
  });

  it('verify creating account (wont be created as it was created earlier)', () => {

    cy.xpath(navPanel.loginButton).click();
    cy.xpath(loginPage.createAccount).click();
    cy.waitFor(loginPage.name);
    cy.wait(3000);
    cy.get(loginPage.emailField).eq(1).type("isporova@yandex.ru", { force: true });
    cy.get(loginPage.passwordField1).type("12345678");
    cy.get(loginPage.confirmPasswordField).type("12345678");
    cy.get(loginPage.name).type("Ирина");
    cy.get(loginPage.policyAgreement).eq(1).check({ force: true });
    cy.xpath(loginPage.registerButton).click();
    cy.get(loginPage.messageOnReject)
      .should('have.text', '\n        Другая учетная запись зарегистрирована на указанный адрес электронной почты.\n      ');
  });


  it('verify login with earlier created account', () => {

    cy.xpath(navPanel.loginButton).click();
    cy.login();
    cy.xpath(navPanel.profile)
      .should('be.visible');
  });

  it('verify logout', () => {

    cy.xpath(navPanel.loginButton).click();
    cy.login();
    cy.xpath(navPanel.profile)
      .should('be.visible');
    cy.xpath(navPanel.profile).trigger('mouseover');
    cy.xpath(navPanel.logoutButton).click();
    cy.xpath(navPanel.loginButton)
      .should('be.visible');
  });

  it('verify search by cypress', () => {
    cy.wait(3000);
    cy.get(navPanel.searchButton).click();
    cy.get(navPanel.searchField).click()
      .type("cypress");
    cy.get(navPanel.searchButton).click();
    cy.get(elements.product).eq(0).contains('cypress', { matchCase: false });
  });


  it('verify adding to Favourites changes colour of heart element', () => {

    navPanel.clickByLinkText("Новинки");
    cy.get(elements.addToFavourites).eq(0).click();
    cy.login();
    cy.wait(5000);
    cy.get(elements.addToFavourites).eq(1).click({ force: true });
    cy.wait(5000);
    cy.get(elements.addedToFavourites).eq(0)
      .should('have.css', 'background-image', 'url("https://a.lmcdn.ru/static/22.05.18/img/8ee05031374fabe74a6c68b27f06fb52.svg")')

  });

  it('verify adding products to Favourites', () => {

    navPanel.clickByLinkText("Обувь");
    cy.get(elements.addToFavourites).eq(0).click();
    cy.login();
    cy.get(elements.addToFavourites).eq(1).click({ force: true });
    cy.get(navPanel.favorites).click();
    cy.get(elements.element)
      .should('have.length.above', 1);
  });

  //products were added to Favourites in previous tests
  it('verify removing products from Favourites', () => {

    cy.xpath(navPanel.loginButton).click();
    cy.login();
    cy.get(navPanel.favorites).click();
    cy.get(elements.removeFromFavourites).its("length")
      .then((ln) => {
        let number = ln;
        cy.get(elements.removeFromFavourites).eq(0)
          .click({ force: true });
        cy.get(elements.element)
          .should('have.length', number - 1);
      });
  });

  it('verify text of ReadMore is a link', () => {

    navPanel.clickByLinkText("Блог");
    cy.get(elements.readMore)
      .should('be.visible')
      .should('have.attr', 'href');
  });

  it('verify text of OldPrice is line-through', () => {

    navPanel.clickByLinkText("Sale%");
    cy.get(elements.oldPrice)
      .should('be.visible')
      .should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
  });

  it('verify changing version: mobile/desktop', () => {

    cy.intercept('*/?sv=mob').as('mobile');
    cy.intercept('*/?sv=dsk').as('desktop');
    cy.get(page.viewVersion).click();
    cy.wait('@mobile');
    cy.get(page.body)
      .should('have.class', 'desktop'); //должно быть 'mobile', но на сайте не работает
    cy.get(page.viewVersion).click();
    cy.wait('@desktop');
    cy.get(page.body)
      .should('have.class', 'desktop');
  });

  it('should allow to sign up for news', () => {

    navPanel.clickByLinkText("Блог");
    cy.scrollTo(150, 9935);
    cy.get(suNews.emailField).type('isporova@yandex.ru');
    cy.get(suNews.policyAgreement).check({ force: true });
    cy.get(suNews.buttonForWomen).click();
    cy.get(suNews.confirmOnSubscribe).eq(1)
      .should('contain.text', 'Письмо с промокодом уже на почте');

  });

  it('verify changing current location', () => {
    cy.get(navPanel.locationMenu).click();
    navPanel.clickLocationByName('г. Молодечно');
    cy.xpath(navPanel.chosenLocation).should('have.text', 'г. Молодечно');

  });


  it('verify adding item to a cart with name and brand', () => {

    cy.get(navPanel.menuLinks).eq(4).click();
    navPanel.clickByLinkText("Купальники и пляжная одежда");
    cy.get(elements.brand).eq(15).invoke("text").then((brand) => {
      cy.get(elements.product).eq(15).invoke("text").then((product) => {
        cy.get(elements.element).eq(15).click();
        cy.get(detailsPage.chooseSize).click();
        cy.get(detailsPage.sizes).eq(1).click();
        cy.get(detailsPage.addToCart).click();
        cy.get(cartPage.productDetails).should('include.text', brand);
        cy.get(cartPage.productDetails).should('include.text', product);
      })
    });
  });


  it('verify displaying all umbrellas with discount', () => {

    cy.get(navPanel.menuLinks).eq(6).click();
    cy.wait(3000);
    navPanel.clickByLinkText("Зонты");
    cy.wait(3000);
    navPanel.chooseTwoFilters(0, 1, 6);
    cy.wait(3000);
    cy.get(elements.element).its('length').then((count) => { cy.get(elements.discountLabel).should('have.length', count); });

  });

  it('verify sorting boots descending by price', () => {

    cy.get(navPanel.menuLinks).eq(5).click();
    cy.wait(3000);
    navPanel.chooseTwoFilters(0, 2, 11);
    cy.wait(3000);
    cy.get(elements.priceNew).eq(1).invoke('text').then((value) => {
      let valueLess = +value.replace('р.', '').replace(' ', '').trim();
      cy.get(elements.priceNew).eq(0).invoke('text').then((value1) => {
        let valueBigger = +value1.replace('р.', '').replace(' ', '').trim();
        expect(valueLess).to.be.lessThan(valueBigger);
      })
    });
  });


  it('verify selecting country', () => {

    navPanel.clickByLinkText("Premium");
    cy.scrollTo(0, 2200);
    navPanel.clickByLinkText("сменить страну");
    navPanel.clickByLinkText("Украина");
    cy.url().should('include', 'lamoda.ua');
  })

  it('verify search on Support page', () => {

    cy.xpath(navPanel.supportPage).invoke('removeAttr', 'target').click();
    cy.get(supportPages.searchField).type('заказ');
    cy.get(supportPages.searchButton).click();
    cy.get(supportPages.results).eq(0).contains('заказ', { matchCase: false });
  });

  it('verify checking Order status', () => {

    navPanel.clickByLinkText('Статус заказа по номеру');
    cy.get(supportPages.orderField).type('BY123456-123456');
    cy.get(supportPages.phoneField).type('+375293858431');
    cy.get(supportPages.checkButton).click();
    cy.get(supportPages.orderNotFound).should('include.text', 'Заказ не найден. Пожалуйста, проверьте, правильно ли указаны номер заказа и телефон.');
  });


  it('verify choosing address for an Order', () => {

    navPanel.clickByLinkText('Условия доставки');
    cy.get(supportPages.address).clear().type('Минск');
    cy.get(supportPages.ddValues).eq(0).click();
    cy.get(supportPages.optionsForDelivery).eq(1).check({ force: true });
    cy.get(supportPages.listOfPlaces).eq(0).click();
    cy.get(supportPages.chosenPlace).should('include.text', 'ул. П. Мстиславца, 18');
  });

})