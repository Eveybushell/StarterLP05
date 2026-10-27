import type { Config } from "jest";

   const config: Config = {
     // Use ts-jest to convert TypeScript before Jest runs the tests.
     preset: "ts-jest",

     // Provide browser features such as document, buttons, and inputs.
     testEnvironment: "jsdom",

     // Load the additional DOM assertions before each test file runs.
     setupFilesAfterEnv: ["@testing-library/jest-dom"],

     // Allow imports that begin with @/ to resolve from the src directory.
     moduleNameMapper: {
       "^@/(.*)$": "<rootDir>/src/$1",
     },
   };

   export default config;