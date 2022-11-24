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

context('EGBDP tests', () => {

beforeEach(() => {
  page.navigate('http://192.168.101.147:5050/')

});


it.skip('verify creating group', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.xpath(menu.createGroup).click();
    cy.get(createGroupPage.organ).click();
    cy.get(createGroupPage.ovd).click();
    cy.get(createGroupPage.organization).click();
    cy.get(createGroupPage.orgOption).click();
    cy.get(createGroupPage.groupName).type("Группа");
    cy.get(createGroupPage.groupDescription).type("Описание группы");
    cy.get(createGroupPage.checkboxes).eq(2).check();
    cy.get(createGroupPage.checkboxes).eq(5).check();
    cy.get(createGroupPage.checkboxes).eq(18).check();
    cy.get(createGroupPage.checkboxes).eq(20).check();
    cy.get(createGroupPage.checkboxes).eq(70).check();
    cy.get(createGroupPage.checkboxes).eq(80).check();
    cy.wait(500);
    cy.get(createGroupPage.checkboxes).eq(150).check();
    cy.get(createGroupPage.checkboxes).eq(169).check();
    cy.get(createGroupPage.addPowers).click();
    cy.get(createGroupPage.service_organ).eq(0).should('include.text', 'Сервис представляет возможность проведения логического контроля для формы АП 2');
    cy.get(createGroupPage.service_organ).eq(1).should('include.text', 'Сервис представляет возможность проведегния логического контроля для формы Ф 2');
    cy.get(createGroupPage.service_organ).eq(2).should('include.text', 'Получение карточки 2');
    cy.get(createGroupPage.service_organ).eq(3).should('include.text', 'Получение карточки 1-Л');
    cy.get(createGroupPage.qualification_article).eq(0).should('include.text', ' Декрет от 17 марта 1997 г. № 9;');
    cy.get(createGroupPage.qualification_article).eq(1).should('include.text', ' Указ от 20 марта 1996 г. N 109;');
    cy.get(createGroupPage.qualification_article).eq(2).should('include.text', ' Постановление Правления Национального банка Республики Беларусь от 27 июня 2003 г. № 125;');
    cy.get(createGroupPage.save).click();
    cy.get(createUserPage.confirm_message).should('include.text', 'Группа сохранена успешно.');


});

it.skip('verify creating group with special symbols in group name and description', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.xpath(menu.createGroup).click();
    cy.get(createGroupPage.organ).click();
    cy.get(createGroupPage.ovd).click();
    cy.get(createGroupPage.organization).click();
    cy.get(createGroupPage.orgOption).click();
    cy.get(createGroupPage.groupName).type("@№#$;%:?*()_+^&*.,~!`=");
    cy.get(createGroupPage.groupDescription).type("@№#$;%:?*()_+^&*.,~!`=");
    cy.get(createGroupPage.checkboxes).eq(2).check();
    cy.get(createGroupPage.checkboxes).eq(5).check();
    cy.get(createGroupPage.checkboxes).eq(18).check();
    cy.get(createGroupPage.checkboxes).eq(20).check();
    cy.get(createGroupPage.checkboxes).eq(70).check();
    cy.get(createGroupPage.checkboxes).eq(80).check();
    cy.wait(500);
    cy.get(createGroupPage.checkboxes).eq(150).check();
    cy.get(createGroupPage.checkboxes).eq(169).check();
    cy.get(createGroupPage.addPowers).click();
    cy.get(createGroupPage.service_organ).eq(0).should('include.text', 'Сервис представляет возможность проведения логического контроля для формы АП 2');
    cy.get(createGroupPage.service_organ).eq(1).should('include.text', 'Сервис представляет возможность проведегния логического контроля для формы Ф 2');
    cy.get(createGroupPage.service_organ).eq(2).should('include.text', 'Получение карточки 2');
    cy.get(createGroupPage.service_organ).eq(3).should('include.text', 'Получение карточки 1-Л');
    cy.get(createGroupPage.qualification_article).eq(0).should('include.text', ' Декрет от 17 марта 1997 г. № 9;');
    cy.get(createGroupPage.qualification_article).eq(1).should('include.text', ' Указ от 20 марта 1996 г. N 109;');
    cy.get(createGroupPage.qualification_article).eq(2).should('include.text', ' Постановление Правления Национального банка Республики Беларусь от 27 июня 2003 г. № 125;');
    cy.get(createGroupPage.save).click();
    cy.get(createUserPage.confirm_message).should('include.text', 'Группа сохранена успешно.');
});








 it.skip('verify group search', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewGroups).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.get(createUserPage.groupOption).invoke('text').then((groupName) => {
    cy.get(createUserPage.groupOption).click();
    cy.get(searchViewGroupPage.buttons).eq(0).click();
    cy.wait(500);
    cy.get(searchViewGroupPage.groupSearchColumns).eq(2).should('include.text', groupName);
    })

});


it.skip('verify group search and view', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewGroups).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    cy.get(createUserPage.groupOption).click();
    cy.get(searchViewGroupPage.buttons).eq(0).click();
    cy.get(searchViewGroupPage.edit).eq(0).click();
    cy.url().should('include', 'http://192.168.101.147:5050/groups/edit/'); 
});


it.skip('verify group search and view permissions', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.search_viewGroups).click();
    cy.get(createUserPage.organ).click();
    cy.get(createUserPage.ovd).click();
    cy.get(createUserPage.organization).click();
    cy.get(createUserPage.orgOption).click();
    cy.get(createUserPage.group).click();
    
    cy.xpath(createUserPage.groupOptionByText).click();

    cy.get(searchViewGroupPage.buttons).eq(0).click();
    cy.get(searchViewGroupPage.viewPermissions).click();
    cy.wait(500);
    cy.xpath(searchViewGroupPage.permissions).eq(3).should('include.text', 'Сервис представляет возможность проведения логического контроля для формы АП 1; Администрация района в городе, Органы Министерства обороны, Налоговые органы, Областной (Минский городской) исполнительный комитет, Суды общей юрисдикции, Органы внутренних дел, Органы Следственного комитета Республики Беларусь, Органы Государственного комитета по имуществу, Органы Государственного комитета по науке и технологиям, Органы Государственного комитета по стандартизации, Органы государственной безопасности, Органы Комитета государственного контроля, Органы Государственной инспекции по охране животного и растительного мира, Органы Министерства архитектуры и строительства, Органы Министерства жилищно-коммунального хозяйства, Органы Министерства здравоохранения, Органы Министерства иностранных дел, Органы Министерства информации, Органы Министерства культуры, Органы Министерства лесного хозяйства, Органы Министерства природных ресурсов и охраны окружающей среды, Органы Министерства связи и информатизации, Органы Министерства сельского хозяйства и продовольствия; Кодекс об административных правонарушениях от 21 апреля 2003 г.:  c.9.1 ч.1,  c.9.1 ч.2 ');
    cy.xpath(searchViewGroupPage.permissions).eq(4).should('include.text', 'Сервис представляет возможность проведения логического контроля для формы АП 2; Администрация района в городе, Органы Министерства обороны, Налоговые органы, Областной (Минский городской) исполнительный комитет, Суды общей юрисдикции, Органы внутренних дел, Органы Следственного комитета Республики Беларусь, Органы Государственного комитета по имуществу, Органы Государственного комитета по науке и технологиям, Органы Государственного комитета по стандартизации, Органы государственной безопасности, Органы Комитета государственного контроля, Органы Государственной инспекции по охране животного и растительного мира, Органы Министерства архитектуры и строительства, Органы Министерства жилищно-коммунального хозяйства, Органы Министерства здравоохранения, Органы Министерства иностранных дел, Органы Министерства информации, Органы Министерства культуры, Органы Министерства лесного хозяйства, Органы Министерства природных ресурсов и охраны окружающей среды, Органы Министерства связи и информатизации, Органы Министерства сельского хозяйства и продовольствия; Кодекс об административных правонарушениях от 21 апреля 2003 г.:  c.9.1 ч.1,  c.9.1 ч.2'); 
});

})