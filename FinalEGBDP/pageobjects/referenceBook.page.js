const Page = require('./page');

class ReferenceBookPage extends Page {

    get code() {
        return '[id="card-select"]';
    }

    get codeOption() {
        return '.MuiMenuItem-root:nth-child(3)';
    }

    get parameters() {
        return '[id="receiving-data-select"]';
    }

    get parametersOption() {
        return '.MuiMenuItem-root:nth-child(1)';
    }

    get search() {
        return '//*[contains(text(),"Найти")]';
    }

    get results() {
        return 'td.MuiTableCell-root';
    }

    get checkboxes() {
        return '[type="checkbox"]';
    }


    get save() {
        return '//*[contains(text(),"Сохранить")]';
    }

    get currentDate() {
        let date = new Date()
        let day = date.getDate();
        if (day<10)
        {day='0'+day}
        let month = date.getMonth() + 1;
        if (month<10)
        {month='0'+month}
        let year = date.getFullYear();

        let fullDate = `${day}.${month}.${year}`;
        return fullDate;
    }

    get ok(){
        return '//*[contains(text(),"Ок")]';
    }








}

module.exports = new ReferenceBookPage();