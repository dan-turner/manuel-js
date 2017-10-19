<img height="240" src="https://dan-turner.github.io/manuel-js/Manuel.png" alt="Manuel.JS" />

# Manuel.JS

*It's not manual, it's Manuel.*

[![Build Status](https://api.travis-ci.org/dan-turner/manuel-js.svg?branch=master)](http://travis-ci.org/dan-turner/manuel-js)

## Installation

via [npm](https://github.com/npm/npm)

    $ npm install -g manuel-js

## Usage

```
export GH_TOKEN="<github personal access token with appropriate permissions>"
manuel \
  --org dan-turner \
  --repo manuel-js \
  --branch test \
  --file test/variables.yaml \
  --author Manuel \
  --email no-reply@manuel.fake \
  --message "Update 'example-app'" \
  --path example-app.image \
  --value a98049c7251b6b12785da9666e10e14cd1cfcddc
```

## Supported Formats

Manuel supports both `yaml` and `json`, it will guess the format based on the extension of the `--file` argument or you can specify explicitly with the `--format` argument.

## Configuration

Options can be specified as arguments (as above), or in config files, or a combination of both. Values are merged in the following order precedence, from lowest to highest:

* `<home directory>/.manuel.yml` (good place to specify `githubToken`)
* `<current dir>/.manuel.yml`
* With the config argument `--config <path to a .yml>`
* As individual arguments as in the usage example

See [.travis.yml](.travis.yml) for an example of leveraging a mix of config files and CLI arguments.
