module.exports = {
  rootDir: '.',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePathIgnorePatterns: ['dist', '.history'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
      isolatedModules: true
    },
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testURL: 'http://localhost/',
  collectCoverageFrom: ['src/**/*.{js,ts}', '!src/**/main.{js,ts}', '!src/**/index.{js,ts}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test-helpers/', '/main.{js,ts}'],
  coverageReporters: ['json', 'lcov'],
  verbose: true,
  preset: 'ts-jest',
};

