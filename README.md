<p align="center">
  <a href="https://github.com/shawn2016/isui.git">
    <img width="150" src="https://github.com/shawn2016/icons/blob/master/favicon.png?sanitize=true">
  </a>
</p>

isui
---

A high quality UI Toolkit, A Component Library for React 16+. 💘

### Installation

```bash
npm install isui --save
```

### Basic Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'isui';

ReactDOM.render(
  <Button type="primary">Hello</Button>, 
  document.getElementById('app')
);
```

### Documentation

Visit the [https://github.com/shawn2016/isui.git](https://github.com/shawn2016/isui.git) website for more information.

<p align="center">
<a href="https://github.com/shawn2016/isui.git"><img src="https://github.com/shawn2016/icons/blob/master/test.png" /></a>
</p>

### Development

To develop, run the self-reloading build, Get the code:

```bash
$ git clone https://github.com/shawn2016/isui.git
$ cd isui
$ npm install # or  yarn install
# or
$ npm install --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
```

To develop, run the self-reloading build:

```bash
# Run the app
# Restart the app automatically every time code changes. 
# Useful during development.
$ npm start
```

Open your browser and visit http://127.0.0.1:2087

Update the document

```bash
npm run deploy
```

Folders

```bash
├── dist           # document the static file.
├── docs           # documentation in markdown
├── lib            
├── package.json
├── script
└── src            # react source code 
```

### License

Licensed under the MIT License.