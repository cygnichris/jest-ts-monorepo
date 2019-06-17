const baseConfig = require("../../jest.base");
module.exports = {
  ...baseConfig,
  displayName: 'packageA',
  rootDir: '../../',
  roots: ['./packages/foo-packagea/'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/packages/foo-packagea/tsconfig.json'
    }
  },
  modulePathIgnorePatterns: [
    "<rootDir>/packages/foo-packagea/dist/"
  ],
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
};


