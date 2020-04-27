const headless = !!process.env.CI;
const args = [
	'--no-sandbox',
	'--disable-setuid-sandbox',
	'--disable-dev-shm-usage'
];
if (headless)  {
	args.push('--remote-debugging-address=0.0.0.0', '--remote-debugging-port=9222');
}

module.exports = {
	launch: {
		headless,
		args,
		ignoreHTTPSErrors: true,
	},
	exitOnPageError: false
};
