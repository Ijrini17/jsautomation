


const Page = require('./page');

class LoginPage extends Page {


  

    get user() {
        return '[id="login"]';
    }
    get passwordField() {
        return '[id="password"]';
    }

    get submit() {
        return '[type="submit"]';
    }


    
}

module.exports =new LoginPage ();