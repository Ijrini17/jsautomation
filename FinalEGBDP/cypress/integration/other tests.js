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

it('verify login', () => {
    cy.login();
    cy.url().should('eq', 'http://192.168.101.147:5050/menu') 
});

it('verify history', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.searchHistory).click();
    cy.get(searchHistoryPage.date).eq(0).click();
    cy.xpath(searchHistoryPage.ok).click();
    cy.wait(500);
    cy.get(searchHistoryPage.date).eq(0).type('01.08.2022');
    cy.get(searchHistoryPage.date).eq(1).click();
    cy.xpath(searchHistoryPage.ok).click();
    cy.get(searchHistoryPage.date).eq(1).type('24.08.2022');

    cy.get(searchHistoryPage.checkboxes).eq(3).check();
    cy.get(searchHistoryPage.checkboxes).eq(4).check();
    cy.get(searchHistoryPage.search).click();
    cy.xpath(searchHistoryPage.confirm).click();
});

it('verify reference book', () => {
    cy.login();
    cy.get(menu.button).click();
    cy.wait(500);
    cy.xpath(menu.referenceBook).click();
    cy.get(referenceBookPage.code).click();
    cy.get(referenceBookPage.codeOption).click();
    cy.get(referenceBookPage.parameters).click();
    cy.get(referenceBookPage.parametersOption).click();
    cy.xpath(referenceBookPage.search).click();
    cy.get(referenceBookPage.results).eq(1).should('include.text', 'Наименование органа');

    cy.get(referenceBookPage.checkboxes).eq(0).then((checkbox) => {
     
        if (checkbox.checked)
        
        {
            cy.get(referenceBookPage.checkboxes).eq(1).uncheck();
            cy.get(referenceBookPage.save).click();
        }

        else {

            cy.get(referenceBookPage.checkboxes).eq(1).check({force: true});
            cy.xpath(referenceBookPage.save).click();
            cy.xpath(referenceBookPage.ok).click();
            //cy.get(referenceBookPage.checkboxes).eq(1).should('have.attr', 'checked');
            cy.get(referenceBookPage.results).eq(3).should('include.text', '3');
            cy.get(referenceBookPage.results).eq(5).should('include.text', referenceBookPage.currentDate);
         
            cy.get(referenceBookPage.checkboxes).eq(1).uncheck({force: true});
            cy.xpath(referenceBookPage.save).click();
            cy.xpath(referenceBookPage.ok).click();

            //cy.get(referenceBookPage.checkboxes).eq(1).should('not.have.attr', 'checked');
            cy.get(referenceBookPage.results).eq(3).should('include.text', '3');
            cy.get(referenceBookPage.results).eq(4).should('include.text', '3');
            cy.get(referenceBookPage.results).eq(6).should('include.text', referenceBookPage.currentDate);

        }

    })


});


})