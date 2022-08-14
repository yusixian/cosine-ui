/*
 * @Author: cos
 * @Date: 2022-08-06 23:32:59
 * @LastEditTime: 2022-08-06 23:42:07
 * @LastEditors: cos
 * @Description:
 * @FilePath: \cosine-ui\.umirc.ts
 */
import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'cosine-ui',
  favicon: 'https://ysx.cosine.ren/img/avatar.jpg',
  logo: 'https://ysx.cosine.ren/img/avatar.jpg',
  mode: 'site',
  outputPath: 'docs-dist',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // 单语言配置方式如下
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/yusixian/cosine-ui',
    },
  ],
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
})
