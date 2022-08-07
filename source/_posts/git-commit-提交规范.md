---
title: git commit 提交规范
date: 2022-08-06 20:29:39
tags: 
      - git
---

转载于:[阿里云开发者社区](https://developer.aliyun.com/article/645092#:~:text=Git%E6%8F%90%E4%BA%A4%E4%B9%9F%E6%9C%89%E5%85%B6%E8%A7%84%E8%8C%83%EF%BC%8C%E4%B8%9A%E5%86%85%E5%81%9A%E7%9A%84%E6%AF%94%E8%BE%83%E5%A5%BD%E7%9A%84%EF%BC%8C%E6%AF%94%E8%BE%83%E5%85%B7%E6%9C%89%E5%8F%82%E8%80%83%E4%BB%B7%E5%80%BC%E7%9A%84%E5%B0%B1%E6%98%AFAngular%E7%9A%84%E6%8F%90%E4%BA%A4%E3%80%82%20Angular%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83%3A%20%28%29%3A%20%23header%20%2F%2F,%E7%A9%BA%E4%B8%80%E8%A1%8C%20%2F%2F%20%E7%A9%BA%E4%B8%80%E8%A1%8C%20%E6%A0%BC%E5%BC%8F%E8%AE%B2%E8%A7%A3%20Header%20Header%E9%83%A8%E5%88%86%E5%8F%AA%E6%9C%89%E4%B8%80%E8%A1%8C%EF%BC%8C%E5%8C%85%E6%8B%AC%E4%B8%89%E4%B8%AA%E5%AD%97%E6%AE%B5%EF%BC%9Atype%EF%BC%88%E5%BF%85%E9%9C%80%EF%BC%89%E3%80%81scope%EF%BC%88%E5%8F%AF%E9%80%89%EF%BC%89%E5%92%8Csubject%EF%BC%88%E5%BF%85%E9%9C%80%EF%BC%89%E3%80%82)
```
简介： 自古至今，无规矩不成方圆。 
Git提交也有其规范，业内做的比较好的，比较具有参考价值的就是Angular的提交。 
Angular提交规范: (): #header // 空一行 // 空一行 格式讲解 Header Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。
```
<!-- more -->
自古至今，无规矩不成方圆。

Git提交也有其规范，业内做的比较好的，比较具有参考价值的就是Angular的提交。

Angular提交规范:
```
<type>(<scope>): <subject> #header
// 空一行
<body>
// 空一行
<footer> 
```
## 格式讲解

### Header

Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。

总的来说，关键就是header这部分，至于<body>和<footer>可省略

例如:
    
```
feat:新增财务报表
```

#### type
用于说明本次commit的类别，只允许使用下面7个标识

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

注意:如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

#### scope
用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

#### subject
是 commit 目的的简短描述，不超过50个字符。

```
以动词开头，使用第一人称现在时，比如change，而不是changed或changes
第一个字母小写
结尾不加句号（.）
```



