const service = require ('./services/service.login');

class LoginController {

    constructor(loginService){
        this.loginService = loginService
    }

    login = (req, res) =>{

    }
}



module.exports = new LoginController(service);