const { globalTimeouts } = require('../constants/constants.js');

jest.setTimeout(globalTimeouts.jestTestBlockTimeout);
