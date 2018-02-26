const match = require('./match');

class Response {
    constructor(response) {
        this.status = response.status;
        this.headers = response.headers;

        
        // console.log(`response.json:: ${response.data}`);

        // this.createMatchObject(response.data);
    }

}

module.exports = Response;
