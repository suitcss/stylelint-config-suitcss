# stylelint-config-suitcss

[![NPM version](http://img.shields.io/npm/v/stylelint-config-suitcss.svg)](https://www.npmjs.com/package/stylelint-config-suitcss) [![Build Status](https://github.com/suitcss/stylelint-config-suitcss/actions/workflows/ci.yml/badge.svg)](https://github.com/suitcss/stylelint-config-suitcss/actions/workflows/ci.yml)

> SUIT CSS shareable config for Stylelint.

Configuration rules to ensure your CSS code is compliant with [SUIT CSS's code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md).

## Installation

```console
$ npm install stylelint-config-suitcss
```

## Usage

Set your Stylelint config to:

```json
{
  "extends": "stylelint-config-suitcss"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to allow empty blocks in your CSS turn off the `block-no-empty` rule:

```json
{
  "extends": "stylelint-config-suitcss",
  "rules": {
    "block-no-empty": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
