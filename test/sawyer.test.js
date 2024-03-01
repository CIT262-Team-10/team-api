// Import necessary modules
const fetch = require('node-fetch'); // if using Jest in a Node.js environment
// If you're using Jest with a browser environment, you can use native fetch API

// Test case
test('Check if calling http://localhost:3000/sawyer returns "sawyer"', async () => {
  // Call the URL
  const response = await fetch('http://localhost:3000/sawyer');
  
  // Extract text from the response
  const name = await response.text();
  
  // Assert that the result is valid
  expect(name).toBe("sawyer");
});
