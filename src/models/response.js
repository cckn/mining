const match = require('./match');

class Response {
    constructor(response) {
        const res = response
        
        this.status = res.status
        this.headers = res.headers

        this.match =  new match(res.data)
        

        this.show()
    }
    show(){
        console.log(this.match);

    }
}

module.exports = Response;
