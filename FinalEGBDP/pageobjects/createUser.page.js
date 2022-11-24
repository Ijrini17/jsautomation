const Page = require('./page');

class CreateUserPage extends Page {

    get organ() {
        return '[id="organ"]';
    }

    get ovd() {
        return '[id=organ-option-5]';
    }

    get ovd1() {
        return '[id=organ-option-7]';
    }

    get organization() {
        return '[id="organisation"]';
    }

    get orgOption() {
        return '[id=organisation-option-3]';
    }

    get orgOption1() {
        return '[id=organisation-option-5]';
    }
    get group() {
        return '[id="group"]';
    }

    get groupOption() {
        return '[id=group-option-1]';
    }

    get groupOptionByText() {
        return '//*[contains(text(),"группа2")]';
    }



    get name() {
        return '[id="Name"]';
    }

    get surname() {
        return '[id="Surname"]';
    }

    get second_name() {
        return '[id="Fathername"]';
    }

    get birth_date() {
        return '[placeholder="дд.мм.гггг"]';
    }

    get position() {
        return '[id="Position"]';
    }



    get checkboxes() {
        return '[type="checkbox"]';
    }


    get buttonCheck() {
        return '//*[contains(text(),"Проверить в АИС Паспорт")]';
    }

    get worker() {
        return '//*[contains(text(),"Сотрудник ИЦ")]';
    }

    get noCheck() {
        return '//*[contains(text(),"Без проверки в АИС Паспорт")]';
    }
    
    get login() {
        return '[id="login"]';
    }

    get password() {
        return '[type="password"]';
    }

    get date() {
        return '[placeholder="дд.мм.гггг"]';
    }

    get save() {
        return '[aria-label="Сохранить пользователя"]';
    }

    get confirm_message() {
        return '.MuiDialogContentText-root.MuiTypography-root.MuiTypography-body1.css-o3d33y';
    }


    

}

module.exports =new CreateUserPage();