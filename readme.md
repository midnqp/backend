This is a sample Node.js backend app scaffold, written from ground up.

I always wanted to have such an ideal greenfield project with a minimal rationale.

A project where every bit is well-thought.

Strong fundamentals, but allows for exploration and extension.

### Rationale behind each file and folder

#### Package-specific

- package.json — the standard indispensable file containing metadata and information about a project/package.
- package-lock.json — dependencies of a project often gets deprecated, updated with breaking changes, or its features removed; thus making this file non-negotiable for production deployments, as it contains accurate version information.
- index.ts — the standard entry point of a Node.js package, with TypeScript.

#### Configurations

- .gitignore — the most complete [gitignore](https://github.com/github/gitignore) for Node.js projects.
- tsconfig.json — the most minimal [TypeScript](https://www.typescriptlang.org/) config.
- .prettierrc.json — the most minimal [Prettier](https://prettier.io/) config.

#### Folders

- node_modules — the approach of Node.js to install packages per project in a folder.
- .dist — the output folder for TypeScript, to deploy and run using Node.js.

#### Project-specific folders

- db — the ORM models.
- modules — the domain code for the project, each as a module.

### Rationale behind each dependency

#### Production/runtime dependencies

- express — the unopinionated backend framework.

#### Development dependencies

- typescript — move fast, at scale, with end-to-end type-safety.
- jest — a testing framework, used for [TDD](https://testdriven.io/test-driven-development/).
- prettier — a code formatter, to enforce a single coding style.
- tsc-alias — to replace alias paths with relative paths.

### Guide

#### How to add a new module?

1. The main `src/index.ts` starts the backend. Using the main module in `src/router.ts`, which is the SPOT (single point of truth) for all modules of the project. So, first, we append a new module.

```diff
import {Router} from 'express'
import user from '@/user/router.js'
+import profile from '@/profile/router.js'

const router = Router()
router.use('/users', user)
+router.use('/profiles', profile)

export default router
```

2. Add a new folder named after the module `profile`. Then, add 4 new files in the folder.
   - `src/profile/` `router.ts` containing the Express routes with anonymous controller functions.
   - `src/profile/` `service.ts` containing the domain logic in the plainest language.
   - `src/profile/` `dto.ts` containing request body validation code.
   - `src/profile/` `model.ts` containing the database access object.
   - `src/profile/` `repo.ts` containing a class with methods that allow loose coupling of the database and  domain.
