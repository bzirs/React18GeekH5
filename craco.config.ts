// const { resolve } = require('path')
import { resolve } from 'path'
// import pxToViewport from 'postcss-px-to-viewport'
const pxToViewport = require('postcss-px-to-viewport')

const vw = pxToViewport({
  // 视口宽度，一般就是 375（ 设计稿一般采用二倍稿，宽度为 375 ）
  viewportWidth: 375
})

console.log()

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': resolve('./src'),
      // 约定：使用 @scss 表示 样式 文件所在路径
      '@scss': resolve('./src', 'assets', 'styles')
    }
  },
  // 这里补充style配置
  style: {
    // ◆ postcss的旧写法 (失效)
    // postcss: {
    //   plugins: [vw]
    // }
    // ◆ postcss8的新写法（推荐）
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [vw]
        }
      }
    }
  }
}
