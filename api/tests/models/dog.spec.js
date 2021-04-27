const { Breed, conn } = require('../../src/db.js');
const { expect } = require('chai');
var chai = require('chai')




describe('Breed model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Breed.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Breed.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Height should be integer', (done) => {
        Breed.create({
          name: 'Pug',
          height: 'Hello',
          weight: 10
        })
        .then(() => done(new Error('Height should not accept a string')))
        .catch(() => done());
      });
    });
  });
});
