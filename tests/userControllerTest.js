const chai = require('chai'); // See: https://www.chaijs.com
const chaiHttp = require('chai-http'); // See: https://www.chaijs.com/plugins/chai-http
const expect = chai.expect;

chai.use(chaiHttp);

describe('UserController', () => {
  describe('#index()', () => {
    it('should have http code 200', () => {
      chai.request("http://localhost:3000")
        .get('/')
        .end((req, res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});
