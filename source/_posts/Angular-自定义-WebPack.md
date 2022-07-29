---
title: Angular 自定义 WebPack
date: 2022-07-28 22:02:33
tags: 
    - angular
    - webpack
---

### Angular Cli 6 以后禁用了 webpack 的自定义配置，官方似乎并未提供自定义配置 Webpack 的方法。

<!-- more -->

### 要自定义 Webpack 需要引入第三方库（以 Angular 13 为例）

## 安装 angular-builders/custom-webpack

`npm i @angular-builders/custom-webpack@13`

## 在 angular.json 中 修改 builder 和 customWebpackConfig

```
    "projects": {
        "architect": {
            "build": {
                "builder": "@angular-builders/custom-webpack:browser",
                "options": {
                    "customWebpackConfig": {
                        "path": "./webpack.config.js"
                    }
                }
            }
        }
    }
```
## 然后在项目根目录添加 webpack.config.js

```
    module.exports={
        devtool:'source-map',
        optimization:{
            minimize:false
        }
    }
```

## 接着在命令行使用`ng build`打包就可以看到没有压缩的js代码了
