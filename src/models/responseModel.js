const matchModel = require('./matchModel');

class Response {
    constructor(response) {
        const res = response;

        this.status = res.status;
        this.headers = res.headers;

        this.match = new matchModel(res.data);

        this.show();
    }
    show() {
        console.log(this.match);
    }
}

module.exports = Response;