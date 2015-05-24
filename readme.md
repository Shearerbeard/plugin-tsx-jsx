#plugin-ts-jsx
> Typescript with embedded JSX plugin for [jspm](https:jspm.io)

This plugin is inspired by [floatdrop/plugin-jsx](https://github.com/floatdrop/plugin-jsx) and [jbrantly/ts-jsx-loader](https://github.com/jbrantly/ts-jsx-loader) - the goal is to implement the webpack loader for jspm/systemjs.

Allows you to wrap your jsx in a fake call to React.jsx() in order to play well with typescript. Include the react-jsx.d.ts along with the react definitions from [DefinitelyTyped.org](http://definitelytyped.org/tsd/) to get proper IDE hinting with typescript and your embedded JSX statements. Import this plugin with system.js ```System.import('ts-jsx')``` and use the ```!ts-jsx``` flag when importing your source code to import these files without compile errors. ```System.import('main!ts!ts-jsx');```.

This should still be considered experiemental as I work out the kinks to get it production ready. 

Example:

```typescript
/// <reference path="../typings/tsd.d.ts" />

import React from "react";
import "./app.js!ts-jsx";

React.render(
    React.jsx(`<h1>Hello, world</h1>`),
    document.getElementById('example')
);
```
