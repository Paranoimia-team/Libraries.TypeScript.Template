import { JestConfigWithTsJest } from "ts-jest"

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    rootDir: '..',
    testEnvironment: 'node',
    passWithNoTests: true,
    verbose: true,
    setupFiles: [
        './tests/setup.ts'
    ]
};

export default config;
