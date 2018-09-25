import {configure, connectLogger, getLogger} from "log4js"

configure("./config/log4js.json")

export function getLog(category: string) {
    return getLogger(category)
}

export function getConnectLogger() {
    return connectLogger(getLogger("http"), {level: "auto", format: ":method :url :status"})
}
