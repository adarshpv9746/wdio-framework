

const Page = require('./page.js');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashPage extends Page {
    /**
     * define selectors using getter methods
     */
    get reg () {return $("//a[.='Register']");}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register () {

        await this.reg.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new DashPage();