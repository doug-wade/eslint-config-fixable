# eslint-config-fixable

A eslint preset with all the fixable rules.  If you notice a rule missing, send me a pr!


# Installation

```sh
npm install -D eslint-config-fixable
```

Then, add it to your [.eslintrc](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)

```json
{
    "extends": "eslint-config-myconfig"
}
```


# Usage

Fix all the fixable errors, then run `fix`

```sh
eslint --fix
```


# Disclaimer

I'm not sure the preset will fix the fixable eslint errors to the values you want -- for instance, I correct comparisons
to use yoda because eslint seems to suggest it.
