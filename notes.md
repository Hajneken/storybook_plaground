# Design Systems

[https://designsystemsrepo.com/](https://designsystemsrepo.com/)


# Setup Storybook from scratch

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

## Creating story 

1. Setup `/.storybook/config.js`
2. In `/src` create React component and stories
    > `name.js` and `name.stories.js`
3. In stories use `storiesOf()` and `add()` as described below 

 ```JavaScript 
storiesOf('ComponentName', module)
  .add('Descriptive name',
  () => (<ComponentName  bg={"red"}>Red Component</ComponentName>));
 ``` 

- in `add(arg1, arg2)` 
    - arg1 is brief description used in storybook
    - arg2 is an instance of your component 
    
> if you want to also see JSX, instead of `add` use `addWithJSX()`

## Addons 
> all addons need to be imported to `/.storybook/addons.js` and configured `/.storybook/config.js` except `withInfo()` used for automated documentation generator

### Installed addons 
* jsx
* info
* knobs 

### JSX 
> allows developer to see formatted code 

### Info
> automatically generates documentation with an option to style the documentation and add additional markdown 

### Knobs
> allows developer to test component states in real time 
> e.g. providing colors via colorpicker, text, files etc.
options listed in [documentation](https://github.com/storybookjs/storybook/tree/master/addons/knobs)