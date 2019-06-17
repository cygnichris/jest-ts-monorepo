const baseConfig = require("../../jest.base");

module.exports = {
  ...baseConfig,
  displayName: 'packageB',
  rootDir: '../../',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/packages/foo-packageb/tsconfig.json'
    }
  },
  modulePathIgnorePatterns: [
    "<rootDir>/packages/foo-packageb/lib/"
  ],
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
};


