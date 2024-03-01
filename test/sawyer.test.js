const fetch = require('node-fetch2');
const app = require('../server');

describe('Test GET request to /sawyer route using node-fetch', () => {
  it('responds with "Sawyer"', async () => {
    const response = await fetch('http://localhost:3000/sawyer');
    const name = await response.text();
    expect(name.includes('Sawyer')).toBe(true); // Check if the response includes "Sawyer"
  });
});
