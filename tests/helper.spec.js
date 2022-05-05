const chai = require("chai")
const expect = chai.expect;
const __helper = require("../helpers");

describe("__helper#", () => {
  it("should be a good uuid", () => {
    const uuid = __helper.uuid();
    expect(__helper.isUuid(uuid)).equal(true);
  });

  it("should be a bad uuid", () => {
    const uuid = 'invalid uuid';
    expect(__helper.isUuid(uuid)).equal(false);
  });
});
