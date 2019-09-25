# Design Systems

[https://designsystemsrepo.com/](https://designsystemsrepo.com/)

## Setup from scratch

Install [yarn](https://yarnpkg.com)

1. `yarn init -y`
2. `yarn add -D @storybook/react @babel/core babel-loader@next`
3. `yarn react react-dom`
4. `mkdir .storybook src`
5. `touch .storybook/config.js`
6. To `package.json` add 
```JSON
"scripts": {
    "storybook": "start-storybook -p 6006 -c .storybook"
  }
```
7. `yarn run storybook`