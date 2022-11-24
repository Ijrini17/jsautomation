/// <reference types="cypress-xpath" />
const loginPage = require("../../pageobjects/login.page")
const menu = require("../../pageobjects/pagecomponents/menu")
const Page = require("../../pageobjects/page")
const createGroupPage = require("../../pageobjects/createGroup.page")
const createUserPage = require("../../pageobjects/createUser.page")
const searchViewGroupPage = require("../../pageobjects/searchViewGroup.page")
const searchViewUsersPage = require("../../pageobjects/searchViewUsers.page")
const searchHistoryPage = require("../../pageobjects/searchHistory.page")
const referenceBookPage = require("../../pageobjects/referenceBook.page")
const page = new Page();

context('Create User and Search User', () => {

beforeEach(() => {
  page.navigate('http://192.168.101.147:5050/')

});

it.skip('verify user creation ', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.createUser).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(createUserPage.checkboxes).eq(0).check();
    cy.get(createUserPage.checkboxes).eq(1).should('be.disabled');
    cy.get(createUserPage.checkboxes).eq(2).should('be.disabled');


    cy.get(createUserPage.surname).should('be.disabled');
    cy.get(createUserPage.name).should('be.disabled');
    cy.get(createUserPage.second_name).should('be.disabled');
    cy.get(createUserPage.birth_date).eq(0).should('be.disabled');
    cy.get(createUserPage.position).should('be.disabled');

    cy.xpath(createUserPage.worker).should('have.class','Mui-disabled');
    cy.xpath(createUserPage.noCheck).should('have.class','Mui-disabled');
    cy.xpath(createUserPage.buttonCheck).should('be.disabled');

    cy.get(createUserPage.login).type('test_iryna');
    cy.get(createUserPage.password).type('test123');
    cy.get(createUserPage.date).eq(1).type('17111988');

    cy.get(createUserPage.checkboxes).eq(5).check();
    cy.get(createUserPage.checkboxes).eq(6).check();

    cy.get(createUserPage.save).click();
    cy.get(createUserPage.confirm_message).should('include.text', 'Сохранено успешно');
  });



  it.skip('verify user creation with end date', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.createUser).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(createUserPage.checkboxes).eq(0).check();
    cy.get(createUserPage.checkboxes).eq(1).should('be.disabled');
    cy.get(createUserPage.checkboxes).eq(2).should('be.disabled');

    



    cy.xpath(createUserPage.worker).should('have.class','Mui-disabled');
    cy.xpath(createUserPage.noCheck).should('have.class','Mui-disabled');
    cy.xpath(createUserPage.buttonCheck).should('be.disabled');

    cy.get(createUserPage.login).type('test_iryna');
    cy.get(createUserPage.password).type('test123');
    cy.get(createUserPage.date).eq(1).type('17111988');

    cy.get(createUserPage.checkboxes).eq(5).check();
    cy.get(createUserPage.checkboxes).eq(6).check();

    cy.get(createUserPage.save).click();
    cy.get(createUserPage.confirm_message).should('include.text', 'Пользователь с данным логином уже существует!');
  });

  it.skip('verify user creation without end date', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.createUser).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(createUserPage.checkboxes).eq(0).check();
    cy.get(createUserPage.checkboxes).eq(1).should('be.disabled');
    cy.get(createUserPage.checkboxes).eq(2).should('be.disabled');

    cy.xpath(createUserPage.worker).should('have.class','Mui-disabled');
    cy.xpath(createUserPage.noCheck).should('have.class','Mui-disabled');
    cy.xpath(createUserPage.buttonCheck).should('be.disabled');

    cy.get(createUserPage.login).type('test_iryna');
    cy.get(createUserPage.password).type('test123');
    cy.get(createUserPage.checkboxes).eq(3).check();

    cy.get(createUserPage.checkboxes).eq(5).check();
    cy.get(createUserPage.checkboxes).eq(6).check();

    cy.get(createUserPage.save).click();
    cy.get(createUserPage.confirm_message).should('include.text', 'Пользователь с данным логином уже существует!');
  });

  it.skip('verify user creation without system-system check', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.createUser).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
  
    cy.get(createUserPage.surname).type('Спорова');
    cy.get(createUserPage.name).type('Ирина');
    cy.get(createUserPage.second_name).type('Сергеевна');
    cy.get(createUserPage.birth_date).eq(0).type('01082022');
    cy.get(createUserPage.position).type('тестировщик');

    cy.get(createUserPage.login).type('test_iryna2');
    cy.get(createUserPage.password).type('test123');
    cy.get(createUserPage.date).eq(1).type('17111988');

    cy.get(createUserPage.checkboxes).eq(5).check();
    cy.get(createUserPage.checkboxes).eq(6).check();

    cy.get(createUserPage.save).click();
    cy.get(createUserPage.confirm_message).should('include.text', 'Сохранено успешно');
  });


  it.skip('verify user creation without system-system check', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.createUser).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();

    cy.get(createUserPage.surname).type('Спорова');
    cy.get(createUserPage.name).type('Ирина');
    cy.get(createUserPage.second_name).type('Сергеевна');
    cy.get(createUserPage.birth_date).eq(0).type('01082022');
    cy.get(createUserPage.position).type('тестировщик');
    

    cy.get(createUserPage.login).type('test_iryna2');
    cy.get(createUserPage.password).type('test123');
    cy.get(createUserPage.date).eq(1).type('17111988');

    cy.get(createUserPage.checkboxes).eq(5).check();
    cy.get(createUserPage.checkboxes).eq(6).check();

    cy.get(createUserPage.save).click();
    cy.get(createUserPage.confirm_message).should('include.text', 'Пользователь с данным логином уже существует!');
  });


it.skip('verify user search', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewUsers).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(searchViewGroupPage.groupDescription).type('Описание группы');
    cy.get(searchViewUsersPage.login).scrollIntoView().type('test');
    cy.get(searchViewUsersPage.name).type('Спорова Ирина Сергеевна');
    cy.xpath(searchViewUsersPage.search).click();
    cy.get(searchViewUsersPage.userSearchColumns).eq(3).should('include.text', 'тестировщик');
});

it.skip('verify user search and edit', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewUsers).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(searchViewGroupPage.groupDescription).type('Описание группы');
    cy.xpath(searchViewUsersPage.search).click();
    cy.get(searchViewUsersPage.edit).eq(0).click();
    cy.url().should('include', 'http://192.168.101.147:5050/users/edit/'); 
});

it.skip('verify user search and view permissions', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewUsers).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(searchViewGroupPage.groupDescription).type('Описание группы');
    cy.xpath(searchViewUsersPage.search).click();
    cy.get(searchViewUsersPage.permissions).eq(0).click();
    cy.wait(500);
    cy.get(searchViewUsersPage.permissionDetails).its('length').then(($sz) => {
    cy.get(searchViewUsersPage.permissionDetails).eq($sz-2).should('include.text', 'Сервис представляет возможность проведения логического контроля для формы АП 1; Администрация района в городе, Органы Министерства обороны, Налоговые органы, Областной (Минский городской) исполнительный комитет, Суды общей юрисдикции, Органы внутренних дел, Органы Следственного комитета Республики Беларусь, Органы Государственного комитета по имуществу, Органы Государственного комитета по науке и технологиям, Органы Государственного комитета по стандартизации, Органы государственной безопасности, Органы Комитета государственного контроля, Органы Государственной инспекции по охране животного и растительного мира, Органы Министерства архитектуры и строительства, Органы Министерства жилищно-коммунального хозяйства, Органы Министерства здравоохранения, Органы Министерства иностранных дел, Органы Министерства информации, Органы Министерства культуры, Органы Министерства лесного хозяйства, Органы Министерства природных ресурсов и охраны окружающей среды, Органы Министерства связи и информатизации, Органы Министерства сельского хозяйства и продовольствия; Кодекс об административных правонарушениях от 21 апреля 2003 г.:  c.9.1 ч.1,  c.9.1 ч.2');
    cy.get(searchViewUsersPage.permissionDetails).eq($sz-1).should('include.text', 'Сервис представляет возможность проведения логического контроля для формы АП 2; Администрация района в городе, Органы Министерства обороны, Налоговые органы, Областной (Минский городской) исполнительный комитет, Суды общей юрисдикции, Органы внутренних дел, Органы Следственного комитета Республики Беларусь, Органы Государственного комитета по имуществу, Органы Государственного комитета по науке и технологиям, Органы Государственного комитета по стандартизации, Органы государственной безопасности, Органы Комитета государственного контроля, Органы Государственной инспекции по охране животного и растительного мира, Органы Министерства архитектуры и строительства, Органы Министерства жилищно-коммунального хозяйства, Органы Министерства здравоохранения, Органы Министерства иностранных дел, Органы Министерства информации, Органы Министерства культуры, Органы Министерства лесного хозяйства, Органы Министерства природных ресурсов и охраны окружающей среды, Органы Министерства связи и информатизации, Органы Министерства сельского хозяйства и продовольствия; Кодекс об административных правонарушениях от 21 апреля 2003 г.:  c.9.1 ч.1,  c.9.1 ч.2');
    })
});

it.skip('verify user search and prolong', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewUsers).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(searchViewGroupPage.groupDescription).type('Описание группы');
    cy.xpath(searchViewUsersPage.search).click();
    cy.get(searchViewUsersPage.prolong).eq(0).click();
    cy.get(searchViewUsersPage.prolongDate).clear().type('20102020');
    cy.xpath(searchViewUsersPage.submit).click();
    cy.get(searchViewUsersPage.alert).should('include.text', 'Сохранено успешно');
});

it.skip('verify user search and reset password', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewUsers).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.xpath(createUserPage.groupOptionByText).click();
    cy.get(searchViewGroupPage.groupDescription).type('Описание группы');
    cy.xpath(searchViewUsersPage.search).click();
    cy.get(searchViewUsersPage.resetPassword).eq(0).click();
    cy.get(searchViewUsersPage.alert2).should('include.text', 'Пароль сброшен успешно');
});


it.skip('verify organization is reset', () => {
  cy.login();
  cy.get(menu.button).click();
  cy.wait(500);
  cy.xpath(menu.createUser).click();
  cy.get(createUserPage.organ).click();
  cy.get(createUserPage.ovd).click();
  cy.get(createUserPage.organization).click();
  cy.get(createUserPage.orgOption).click();
  cy.get(createUserPage.organ).click();
  cy.get(createUserPage.ovd1).click();
  cy.get(createUserPage.organization).should('have.text', '');
});


it.skip('verify organization is reset', () => {
  cy.login();
  cy.get(menu.button).click();
  cy.wait(500);
  cy.xpath(menu.createUser).click();
  cy.get(createUserPage.organ).click();
  cy.get(createUserPage.ovd).click();
  cy.get(createUserPage.organization).click();
  cy.get(createUserPage.orgOption).click();
  cy.get(createUserPage.group).click();
  cy.xpath(createUserPage.groupOptionByText).click();

  cy.get(createUserPage.organization).click();
  cy.get(createUserPage.orgOption1).click();


  cy.get(createUserPage.group).should('have.text', '');
});






})