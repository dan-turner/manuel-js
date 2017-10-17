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
