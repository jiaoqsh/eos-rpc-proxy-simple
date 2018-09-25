import bodyParser from "body-parser"
import express from "express"
import {EOSApi} from "./api/EOSApi"
import {getConnectLogger, getLog} from "./util/Logger"

const log = getLog("app")
const eosApiEndpoint = process.env.ENDPOINT || "http://api.bp.antpool.com"

class App {
    public express: any
    private api: EOSApi

    constructor() {
        this.api = new EOSApi(eosApiEndpoint)
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()
        router.all("*", (req, res) => {
            this.api.httpForward(req.method, req.url, req.body)
                .then((body) => {
                    res.json(body)
                })
                .catch((err) => {
                    res.json(err)
                    log.error(err)
                })
        })
        this.express.use(bodyParser.json())
        this.express.use("/", router)
        this.express.use(getConnectLogger())
    }
}

export default new App().express
