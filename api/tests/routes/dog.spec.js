/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
var supertest = require('supertest-as-promised')(require('../../src/app.js'));
const app = require('../../src/app.js');
const { Breed, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height: 10,
  weight: 10
};

describe('Breed routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Breed.sync({ force: true })
    .then(() => Breed.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});

describe('Routes', function() {
  describe('/dogs/?name=', function() {
    it('GET ?name="name" returns the details of said Dog', function(){
      return supertest
      .get('/dogs/?name=Akita')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body[0].name).to.be.equal('Akita');
      })
    })
  })
})