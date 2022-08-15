# cosine-ui

[![npm version](https://img.shields.io/npm/v/cosine-ui/latest.svg)](https://www.npmjs.com/package/@cosine_yu/cosine-ui)
[![Actions Status](https://github.com/yusixian/cosine-ui/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/yusixian/cosine-ui)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[组件库文档](https://ui.cosine.ren/)

cosine-ui 是出于个人兴趣开发的一个 React 组件库，尝试了 tailwind+TypeScript 在组件库中的实践，并使用 [Tailwind JIT mode](https://www.tailwindcss.cn/docs/just-in-time-mode) 开发，无需引入全量 Tailwind CSS，使用 dumi 进行文档的生成

此组件库还在开发中，还有很多地方有待完善，包括测试用例、通用组件等

## 项目中安装

在开始之前，需要具备 [Nodejs](https://nodejs.org/en/) 环境或使用 [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

从 npm 或 yarn 安装并引入 cosine-ui

```
npm i cosine-ui
# or
yarn add cosine-ui
```

## 从源码构建

下载

```
git clone git@github.com:yusixian/cosine-ui.git
```

安装依赖

```bash
npm i
# or
yarn
```

以开发模式运行

```bash
npm start
# or
yarn start
```

构建文档

```bash
npm run docs:build
# or
yarn docs:build
```

运行测试

```bash
npm test
# or
yarn test
```

通过 `father` 构建 dist 产物

```bash
$ npm run build
```
