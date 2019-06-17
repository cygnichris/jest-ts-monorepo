module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleNameMapper: {
    "@asrc(.*)$": "<rootDir>/packages/foo-packagea/src$1",
    "@bsrc(.*)$": "<rootDir>packages/foo-packageb/src$1",
    "@foo/packagea(.*)$": "<rootDir>/packages/foo-packagea/src/$1",
    "@foo/packageb(.*)$": "<rootDir>/packages/foo-packageb/src/$1"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
