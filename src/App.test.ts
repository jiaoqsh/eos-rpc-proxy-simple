// @ts-ignore
import supertest from "supertest"
import app from "./App"

describe("App", () => {
    it("works", () =>
        supertest(app)
            .get("/v1/chain/get_info")
            .expect("Content-Type", /json/)
            .expect(200),
    )

    it("get block", () =>
        supertest(app)
            .post("/v1/chain/get_block")
            .send({block_num_or_id: 10})
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200),
    )
})
