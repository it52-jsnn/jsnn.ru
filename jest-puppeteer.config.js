const headless = !!process.env.CI;
const args = ['--no-sandbox'];

if (headless)  {
	args.push('--remote-debugging-address=0.0.0.0', '--remote-debugging-port=9222');
}

module.exports = {
	launch: {
		headless,
		args,
		executablePath: process.env.CI ? 'google-chrome-stable' : null,
		ignoreHTTPSErrors: true,
	},
	exitOnPageError: false
};
