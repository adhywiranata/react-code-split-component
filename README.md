# React Code Split Component
> painless Code Splitting Component

**beware! This repo is purely experimental**

## Motivation 💪
*TODO some motivations for code splitting here*

## Installation 👷
**NPM**
```
npm install --save react-code-split-component
```
**yarn**
```
yarn add react-code-split-component
```

## Usage 🔧

### Importing Components
**Usual ES6 Component Import**
```javascript
import MyAwesomeComponent from './path/to/MyAwesomeComponent';

export default () => (
  <div>
    ...
    <MyAwesomeComponent />
  </div>
);
```
**Usual ES5 Require**
```javascript
var MyAwesomeComponent = require('./path/to/MyAwesomeComponent').default;

module.exports = () => (
  <div>
    ...
    <MyAwesomeComponent />
  </div>
);
```
**Using React Code Split Component with ES6 import**
```javascript
import LazyComponent from 'react-code-split-component';

export default () => (
  <div>
    ...
    <LazyComponent load={() => import('./path/to/MyAwesomeComponent')} />
  </div>
);
```
**Using React Code Split Component with ES5 require**
```javascript
var LazyComponent = require('react-code-split-component').default;

export default () => (
  <div>
    ...
    <LazyComponent load={() => require('./path/to/MyAwesomeComponent')} />
  </div>
);
```

### Sending Props to Code Splitting Component

**NOT YET SUPPORTED!**

## ESLint Issues ⚠️

*TODO*

## SSR Support 🔬

**NOT YET SUPPORTED!**
