

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */

    get regsuccess () {return $("/html/body/div[6]/div[3]/div/div/div/div[2]/div[1]");}
    get logout () {return $("//a[.='Log out']");}
    get fnameerror() {return $("//span[@id='FirstName-error']");}
    get lnameerror() {return $("//span[@id='LastName-error']");}
    get emailreqerror() {return $("//span[contains(text(),'Email is required.')]");}
    get invalidemailerror() { return $("//span[contains(text(),'Wrong email')]");}
    get passrules() {return $("//p[contains(text(),'Password must')]");}
    get passreq() {return $("//span[@id='Password-error' and contains(text(),'Password')]");}
    get passmatch() {return $("//span[@id='ConfirmPassword-error' and contains(text(),'The password and confirmation')]");}
    get emailexists() {return $("//li[contains(text(),'The specified email already exists')]");}
    get cpassreq() {return $("//span[@id='ConfirmPassword-error' and contains(text(),'Password')]");}
    get login_enter_email_error() {return $("//span[@id='Email-error' and contains(text(),'Please enter your email')]");}
    get login_invalid_email_error() {return $("//span[@id='Email-error' and contains(text(),'Wrong email')]");}
    get incorrect_creds() {return $("//div[contains(text(),'Login was unsuccessful')]");}
}

export default new SecurePage();
