# Webpack Template Repo

**Created**: before starting the Weather App project (9 December 2023)

**Last Updated**: while starting the Battleship project (11 January 2024)

## Installation Steps

1. Run `npm init -y`
2. Run `npm i -D css-loader html-webpack-plugin sass sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge`
3. Add to/change in **package.json**:

```
  "description": "",
  "private": true,
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack serve --config webpack.dev.js",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
```

4. Remove from **package.json**:

```
  "main": "webpack.common.js",
```

5. Run `npm init @eslint/config` and go through the configuration steps

- Choose `To check syntax and find problems` (Prettier will enforce style instead)
- There won't be a question about choosing a popular style guide, never fear!

6. Install **Prettier** like this:

- Run `npm i --D --save-exact prettier && npm i --D eslint-config-prettier && node --eval "fs.writeFileSync('.prettierrc','{}\n')"`

7. Change **.eslintrc.json** to:

```
  "ignorePatterns": [
    "webpack.common.js",
    "webpack.dev.js",
    "webpack.prod.js",
    "babel.config.js",
    "jest.config.js",
    "fileMock.js",
    "styleMock.js"
  ],
  "extends": ["eslint:recommended", "prettier"],
```

8. Run `npx eslint-config-prettier src/js/main.js` to get conflicting rules
9. Add to **.prettierrc**:

```
{
  "singleQuote": true
}
```

10. Install Jest: `npm i --D jest`
11. Add to/change the following in **package.json**:

```
  "scripts": {
    ...
    "test: "jest",
    "watch": "jest --watch"
  },
```

12. Install Babel for Jest: `npm i --D babel-jest @babel/core @babel/preset-env`
13. Configure Jest to handle asset files and find them by adding the following to **jest.config.js**:

```
module.exports = {
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/js/__mocks__/fileMock.js',
    '\\.(scss|css|less)$': '<rootDir>/src/js/__mocks__/styleMock.js',
  },
};
```

14. Add `@babel/preset-env` by running `npm i --D @babel/preset-env`
15. Add the following to `.babelrc`:

```
{
  "presets": ["@babel/preset-env"]
}
```

16. Run `npx jest --clearCache` if Jest is not working
17. Update README.md not to be this

### Optional

1. Install **babel-loader** for webpack, more info [here](https://github.com/babel/babel-loader) (update this after the Battleship project to see if it is really required; if not, remove this point)

### To Do

1. Find a way to use **nodemon** with **webpack** and **Jest**. So far, I've been unable to make it work together due to the import of an .scss file atop main.js, which causes nodemon to crash. Also, nodemon requires `"type": "module"` in **package.json**, which Jest complains about (likely due to Babel being used).
