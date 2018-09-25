import {EOSApi} from "./EOSApi"

describe("EOSApi", () => {
    // @ts-ignore
    let request: any
    let api: EOSApi

    const chainInfo = {
        chain_id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        head_block_num: 20,
        last_irreversible_block_num: 10,
    }

    beforeAll(() => {
        request = {
            get: async () => chainInfo,
        }
    })

    beforeEach(() => {
        api = new EOSApi("", request)
    })

    it("returns head block if configured", async () => {
        const rawChainInfo = await api.getChainInfo()
        expect(rawChainInfo.head_block_num).toBe(20)
    })

})
