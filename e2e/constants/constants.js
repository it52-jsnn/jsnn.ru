const globalTimeouts = {
	jestTestBlockTimeout: process.env.CI ? 60000 : 300000, // Max time that Jest can spend on each test() function. After that it throws an error and moves to the next test() block.
	navigationTimeout: 30000,
	checkValueTimeout: 3000
};

const origin = process.env.CI ? process.env.TEST_PROD ? 'https://jsnn.ru' : 'http://172.17.0.2:8080' : 'http://localhost:8080';

const pageUrls = {
  main: `${origin}/`,
  about: `${origin}/about.html`,
  event: (eventId)=> `${origin}/events/${eventId}/`
};

module.exports = {
  globalTimeouts,
  pageUrls
};
