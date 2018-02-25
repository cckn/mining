class Response {
    constructor(response) {
        this.status = response.status;
        // console.log(this.status);
        console.log(response.headers);
        
    }
}

module.exports = { Response };
