---
title: bilibili视频下载
date: 2021-10-20 10:15:22
tags:
    - jQuery
    - JavaScript
    - DOM
---
# 注意：本方案在2021年10月21日还可以用。
<!--more-->
## 步骤开始：
1. 首先打开一个想要下载的视频界面
![B站视频页面](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/4VO1RSO_ZTRBGT%28TW%287L5%24V.png)
2. 通过B站的视频流API获取B站视频下载链接
> http://api.bilibili.com/x/player/playurl

* 点击这个[网站](https://github.com/attractive-boy/bilibili-API-collect)查看API详情。

这个时候我们还缺少一些**url参数：**

| 参数名 | 类型 | 内容             | 必要性       | 备注                                                         |
| ------ | ---- | ---------------- | ------------ | ------------------------------------------------------------ |
| aid   | num  | 稿件aid         | 必要（可选） | aid与bvid任选一个                                           |
| bvid   | str  | 稿件bvid         | 必要（可选） | aid与bvid任选一个                                           |
| cid    | num  | 视频cid          | 必要         |                                                              |
| qn     | num  | 视频清晰度选择   | 非必要       | 未登录默认32（480P）<br />登录默认64（720P）|
| fnval  | num  | 视频获取方式选择 | 非必要       | 默认为0<br />0 2：flv方式（可能会有分段）<br />1：低清mp4方式（仅240P与360P，且限速65K/s）<br />16 80：dash方式（音视频分流，支持H.265） |
| fnver  | num  | 0                | 非必要       | 固定为0                                                      |
| fourk  | num  | 是否允许4K视频   | 非必要       | 默认为0<br />画质最高1080P：0<br />画质最高4K：1             |

 3. 获取视频流URL所需要的参数

 此时我们返回到刚刚打开的视频界面，按下**F12**调出开发者工具，在控制台输入js指令来获取我们所需要的参数。

`window.__INITIAL_STATE__.videoData`

他会在控制台输出如下结果
![获取URL参数](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/97ZJTY9HDXBWR0TJV.png) 

可以从中查看到 **aid：590850209** **bvid：BV1Eq4y1Z7sv** 以及 **cid：415827800**

现在我们就获得了获取B站视频下载链接的链接：
> http://api.bilibili.com/x/player/playurl?bvid=BV1Eq4y1Z7sv&cid=415827800&qn=64&fnval=0

在浏览器打开这个链接将会收到B站返回的JSON值。
![JSON值](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/TUI%7DERCB29JY7HW93SJBJ46.png)

4. 获取最终下载链接

将json进行格式化
![链接](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/JLL5WHFCH1HV9OQKY0X2.png)
**data**下的**durl**中有一个**url**就是下载该视频的最终链接。
> 注意！此链接无法直接打开，B站有采用Referer防盗链，直接打开会报错，可以采用下列方法:
>
>* 采用迅雷等下载软件打开该链接进行下载。
>* 在之前的打开的视频网站打开该链接可以使防盗链失效：
>1. 回到哔哩哔哩域名下打开**F12**开发人员工具。
>2. 进入控制台输入**window.open(url链接)**按**回车**他就可以打开该链接进行视频下载。

![视频下载成功](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/NQ3A471XW%60B%28K1IQ%28F%29%5DT7A.png)

## 方案改进：
采用此方案每次想要下载都需要非常繁琐的步骤，非常麻烦，于是采用浏览器脚本插件的办法实现下载
### 安装**tampermonkey**插件
[下载点我](https://www.tampermonkey.net/)
### 注意:在Google浏览器商店安装，需要翻墙下载，建议使用Edge便可无需翻墙
安装好以后按照下图所示步骤操作：

![1](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/8dhk7sbj.png)

![2](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/DH1T%7BI%7D%5DI9LGSJBK0A%28J%28WS.png)

删除编辑器里的内容粘贴如下代码：
```
// ==UserScript==
// @name         B站视频下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       attractiveboy
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(()=>{
        // 生成下载按钮
        $('.video-data').append("<button id='downloadbutton' style='margin-left:10px'>下载</button>");
         // 按钮绑定事件
        $('#downloadbutton').click(()=>{
            $.ajax({
                type: "GET",
                url: `https://api.bilibili.com/x/player/playurl?bvid=${window.__INITIAL_STATE__.videoData.bvid}&cid=${window.__INITIAL_STATE__.videoData.cid}&qn=64&fnval=0`,
                success: (data)=>{
                    window.open(data.data.durl[0].url);
                }
            });
        });
    },2000);
})();
```
按 **CTRL+S** 保存，启用该脚本，之后打开B站的投稿视频就会发现：
![B站视频下载](https://index.attractiveboy.top/bilibili%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD/RK0DH20TT1G5RFUN76H7.png)
点击就可以下载视频啦！
 
