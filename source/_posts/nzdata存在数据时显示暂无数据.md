---
title: nzdata存在数据时显示暂无数据
date: 2022-06-20 21:29:59
tags: 
    -- angular
    -- nztable
---

在nztable中设置nzdata时，当我往nzdata数组中添加数据之后，会发现这样的情况：
<!--more-->
![例](https://index.attractiveboy.top/picture/22.6.20/20220620200439.png)
通过ng-zerro官网得知，当nzdata中有数据时，暂无数据应该不会显示，但在这里，却出现了这样的情况，于是我去查看新增调用的方法
![fs.addrow](https://index.attractiveboy.top/picture/22.6.20/20220620200439.png)
新增一条数据通过`push()`的方式往数组中添加一条数据使得表单中多了一条数据，但有数据后下面还是有暂无数据的图标。
通过查阅Angular的文档后发现：
angular实现视图与模型的双向数据绑定是通过变化监测来实现的，当监测到数据变化时，angular会执行轮询来找到那个变化的数据并将他更新到模型或者视图中。
在js中，数组是引用类型的数据，如果对数组使用`push()`方法，他改变的是数组的原始数组，而数组的引用值不会发生变化，但是，angular监听数据变化用的是`onchanges()`方法，这个方法监听的是数据的引用值，当数据的原始值改变而引用值不改变时，不会触发这个生命周期钩子。
所以我们只需要在push数据之后，增加一行代码：
```
this.fs.er.itemInfo = [...this.fs.er.itemInfo];
```
对自身进行解构赋值，从而触发angular的`onchanges()`钩子，让他去更新视图层，从而让nztable知道他的data值发生变化，将暂无数据隐藏。
