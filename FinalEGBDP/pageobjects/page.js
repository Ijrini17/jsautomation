module.exports = class Page {



    navigate(url) {
        cy.visit(url);
    }

    get body() {
        return 'html body';
    }
  
    get viewVersion() {
        return '.x-footer__text.x-footer__text_version a';
    }

  
    get changeCountry() {
        return '_1AR2XhEV5E8I6iCinUOpAs';
    }

}