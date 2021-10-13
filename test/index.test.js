import chai, { assert, expect } from "chai";
import chaiHttp from "chai-http";
import chaiJsonSchema from "chai-json-schema";
import { metadataSchema, errorSchema } from "./schema.js";

chai.use(chaiHttp);
chai.use(chaiJsonSchema);

describe("Metadata Scrapper Test Case", function () {
  const baseUrl = `https://a6mc19ckbg.execute-api.us-east-1.amazonaws.com/dev`;
  const urlToScrape = "https://www.serverless.com/blog/how-create-rest-api-serverless-components";
  const invaidUrl = "http://invalid.com/plugins/invalid/";

  it("Test Case 1 - When valid URL is passed in body", function it(done) {
    chai
      .request(baseUrl)
      .post("/metadata")
      .send({
        url: urlToScrape,
      })
      .end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        assert.jsonSchema(res.body.message, metadataSchema);
        done();
      });
  });

  it("Test Case 2 - When no URL is passed in body", function it(done) {
    chai
      .request(baseUrl)
      .post("/metadata")
      .send()
      .end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.be.an("string");
        expect(res.body.message).to.equal("Valid URL need to be provided");
        assert.jsonSchema(res.body, errorSchema);
        done();
      });
  });

  it("Test Case 3 - When an invalid URL is passed in body", function it(done) {
    chai
      .request(baseUrl)
      .post("/metadata")
      .send({
        url: invaidUrl,
      })
      .end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.be.an("string");
        expect(res.body.message).to.equal("Url Not Found");
        assert.jsonSchema(res.body, errorSchema);
        done();
      });
  });
});
