---
sidebar_position: 1.2
---

import CoreTypes from './fragments/\_core_types.md';
import CoreFunctions from './fragments/\_core_functions.md';
import CoreUtilityFunctions from './fragments/\_core_utility_functions.md';

# Core

## Basic Conventions

- The core should contain platform-independent functions only.
- The core should be named as `{$language}` and under the repository root directory. E.g., `logto/js/js`, `logto/kotlin/kotlin`.
- The core package should be named as `{$language}` under Logto scope. E.g., `@logto/js`, `io.logto.sdk:kotlin`.

## Basic Requirements

Any core SDK should contain:

- Types
- Utility functions
- Core functions

### Types

<CoreTypes />

### Utility Functions

<CoreUtilityFunctions />

### Core Functions

<CoreFunctions />
