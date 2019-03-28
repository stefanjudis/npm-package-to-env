[![Build Status](https://travis-ci.org/stefanjudis/npm-package-to-env.svg?branch=master)](https://travis-ci.org/stefanjudis/npm-package-to-env) [![codecov](https://codecov.io/gh/stefanjudis/npm-package-to-env/branch/master/graph/badge.svg)](https://codecov.io/gh/stefanjudis/npm-package-to-env)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)

# npm-package-to-env

Load package.json data and make it accessible via process.env (similar to [npm](https://docs.npmjs.com/misc/scripts#packagejson-vars)/yarn scripts)

## Install

```
# with npm
npm install npm-package-to-env

# or with Yarn
yarn add npm-package-to-env
```

## Usage

As early as possible in your application, require and configure `npm-package-to-env`.

```javascript
require('npm-package-to-env').config();
```

This command will place the values defined in your `package.json` into environment variables following the same convention as yarn or npm.

```json
{
  "name": "my-package",
  "config": {
    "foo": "bar"
  }
}
```

And then in your app:

```javascript
require('npm-package-to-env').config();

console.log(process.env.npm_package_name); // 'my-package'
console.log(process.env.npm_package_config_foo); // 'bar'
```

## Thanks

Thanks to [Jess Telford](https://twitter.com/JessTelford/) who initially [shared the script behavior](https://twitter.com/JessTelford/status/1108531278846918657) and the folks who maintain [dotenv](https://github.com/motdotla/dotenv) which I had a look at how they do things. :)

## License

See [LICENSE](LICENSE)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
