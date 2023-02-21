# cosine-ui

[![npm version](https://img.shields.io/npm/v/cosine-ui/latest.svg)](https://www.npmjs.com/package/cosine-ui)
[![Actions Status](https://github.com/yusixian/cosine-ui/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/yusixian/cosine-ui)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

cosine-ui 是出于个人兴趣开发的一个 React 组件库，尝试了 Tailwind+TypeScript 在组件库中的实践，并使用 [Tailwind JIT mode](https://www.tailwindcss.cn/docs/just-in-time-mode) 开发，无需引入全量 Tailwind CSS，使用 [dumi](https://d.umijs.org/zh-CN) 进行文档的生成

[使用文档](https://ui.cosine.ren/)

- 将平时业务所需的基础组件全部抽离
- 组件源码全部在文档底部附有，可直接复用到自己的其他业务项目
- API 尽可能完善

此组件库还在开发中，还有很多地方有待完善，包括测试用例、包体积优化等，因为没有设计所以全都是凭借自己审美开发，故可能样式不是那么好看，所以尽可能提供了无样式版本。

ps: 有些组件如 Space 等就是照着 [antd](https://ant.design/index-cn) 的思想来开发学习的，因为确实非常易用，antd 的组件源码个人认为非常值得学习

## docs

- [cosine-ui 简介](https://ui.cosine.ren/guide)
- [组件](https://ui.cosine.ren/components)
  - [Icon](https://ui.cosine.ren/components/icon)
  - [Button](https://ui.cosine.ren/components/button)
  - [Loading](https://ui.cosine.ren/components/loading)
  - [Space](https://ui.cosine.ren/components/space)

## todos

- basic components
  - [x] Icon
  - [x] Button
  - [x] Space
  - [x] Loading
  - [ ] Card
  - [ ] Grid
  - [ ] Badge
  - [ ] Modal
  - [ ] Dropdowns
- feature components 业务中抽离组件
  - [ ] DatePicker 日期选择器
  - [ ] SearchInput 输入框
  - [ ] Carousel 轮播图

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
