const baseConfig = require("../../jest.base");

module.exports = {
  ...baseConfig,
  displayName: 'packageB',
  rootDir: '../../',
  roots: ['./packages/foo-packageb/'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/packages/foo-packageb/tsconfig.json'
    }
  },
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    "^@bsrc/(.*)$": "<rootDir>/packages/./foo-packageb/src/$1",
    "^@foo/packagec(.*)$": "<rootDir>/packages/./foo-packagec/src/$1"

  },
  modulePathIgnorePatterns: [
    "<rootDir>/packages/foo-packageb/lib/"
  ],
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
};


