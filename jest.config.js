const rootDir = '<rootDir>/e2e';
const defaultSuite = '**';

module.exports = {
	verbose: true,
	preset: 'jest-puppeteer',

	globalSetup: `${rootDir}/test-run-configuration/global-setup.js`,
	globalTeardown: `${rootDir}/test-run-configuration/global-teardown.js`,

	setupFilesAfterEnv: [
		`${rootDir}/test-run-configuration/jest.setup.js`,
		`${rootDir}/test-run-configuration/create-events-list.js`
	],

	modulePaths: [
		`${rootDir}/constants/`,
		`${rootDir}/tasks/`,
		`${rootDir}/services/`,
	],

	testMatch: [`${rootDir}/tests/${process.env.SUITE || defaultSuite}/*.spec.js`]
};
