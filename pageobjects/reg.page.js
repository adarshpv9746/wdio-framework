

const Page = require('./page.js');
const helper = require('../helpers/helper.js');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegPage extends Page {
    /**
     * define selectors using getter methods
     */
    get male () {return $("//input[@id='gender-male']");}

    get female () {return $("//input[@id='gender-female']");}
    
    get firstname () {return $("//input[@id='FirstName']");}

    get lastname () {return $("//input[@id='LastName']");}

    get day () {return $("//select[@name='DateOfBirthDay']");}

    get month () {return $("//select[@name='DateOfBirthMonth']");}
    
    get year() {return $("//select[@name='DateOfBirthYear']");}

    get email () {return $("//input[@id='Email']");}

    get company () {return $("//input[@id='Company']");}

    get password () {return $("//input[@id='Password']");}

    get cpassword () {return $("//input[@id='ConfirmPassword']");}

    get regbtn () {return $("//button[@id='register-button']");}

    V_email = "adarsh"+helper.uid(123456,1000000)+"@mailinator.com";


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async regusr (gender, fname, lname, day, month, year, email, company, password, cpassword) {

        if(gender == "m"){ await this.male.click();}
         else if(gender == "f"){await this.female.click();}
        
        await this.firstname.setValue(fname);
        await this.lastname.setValue(lname);
        //for dropdowns you can use the following methods
        // selectByIndex
        // selectByVisibleText
        // selectByAttribute
        await this.day.selectByVisibleText(day);
        await this.month.selectByVisibleText(month);
        await this.year.selectByVisibleText(year);
        await this.email.setValue(email);
        await this.company.setValue(company);
        await this.password.setValue(password);
        await this.cpassword.setValue(cpassword);
        await this.regbtn.click();
        



    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('register');
    }
}

module.exports = new RegPage();
