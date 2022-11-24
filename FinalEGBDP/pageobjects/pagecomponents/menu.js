

class Menu {

    get button() {
        return 'button[aria-label="open drawer"]';
    }
    get createGroup() {
        return '//*[contains(text(),"Создание группы")]';
    }

    get createUser() {
        return '//*[contains(text(),"Создание  пользователя")]';
    }

    get search_viewGroups() {
        return '//*[contains(text(),"Поиск и просмотр групп")]';
    }

    get search_viewUsers() {
        return '//*[contains(text(),"Поиск и просмотр пользователей")]';
    }

    get searchHistory() {
        return '//*[contains(text(),"Поиск по истории запросов")]';
    }

    get referenceBook() {
        return '//*[contains(text(),"Справочники")]';
    }




    get submit() {
        return '[type="submit"]';
    }

}

module.exports = new Menu ();