const Page = require('./page');

class CreateGroupPage extends Page {

    get organ() {
        return '[id="organ"]';
    }

    get ovd() {
        return '[id=organ-option-5]';
    }

    get organization() {
        return '[id="organisation"]';
    }

    get orgOption() {
        return '[id=organisation-option-3]';
    }

    get groupName() {
        return '[id="group"]';
    }

    get groupDescription() {
        return '[placeholder="Описание группы"]';
    }


    get checkboxes() {
        return '.PrivateSwitchBase-input.css-1m9pwf3';
    }

    get addPowers() {
        return '[aria-label="Добавить полномочия"]';
    }

    get save() {
        return '[aria-label="Сохранить группу"]';
    }

    get service_organ() {
        return '.MuiChip-label.MuiChip-labelMedium.css-9iedg7';
    }

    get qualification_article() {
        return '[style="margin: 1px;"]';
    }



    

}

module.exports = new CreateGroupPage();