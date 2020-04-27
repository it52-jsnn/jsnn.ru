const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer');

module.exports = () => teardownPuppeteer();
