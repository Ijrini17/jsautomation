const Page = require('./page');

class SearchHistoryPage extends Page {

get date(){
        return '[placeholder="дд.мм.гггг"]';
}


get ok(){
    return '//*[contains(text(),"OK")]';
}

get checkboxes(){
    return '[type="checkbox"]';
}

get search(){
    return '[aria-label="Найти"]';
}

get confirm(){
    return '//*[contains(text(),"Подтвердить")]';
}




}

module.exports = new SearchHistoryPage();