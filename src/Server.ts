import express from 'express'

export class Server {
    constructor(public app:express.Application = express()){
        this.initRoute()
    }

    private initRoute() {
        this.app.get('/', (req, res) => {
            res.send(JSON.stringify({
                code:0,
                data: new Date(),
                msg:'hello from node'
            }))
        })
    }

    public startListen() {
        this.app.listen('3000', () => {
            console.log('Server started at port => 3000')
        })
    }
}