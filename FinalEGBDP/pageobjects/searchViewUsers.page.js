const Page = require('./page');

class SearchViewUsersPage extends Page {

get login(){
        return '[id="login"]';
}

get name(){
        return '[id="fio"]';
}

get search(){
        return '//*[contains(text(),"Найти")]';
}

get userSearchColumns() {
    return '.MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignLeft.MuiTableCell-sizeMedium.css-u4j888';
}

get edit() {
    return '[data-testid="CreateIcon"]';
}

get permissions() {
    return '[data-testid="VisibilityIcon"]';
}

get permissionDetails() {
    return '.MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignLeft.MuiTableCell-sizeMedium.css-u4j888';
}

get prolong() {
    return '[data-testid="AddAlarmIcon"]';
}

get prolongDate() {
    return '[placeholder="дд.мм.гггг"]';
}

get prolongDate() {
    return '[placeholder="дд.мм.гггг"]';
}

get submit() {
    return '//*[contains(text(),"Продлить")]';
}

get alert() {
    return '.MuiDialogContentText-root.MuiTypography-root.MuiTypography-body1.css-o3d33y';
}

get resetPassword() {
    return '[aria-label="Сбросить пароль"]';
}
get alert2() {
    return '.MuiDialogContentText-root.MuiTypography-root.MuiTypography-body1.css-o3d33y';
}









}

module.exports = new SearchViewUsersPage();