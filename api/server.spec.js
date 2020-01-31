const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("environment", () => {
    it("should set env to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  describe("GET /", () => {
    it("should return a 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
  });
});
