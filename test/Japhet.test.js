const fetch = require('node-fetch');

test('Verify name is correct', async () => {
  const response = await fetch('http://localhost:3000/japhet');
  const name = await response.text();
  expect(name).toBe("japhet");
});
