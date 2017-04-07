# eslint-config-fixable

A eslint preset with all the fixable rules.  If you notice a rule missing, send me a pr!


# Installation

```sh
npm install -D eslint-config-fixable
```

Then, add it to your [eslint config](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) (a .eslintrc or your package.json, for instance).

```json
{
    "extends": "eslint-config-fixable"
}
```


# Usage

To fix all the fixable errors, run eslint with the `fix` option

```sh
eslint --fix
```

There are a number of rules that are es6-specific, so you may also want to consider using babel-eslint as your parser

```json
{
    "extends": "eslint-config-fixable",
    "parser": "babel-eslint"
}
```

# Disclaimer

I'm not sure the preset will fix the fixable eslint errors to the values you want -- for instance, I correct comparisons
to use yoda because eslint seems to suggest it.  Since everything is fixable automatically, I'm pretty amenable to changes,
so don't be shy about sending a pr.
