import app from "./App"

import {getLog} from "./util/Logger"

const log = getLog("app")
const port = process.env.PORT || 3000

// @ts-ignore
app.listen(port, (err) => {
    if (err) {
        log.error(err)
    }

    log.info(`server is listening on ${port}`)
})
