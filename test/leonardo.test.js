const fetch = require('node-fetch2');

describe('Test GET request to /leonardo route using node-fetch', () => {
    it('responds with "Leonardo"', async () => {
        const response = await fetch('http://localhost:3000/leonardo');
        const name = await response.text();
        expect(name.includes('Leonardo Mosiah Janes de Souza')).toBe(true); // Check if the response includes "Sawyer"
    });
});
