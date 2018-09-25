import request from "request-promise-native"

export class EOSApi {
    protected endpoint: string

    constructor(
        endpoint: string = "http://localhost:8888",
        protected requestInstance: any = request,
    ) {
        this.endpoint = endpoint.replace(/\/+$/g, "")
    }

    public async getChainInfo(): Promise<any> {
        const rawChainInfo = await this.httpRequest("get", {
            url: `${this.endpoint}/v1/chain/get_info`,
            json: {},
        })
        return rawChainInfo
    }

    public async httpForward(method: string, url: string, body: any): Promise<any> {
        const requestParams = {
            url: `${this.endpoint}${url}`,
            json: body,
        }
        return await this.httpRequest(method, requestParams)
    }

    protected async httpRequest(method: string, requestParams: any): Promise<any> {
        if (method.toLowerCase() === "get" ) {
            return await this.requestInstance.get(requestParams)
        } else if (method.toLowerCase() === "post") {
            return await this.requestInstance.post(requestParams)
        }
    }
}
