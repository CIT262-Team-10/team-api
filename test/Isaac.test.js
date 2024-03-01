const fetch = require('node-fetch2');

describe('Test GET request to /Isaac route using node-fetch', () => {
    it('responds with ""', async () => {
        const response = await fetch('http://localhost:3000/Isaac');
        const name = await response.text();
        expect(name.includes('Isaac Maughan')).toBe(true); // Check if the response includes "Isaac"
    });
});