# Testing Practice

A JavaScript testing project completed as part of **The Odin Project — Full Stack JavaScript path**.

This project builds on my `02template_build_quality_security_testing` starter and applies the testing layer in practice using **Jest**, **Babel**, and a basic **Test-Driven Development (TDD)** workflow.

## Project goals

The exercises focus on writing tests for small, isolated JavaScript functions and then implementing the code required to make those tests pass.

Functions implemented:

* `capitalize`
* `reverseString`
* `calculator`

  * `add`
  * `subtract`
  * `multiply`
  * `divide`
* `caesarCipher`
* `analyzeArray`

## Development architecture

```text
Vanilla JavaScript
│
├── Build
│   └── Webpack
│
├── Quality
│   ├── ESLint
│   └── Prettier
│
├── Security
│   └── Semgrep
│
└── Testing
    ├── Jest
    └── Babel
```

Babel allows the project to keep using ES module syntax such as:

```javascript
import { test, expect } from "@jest/globals";
import { capitalize } from "../src/capitalize.js";
```

while Jest executes the tests in the Node environment.

## TDD workflow

The exercises are approached using the basic TDD cycle:

```text
Write a test
     ↓
RED
     ↓
Write the minimum implementation
     ↓
GREEN
     ↓
Refactor
```

The goal is not only to verify that the final functions work, but also to practice defining expected behavior before implementation.

## Project structure

```text
src/
├── capitalize.js
├── reverseString.js
├── calculator.js
├── caesarCipher.js
└── analyzeArray.js

tests/
├── capitalize.test.js
├── reverseString.test.js
├── calculator.test.js
├── caesarCipher.test.js
└── analyzeArray.test.js
```

## Installation

After cloning the repository:

```bash
npm install
```

or, when using the included lockfile:

```bash
npm ci
```

## Testing

Run all tests:

```bash
npm test
```

Run Jest in watch mode while practicing TDD:

```bash
npm run test:watch
```

## Quality checks

The project inherits the development tooling from the testing template, including linting, formatting, security scanning, testing, and production build checks.

Run the complete project verification with:

```bash
npm run check:all
```

## Key concepts practiced

* writing automated tests with Jest;
* using `test`, `expect`, and Jest matchers;
* testing primitive values with `toBe`;
* testing objects with `toEqual`;
* grouping related tests;
* testing public behavior rather than internal helper implementation;
* using Babel to support ES modules in the Jest environment;
* working through the **Red → Green → Refactor** cycle.

## Learning milestone

This project represents the transition from **configuring a testing environment** to **actually using automated tests to guide implementation**.

The previous template introduced the testing architecture.

This project puts that architecture into practice.
