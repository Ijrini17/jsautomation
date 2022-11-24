class SearchViewGroupPage {

    get groupDescription() {
        return '[placeholder="Описание группы"]';
    }

    get groupDescription() {
        return '[placeholder="Описание группы"]';
    }

    get groupSearchColumns() {
        return '.MuiTableCell-sizeMedium.css-u4j888';
    }

    get edit() {
        return '[data-testid="CreateIcon"]';
    }

    get viewPermissions() {
        return '[aria-label="Просмотреть все полномочия"]';
    }

    get permissions() {
        return '//*[@class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-u4j888"]';
    }


    




    get buttons() {
        return '.css-1dduu9y';
    }



   
}

module.exports = new SearchViewGroupPage();