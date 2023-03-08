var config = require('./conf.json');
class settings{
    
    env = config.Environment.toUpperCase(); 
    environment = this.environ();
    baseUrl = this.environment.baseurl;
    parallel_count = config.max_parallel_tests;
    mob = config.Mobile_name;

    environ(){
        if (this.env=='LIVE'){
            return{
                baseurl:'http://localhost',
                env:'LIVE'

            }
        }
        else if(this.env=='UAT'){
            return{
                baseurl:'http://localhost',
                env:'UAT'

            }
        }
        else if(this.env=='QA'){
            return{
                baseurl:'http://localhost',
                env:'QA'

            }
        }
    }

    full_scr(){
        if(config.full_screen.toUpperCase()=='YES'|| config.full_screen.toUpperCase()=='TRUE'){
            return '--start-fullscreen'
        }
        else{return '//'
        }

    }
    mobile(){
    if(config.Platform.toUpperCase()=="MOBILE"){
        return({ 'deviceName': this.mob })
    }else{
        return({})
    }
    }
    


}

module.exports = new settings();