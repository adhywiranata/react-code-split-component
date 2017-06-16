# React Code Split Component
> painless Code Splitting Component

[![Build Status](https://travis-ci.org/adhywiranata/react-code-split-component.svg?branch=master)](https://travis-ci.org/adhywiranata/react-code-split-component)
[![dependencies Status](https://david-dm.org/adhywiranata/react-code-split-component/status.png)](https://david-dm.org/adhywiranata/react-code-split-component)
[![devDependencies Status](https://david-dm.org/adhywiranata/react-code-split-component/dev-status.svg)](https://david-dm.org/adhywiranata/react-code-split-component?type=dev)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

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
There are currently two supported code splitting strategy, the first one being using ``<LazyComponent />`` higher order component and send a ``load()`` props containing a require/import to a component. The second one is to wrap the component to be lazy loaded using ``lazify()`` HOC Wrapper method.

Below are the provided usages of each strategy.

### LazyComponent

#### Importing Components
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

**Using React Code Split Component with ES6 import**
```javascript
import { LazyComponent } from 'react-code-split-component';

export default () => (
  <div>
    ...
    <LazyComponent load={() => import('./path/to/MyAwesomeComponent')} />
  </div>
);
```

#### Sending Props to Code Splitting Component
``<LazyComponent />`` supports props sending to a component to be lazily loaded.

```javascript
import { LazyComponent } from 'react-code-split-component';

export default () => (
  <div>
    ...
    <LazyComponent
      load={() => import('./path/to/MyAwesomeComponent')}
      myPropsNameOne={...}
      myPropsNameTwo={...}
    />
  </div>
);
```

### Wrap Component imports with ``lazify`` method

``
lazify(componentImportPromise, [extraProps])
``

#### Without Props
```javascript
import React from 'react';
import { lazify } from 'react-code-split-component';

export default () => (
  <div>
    ...
    { lazify(import('./path/to/MyAwesomeComponent')) }
  </div>
);
```

#### With Extra Props
```javascript
import React from 'react';
import { lazify } from 'react-code-split-component';

export default () => (
  <div>
    ...
    { lazify(import('./path/to/MyAwesomeComponent'), { myExtraPropKey: 'hi!'}) }
  </div>
);
```

## ESLint Issues ⚠️
ESLint might shows warning when you're using ``import`` inside another react component if you use ``<LazyComponent />``.

## EcmaScript Dynamic Import 🎵

**not yet supported**

Dynamic Import is currently in TC39 Proposal. When dynamic imports is officially supported, I'm sure to update this module to take advantage of the awesomeness of dynamic imports.

## SSR Support 🔬

**Server Side Rendering currently not supported**
