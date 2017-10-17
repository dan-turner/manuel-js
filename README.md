<h1>
    <a href="https://github.com/dan-turner/manuel-js">
        <img height="240" src="https://dan-turner.github.io/manuel-js/Manuel.png" alt="Manuel.JS" />
    </a>
    <br>
    Manuel.JS
</h1>

*It's not manual, it's Manuel.*

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
