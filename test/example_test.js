const { expect } = require('chai');

const hello = word =>
    `hello ${word}`;

describe('an example test', () => {
    it('passes', () => {
        expect(hello('world')).to.equal('hello fail');
    });
});
