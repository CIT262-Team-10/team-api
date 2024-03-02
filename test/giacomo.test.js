const fetch = require('node-fetch2');

describe('Test GET request to /Giacomo route using node-fetch', () => {
    it('responds with ""', async () => {
        const response = await fetch('http://localhost:3000/Giacomo');
        const name = await response.text();
        expect(name.includes('Giacomo Draghi')).toBe(true); // Check if the response includes "Isaac"
    });
});
