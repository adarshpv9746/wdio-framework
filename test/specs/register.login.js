import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import DashPage from '../pageobjects/dash.page.js'
import helper from '../helpers/helper.js'
import regPage from '../pageobjects/reg.page.js'



describe('My Login application', () => {

    // it('Should log emails', async () => {
    //     for(var i = 0; i < 11; i += 1) {
    //         console.log(helper.random_mail("new","mailinator.com"));
    //     }
    // })

    it('Should register a new user without gender', async () => {
        await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        await DashPage.register();
        await regPage.regusr("",helper.test_uname, helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,"password","password")
        await expect(SecurePage.regsuccess).toBeExisting()
        await expect(SecurePage.regsuccess).toHaveTextContaining('Your registration completed')
    
    }),

    it('Should not register a new user without first name', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.open()
        await regPage.regusr("m",'', helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,"password","password")
        await expect(SecurePage.fnameerror).toBeExisting()
        await expect(SecurePage.fnameerror).toHaveTextContaining('First name is required.')
    
    }),

    it('Should not register a new user without last name', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname,'', "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,"password","password")
        await expect(SecurePage.lnameerror).toBeExisting()
        await expect(SecurePage.lnameerror).toHaveTextContaining('Last name is required.')
    
    }),
    it('Should register a new user without day', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "Day","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,"password","password")
        await expect(SecurePage.regsuccess).toBeExisting()
        await expect(SecurePage.regsuccess).toHaveTextContaining('Your registration completed')
    
    }),
    it('Should register a new user without month', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.open();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1",'Month',"2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,"password","password")
        await expect(SecurePage.regsuccess).toBeExisting()
        await expect(SecurePage.regsuccess).toHaveTextContaining('Your registration completed')
    
    }),
    it('Should register a new user without year', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.open();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January",'Year',helper.static_mail,helper.test_uname,"password","password")
        await expect(SecurePage.regsuccess).toBeExisting()
        await expect(SecurePage.regsuccess).toHaveTextContaining('Your registration completed')
    
    }),
    it('Should not register a new user without email', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.open()
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",'',helper.test_uname,"password","password")
        await expect(SecurePage.emailreqerror).toBeExisting()
        await expect(SecurePage.emailreqerror).toHaveTextContaining('Email is required.')
    
    }),
    it('Should not register a new user with invalid email', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",'a.com',helper.test_uname,"password","password")
        await expect(SecurePage.invalidemailerror).toBeExisting()
        await expect(SecurePage.invalidemailerror).toHaveTextContaining('Wrong email')
    
    }),

    it('Should not register a new user with an existing email', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",helper.static_mail,helper.test_uname,"password","password")
        await expect(SecurePage.emailexists).toBeExisting()
        await expect(SecurePage.emailexists).toHaveTextContaining('The specified email already exists')
    
    }),
    
    it('Should register a new user without company name', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),'',"password","password")
        await expect(SecurePage.regsuccess).toBeExisting()
        await expect(SecurePage.regsuccess).toHaveTextContaining('Your registration completed')
    
    }),
    it('Should not register a new user without password', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.open()
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,'','')
        await expect(SecurePage.passreq).toBeExisting()
        await expect(SecurePage.passreq).toHaveTextContaining('Password is required.')
    
    }),

    it('Should not register a new user without matching confirmation password', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,'password','aaaaaa')
        await expect(SecurePage.passmatch).toBeExisting()
        await expect(SecurePage.passmatch).toHaveTextContaining('The password and confirmation password do not match.')
    
    }),
    it('Should not register a new user without confirmation password', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,'password','')
        await expect(SecurePage.cpassreq).toBeExisting()
        await expect(SecurePage.cpassreq).toHaveTextContaining('Password is required.')
    
    }),
    it('Should not register a new user without a valid password', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,'a','a')
        await expect(SecurePage.passrules).toBeExisting()
        await expect(SecurePage.passrules).toHaveTextContaining('Password must meet the following rules:')
    
    }),

    it('Should register a new user', async () => {
        //await DashPage.open()
        //register (gender, fname, lname, day, month, year, email, company, password, cpassword)
        //await DashPage.register();
        await regPage.regusr("m",helper.test_uname, helper.test_string, "1","January","2020",helper.random_mail("fresh","mailinator.com"),helper.test_uname,"password","password")
        await expect(SecurePage.regsuccess).toBeExisting()
        await expect(SecurePage.regsuccess).toHaveTextContaining('Your registration completed')
    
    }),

    it('Should not login without email', async () => {
        
        await LoginPage.open()
        await LoginPage.reglogin('', 'password')
        await expect(SecurePage.login_enter_email_error).toBeExisting()
        await expect(SecurePage.login_enter_email_error).toHaveTextContaining('Please enter your email')
    }),

    it('Should not login without password', async () => {
        
        // await LoginPage.open()
        await LoginPage.reglogin(helper.static_mail, '')
        await expect(SecurePage.incorrect_creds).toBeExisting()
        await expect(SecurePage.incorrect_creds).toHaveTextContaining('Login was unsuccessful. Please correct the errors and try again.')
    }),

    it('Should not login with invalid password', async () => {
        
        // await LoginPage.open()
        await LoginPage.reglogin(helper.static_mail, 'aaaaaaaa')
        await expect(SecurePage.incorrect_creds).toBeExisting()
        await expect(SecurePage.incorrect_creds).toHaveTextContaining('Login was unsuccessful. Please correct the errors and try again.')
    }),

    it('Should not login without invalid email', async () => {
        
        // await LoginPage.open()
        await LoginPage.reglogin('a', 'password')
        await expect(SecurePage.login_invalid_email_error).toBeExisting()
        await expect(SecurePage.login_invalid_email_error).toHaveTextContaining('Wrong email')
    }),

    it('Should not login with unregistered email', async () => {
        
        // await LoginPage.open()
        await LoginPage.reglogin('shazam1244212@mailinator.com', 'password')
        await expect(SecurePage.incorrect_creds).toBeExisting()
        await expect(SecurePage.incorrect_creds).toHaveTextContaining('Login was unsuccessful. Please correct the errors and try again.')
    }),

    it('Should login with valid credentials', async () => {
        
        // await LoginPage.open()
        await LoginPage.reglogin(helper.static_mail, 'password')
        await expect(SecurePage.logout).toBeExisting()
    })

})


