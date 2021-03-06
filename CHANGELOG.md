# [2.0.0](https://github.com/Asymmetrik/node-fhir-server-core/compare/1.4.2...2.0.0) (2019-05-15)



## [1.4.2](https://github.com/Asymmetrik/node-fhir-server-core/compare/1.4.1...1.4.2) (2019-05-14)



## [1.4.1](https://github.com/Asymmetrik/node-fhir-server-core/compare/1.4.0...1.4.1) (2019-04-09)


### Bug Fixes

* rename __resourceType to resourceType in controllers ([#162](https://github.com/Asymmetrik/node-fhir-server-core/issues/162)) ([4934c89](https://github.com/Asymmetrik/node-fhir-server-core/commit/4934c89))



# [1.4.0](https://github.com/Asymmetrik/node-fhir-server-core/compare/1.3.1...1.4.0) (2019-04-03)


* feat/R4-resources (#157) ([d95a255](https://github.com/Asymmetrik/node-fhir-server-core/commit/d95a255)), closes [#157](https://github.com/Asymmetrik/node-fhir-server-core/issues/157)


### Bug Fixes

* update observation controller to use response utils ([#155](https://github.com/Asymmetrik/node-fhir-server-core/issues/155)) ([b529ce4](https://github.com/Asymmetrik/node-fhir-server-core/commit/b529ce4))


### Features

* Custom Error Implementation ([#154](https://github.com/Asymmetrik/node-fhir-server-core/issues/154)) ([968377d](https://github.com/Asymmetrik/node-fhir-server-core/commit/968377d))
* direct users to stack overflow for questions with new tags ([#158](https://github.com/Asymmetrik/node-fhir-server-core/issues/158)) ([3a83a43](https://github.com/Asymmetrik/node-fhir-server-core/commit/3a83a43))


### BREAKING CHANGES

* Custom makeResource needs to change
`Resource.__resourceType` to `Resource.resourceType`. New version of
resources no longer use the double underscore since they use
Object.defineProperty.

* fix: one of the issues with casing in joining arguments
* Removed old resources
* Updated all resources to use lowercase versions
* Updated resources to use the new version which includes recursive
properties
* Incremented package.json version
* fix: typo in capability statement



## [1.3.1](https://github.com/Asymmetrik/node-fhir-server-core/compare/1.3.0...1.3.1) (2019-02-12)


### Bug Fixes

* do not override the methods if defined in the config ([#124](https://github.com/Asymmetrik/node-fhir-server-core/issues/124)) ([6eff570](https://github.com/Asymmetrik/node-fhir-server-core/commit/6eff570))
* issue with incorrect url being set when configuring CORS pre-flight ([#123](https://github.com/Asymmetrik/node-fhir-server-core/issues/123)) ([5b650a6](https://github.com/Asymmetrik/node-fhir-server-core/commit/5b650a6))
* package.json to reduce vulnerabilities ([#144](https://github.com/Asymmetrik/node-fhir-server-core/issues/144)) ([95c82d4](https://github.com/Asymmetrik/node-fhir-server-core/commit/95c82d4))


### Features

* add deprecation utility for marking features in future releases ([#129](https://github.com/Asymmetrik/node-fhir-server-core/issues/129)) ([6ec5e25](https://github.com/Asymmetrik/node-fhir-server-core/commit/6ec5e25))
* crud patch ([#132](https://github.com/Asymmetrik/node-fhir-server-core/issues/132)) ([ec613d4](https://github.com/Asymmetrik/node-fhir-server-core/commit/ec613d4))
* custom metadata ([#128](https://github.com/Asymmetrik/node-fhir-server-core/issues/128)) ([27f6544](https://github.com/Asymmetrik/node-fhir-server-core/commit/27f6544))
* Integrate Smart tools from phx-tools ([#131](https://github.com/Asymmetrik/node-fhir-server-core/issues/131)) ([c91acaa](https://github.com/Asymmetrik/node-fhir-server-core/commit/c91acaa))



# [1.2.0](https://github.com/Asymmetrik/node-fhir-server-core/compare/1.1.0...1.2.0) (2018-10-25)



