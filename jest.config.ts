import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/domain/',
    '<rootDir>/src/app/',
    '<rootDir>/src/infra/constants',
    '<rootDir>/src/infra/database',
    '<rootDir>/src/infra/decorators',
    '<rootDir>/src/infra/adapters',
    '<rootDir>/src/infra/repositories',
    '<rootDir>/src/infra/singletons',
    '<rootDir>/test/*',
    '.d.ts',
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
