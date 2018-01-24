快速上手
===

本节将介绍如何在项目中使用 isUI

## 安装

```bash
npm install isui --save

# 通过GitHub仓库安装
npm i -S isui-react/isui
# 指定版本
npm i -S isui-react/isui#v1.2.12
# 或者
yarn add isui-react/isui
```
> ps: **通过GitHub仓库安装**的 win 用户请在 `Git Bash` 下执行，因为需要用到 git。

## 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'isui';

ReactDOM.render(
  <Button type="primary">Hello</Button>, 
  document.getElementById('app')
);
```

## 组件冲突

重新取一个名字

```js
import { Button as ButtonView } from 'isui';
```

## 按需加载组件

```diff
- import { Alert } from 'isui';
+ import { Alert } from 'isui/lib/alert';
```

## 开发

要开发，运行自重新构建，获取代码：

```bash
$ git clone https://github.com/shawn2016/ui-react
$ cd ui-react
$ npm install # or  yarn install
# or 解决phantomjs下载失败问题
$ npm install --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
```

要开发，运行自重新构建：

```bash
# Run the app
# Restart the app automatically every time code changes. 
# Useful during development.
$ npm start
```

打开浏览器并访问：http://127.0.0.1:2087

更新文档

```bash
npm run deploy
```

## 文件目录说明

```bash
├── dist           # 生成的文档静态文件目录
├── docs           # 文档的源文件
├── lib            
├── package.json
├── script
└── src            # React组件在此
```

## License

Licensed under the MIT License.
