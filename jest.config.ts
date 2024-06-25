import type { Config } from "jest";

const config: Config = {
    testEnvironment: "@happy-dom/jest-environment",
    moduleNameMapper: { "^.+\\.(scss|less)$": "<rootDir>/config/CSSStub.js" },
};

export default config;
