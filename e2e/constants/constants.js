const globalTimeouts = {
	jestTestBlockTimeout: 60000, // Max time that Jest can spend on each test() function. After that it throws an error and moves to the next test() block.
	navigationTimeout: 30000,
	checkValueTimeout: 3000
};

const origin = process.env.CI ? 'http://172.17.0.2:8080' : 'http://localhost:8080';

const pageUrls = {
  main: `${origin}/`,
  about: `${origin}/about.html`,
  event: (eventId)=> `${origin}/events/${eventId}/`
};

module.exports = {
  globalTimeouts,
  pageUrls
};
