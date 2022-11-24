class NavPanel {

    get menuLinks() {
        return '[role="menuitem"]';
    }

    get chosenLocation() {
        return '//*[@class="_1csvkmr7vv0DNR7_FHYI5C"]/span[2]';
    }

    get locationMenu() {
        return '[class="v-popover"]';
    }

    get lamoda() {
        return '[aria-label="Главная"]';
    }
    get name() {
        return '[placeholder="Имя"]';
    }

    get email() {
        return '[placeholder="Э-почта"]';
    }

    get textArea() {
        return '[placeholder="Отправить ваш вопрос Ctrl+Enter"]';
    }

    get urlToSwimmingSuites() {
        return "https://www.lamoda.by/c/3002/clothes-plyajnaya-odejda/";
    }

    get urlToUmbrellas() {
        return "https://www.lamoda.by/c/783/accs-zonty/?sort=price_asc&is_sale=1";
    }

    get filters() {
        return '._2RvJd9uB9bww2dMeikLFGO';
    }

    get selectionsForFilters() {
        return '._1miTFB0zeCCHFYVTXRv4vG';
    }

    get otherFilters() {
        return '.okxMrBZLwAeOqL7zQV-ZZ';
    }

    chooseTwoFilters(numberFilter1, selection, numberFilter2) {
        cy.get(this.filters).eq(numberFilter1).click({ force: true });
        cy.get(this.selectionsForFilters).eq(selection).click({ force: true });
        cy.get(this.otherFilters).eq(numberFilter2).click();
    }


    getMenuLinkByText(text) {
        return cy.xpath(`//*[contains(text(),"${text}")]`).eq(0);
    }

    clickByLinkText(text) {
        this.getMenuLinkByText(text).click({ force: true });
    }

    checkByLinkText(text) {
        this.getMenuLinkByText(text).check({ force: true });
    }


    getLocationByText(text) {
        return cy.xpath(`//*[text()="${text}"]/ancestor::a`);
    }

    clickLocationByName(text) {
        this.getLocationByText(text).click();
    }


    get searchButton() {
        return '.x-button.x-button_primaryFilled.x-button_32._1nlEyvyy1LHvJnhzmHYHEz';
    }

    get searchField() {
        return '.PLc0by6IIXkHZqPXeEFHY input';
    }

    get loginButton() {
        return '//*[contains(text(),"Войти")]';
    }
    get favorites() {

        return '[href="/wishlist/"]'
    }

    get profile() {
        return '//*[contains(text(),"Профиль")]';
    }

    get logoutButton() {
        return '//*[contains(text(),"Выйти")]';
    }

    get loginButton() {
        return '//*[contains(text(),"Войти")]';
    }


    get supportPage() {
        return '//*[contains(text(),"Центр поддержки Lamoda")]';
    }

}

module.exports = new NavPanel();