class helper {
    test_string = "WWWWWWWWWWWWWW"
    mail = "csicoet18@gmail.com"
    test_mail = "{wewrty}56*@As34-r.accountants"
    test_uname = "tester"+this.uid(100,200)
    static_mail = "adarsh"+this.uid(123456,1000000)+"@mailinator.com"
    uid(min, max) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }
    random_mail(name,domain_name){
        return(name+this.uid(123456,1000000)+"@"+domain_name)
    }

//     async godwait(locator){
//         while(!(locator.isDisplayed())){
//             await browser.pause(100);
//     }
// }
    async godwait(locator){
        var a=1;
        while(a){if(await locator.isDisplayed()){await locator.click(); await browser.pause(200); a=0;}};
}
}

export default new helper();
