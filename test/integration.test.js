const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080')  // Corrected the URL
      .get('/')
      .end((err, res) => {
        if (err) {
          console.error('Request Error:', err);
          return done(err);
        }
        console.log('Response:', res.text);  // Debug the response body
        expect(res).to.have.status(200);  // Ensure the server returns 200 status code
        expect(res.text).to.include('Hello from Docker!');  // Ensure the HTML content is correct
        done();
      });
  });
});
