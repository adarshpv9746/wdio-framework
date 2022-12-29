

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get logout () {return $("//a[.='Log out']");}

    get login () {return $("//a[.='Log in']");}

    get email () {return $("//input[@id='Email']");}

    get password () {return $("//input[@id='Password']");}

    get remember () {return $("//input[@id='RememberMe']");}

    get loginbtn () {return $("//button[@class='button-1 login-button']");}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async reglogin (email, password) {
        await this.login.click();
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.loginbtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
