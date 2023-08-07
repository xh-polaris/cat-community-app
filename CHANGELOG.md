

## [1.17.0](https://github.com/xh-polaris/meowchat-app/compare/v1.16.0...v1.17.0) (2023-08-07)


### 🐛 Bug Fixes | Bug 修复

* 测试环境的baseurl修改为https协议 ([80db2a3](https://github.com/xh-polaris/meowchat-app/commit/80db2a31f02c76dcb2101763f204ffd826786d1f))
* 修复错误变量名 ([a745f88](https://github.com/xh-polaris/meowchat-app/commit/a745f8884409bc645ed08caf65cff72820bec2d4))
* 修复了多次按按钮导致重复发布动态的问题 ([699e946](https://github.com/xh-polaris/meowchat-app/commit/699e94696e0294e3acef520ba2d75ca99dea510a))
* 修复切换环境时不会清除缓存 ([925301a](https://github.com/xh-polaris/meowchat-app/commit/925301acb23526381a49234fbd5b8e367edd2f1a))
* 修正个人页面图标显示 ([e8e98ed](https://github.com/xh-polaris/meowchat-app/commit/e8e98ed04a753a7c4ec46dc34cc5047b66134ad7))


### ✨ Features | 新功能

* 抽离出部分喵详情内容 ([#339](https://github.com/xh-polaris/meowchat-app/issues/339)) ([137afac](https://github.com/xh-polaris/meowchat-app/commit/137afac0c781085ac3f5060d34827568e1080c26))
* 初步实现"我的"页面调试按钮 ([a16d529](https://github.com/xh-polaris/meowchat-app/commit/a16d52913a272ddf3802c7940fabd7c9e88d837c))
* 初步实现"我的"页面调试按钮和面板切换 ([802d365](https://github.com/xh-polaris/meowchat-app/commit/802d365f6395d4719b7c7e9eba9854d6588de1fb))
* 初步实现"我的"页面泳道设置环境切换 ([#337](https://github.com/xh-polaris/meowchat-app/issues/337)) ([d0e9420](https://github.com/xh-polaris/meowchat-app/commit/d0e9420d108a381629404eadd64cdeddaac3776f))
* 初步实现切换社区页面重构 ([a2174d7](https://github.com/xh-polaris/meowchat-app/commit/a2174d7243e9ed7cd7445554836edee4cc706bfe))
* 初步实现新的SearchBar组件 ([7917de9](https://github.com/xh-polaris/meowchat-app/commit/7917de905881b3e2c6b6ec50e35ba43f7d758bfd))
* 猫咪详情页面样式修改 ([7ec2472](https://github.com/xh-polaris/meowchat-app/commit/7ec2472dfb34c80c3b8bad9cebcae6b7277de5f7))
* 实现大部分页面自定义TopBar样式 ([b05212d](https://github.com/xh-polaris/meowchat-app/commit/b05212d2cd20dba8712650a456c889a51f687b2e))
* 实现首页SchoolSelect分离 ([d2b5fd4](https://github.com/xh-polaris/meowchat-app/commit/d2b5fd43129c0d0a96132278d84ffd12783ec8bb))
* 实现首页TopBar分离 ([5c24763](https://github.com/xh-polaris/meowchat-app/commit/5c2476343c5d25ac275374793017a2cee8b28b35))
* 实现校区确认切换功能 ([75d1618](https://github.com/xh-polaris/meowchat-app/commit/75d1618fffd54cb2b10af4fcfb1e7d5ee64c163f))
* 实现泳道面板隐藏 ([58ed4b3](https://github.com/xh-polaris/meowchat-app/commit/58ed4b366331fcfcbc337c60849c2a744fe09450))
* 实现重构校区切换的搜索功能 ([da5aa09](https://github.com/xh-polaris/meowchat-app/commit/da5aa09a43868808620e16efadb3ab1b4780434e))
* 实现主要页面TopBar样式统一与进一步抽象 ([82f05c6](https://github.com/xh-polaris/meowchat-app/commit/82f05c62f631121a3edbfef6183dc584d8181507))
* 实现自定义TopBar返回功能 ([51a7cba](https://github.com/xh-polaris/meowchat-app/commit/51a7cbab2cf4aa726c2b960087695dc088d7d395))
* 实现TopBar的left和center双插槽 ([7007679](https://github.com/xh-polaris/meowchat-app/commit/7007679c4e856320055e1b6d3619127bb2290205))
* 添加了后台正在上传图片的提示 ([9584187](https://github.com/xh-polaris/meowchat-app/commit/958418789312c11ba38943fd92b27adcb6527fc9))
* 无赞无回复不显示 而非"0赞"或"0回复" ([6472efb](https://github.com/xh-polaris/meowchat-app/commit/6472efb055b9392a2732681390f054a6b6677e25))
* 修改关注图标 ([#338](https://github.com/xh-polaris/meowchat-app/issues/338)) ([b9f0fcd](https://github.com/xh-polaris/meowchat-app/commit/b9f0fcdce171daa1319f5fd877283c8ead8fd608))
* 暂时关闭点击喵图鉴进入详情 ([99d175c](https://github.com/xh-polaris/meowchat-app/commit/99d175c4cb9bda530aa2709a79a92566ac43417e))
* schoolSelect页面样式 ([ccddf36](https://github.com/xh-polaris/meowchat-app/commit/ccddf364dd1386d65cca6911674ee3b980a20300))

## [1.16.0](https://github.com/xh-polaris/meowchat-app/compare/v1.15.2...v1.16.0) (2023-06-19)


### ✨ Features | 新功能

* 实现喵社区瀑布流帖子带赞数和回复数 ([#316](https://github.com/xh-polaris/meowchat-app/issues/316)) ([6db5556](https://github.com/xh-polaris/meowchat-app/commit/6db555631feccdda940546e9cca0d5b8176c557e))

## [1.15.2](https://github.com/xh-polaris/meowchat-app/compare/v1.15.1...v1.15.2) (2023-05-19)


### 🐛 Bug Fixes | Bug 修复

* 用户主页不显示校区 ([0716451](https://github.com/xh-polaris/meowchat-app/commit/071645100836c6344faec988669991651b14905f))

## [1.15.1](https://github.com/xh-polaris/meowchat-app/compare/v1.15.0...v1.15.1) (2023-05-19)

## [1.15.0](https://github.com/xh-polaris/meowchat-app/compare/v1.14.2...v1.15.0) (2023-05-19)


### 🐛 Bug Fixes | Bug 修复

* 去除动态和帖子和评论审核 ([#296](https://github.com/xh-polaris/meowchat-app/issues/296)) ([b7d04de](https://github.com/xh-polaris/meowchat-app/commit/b7d04de2343536b1e78844a84cfa5b627335dfcd))
* 审核时的跨域问题 ([#287](https://github.com/xh-polaris/meowchat-app/issues/287)) ([15d4e64](https://github.com/xh-polaris/meowchat-app/commit/15d4e64e501a6f57dc4905901b920457b91a8c6d))
* 添加社区卡片样式，因没有数据，暂时隐藏 ([#294](https://github.com/xh-polaris/meowchat-app/issues/294)) ([4f3af4b](https://github.com/xh-polaris/meowchat-app/commit/4f3af4bacd3390faf5fa20c9dab245f21c546d96))


### ✨ Features | 新功能

* 初步实现喵社区顶部导航栏新样式 ([b3a7aa7](https://github.com/xh-polaris/meowchat-app/commit/b3a7aa77aad31e4ce5fecfddf734cf5d624d27cd))
* 初步修改profile界面，搭建新profile界面框架 ([#288](https://github.com/xh-polaris/meowchat-app/issues/288)) ([e06a76b](https://github.com/xh-polaris/meowchat-app/commit/e06a76b976001139457ea0e327ef5cebc2ad85c1))
* 实现喵社区顶部导航栏新样式框架 ([1c8e559](https://github.com/xh-polaris/meowchat-app/commit/1c8e559572d872fe4ca9e75d4e2544677601eae9))
* 实现喵社区顶部导航栏悬浮 ([6aaf0f4](https://github.com/xh-polaris/meowchat-app/commit/6aaf0f4f2470ea4c9e32ae519088cbdd14ce588a))
* 新profile页面 ([a7b2a91](https://github.com/xh-polaris/meowchat-app/commit/a7b2a916567fc6549396f63634824246da947b92))

## [1.14.2](https://github.com/xh-polaris/meowchat-app/compare/v1.14.1...v1.14.2) (2023-04-22)


### 🐛 Bug Fixes | Bug 修复

* 添加评论审核 ([#286](https://github.com/xh-polaris/meowchat-app/issues/286)) ([d97012b](https://github.com/xh-polaris/meowchat-app/commit/d97012bc139be58340959c6c7e8263b46d639f11))
* 修复清除缓存后重新进入小程序不显示轮播图的bug ([#285](https://github.com/xh-polaris/meowchat-app/issues/285)) ([dc9475b](https://github.com/xh-polaris/meowchat-app/commit/dc9475b67533ca389a677cb1076f0d2f6953c7ea))

## [1.14.1](https://github.com/xh-polaris/meowchat-app/compare/v1.14.0...v1.14.1) (2023-04-20)


### 🐛 Bug Fixes | Bug 修复

* 切换箭头图标的分辨度 ([cd6bcb1](https://github.com/xh-polaris/meowchat-app/commit/cd6bcb16ea8215342fe090b75e7d00d174799671))

## [1.14.0](https://github.com/xh-polaris/meowchat-app/compare/v1.13.1...v1.14.0) (2023-04-16)


### ✨ Features | 新功能

* 选择校区界面增加完成切换后的确认按钮 ([#281](https://github.com/xh-polaris/meowchat-app/issues/281)) ([cd91b6d](https://github.com/xh-polaris/meowchat-app/commit/cd91b6d32dbd7130824f6eed713d2c8efc0b823d))


### 🐛 Bug Fixes | Bug 修复

* 添加发布帖子和动态时的内容审核 ([#283](https://github.com/xh-polaris/meowchat-app/issues/283)) ([ab4a29f](https://github.com/xh-polaris/meowchat-app/commit/ab4a29f18eac33be6adb2fb5aebde22ce75976cd))

## [1.13.1](https://github.com/xh-polaris/meowchat-app/compare/v1.13.0...v1.13.1) (2023-04-13)


### 🐛 Bug Fixes | Bug 修复

* 修复重复显示问题 ([#280](https://github.com/xh-polaris/meowchat-app/issues/280)) ([22d2b47](https://github.com/xh-polaris/meowchat-app/commit/22d2b476cb6bdc509bc10e1ec994390e8578ce2e))

## [1.13.0](https://github.com/xh-polaris/meowchat-app/compare/v1.12.1...v1.13.0) (2023-04-12)


### ✨ Features | 新功能

* 选择学校页面搜索功能 ([#277](https://github.com/xh-polaris/meowchat-app/issues/277)) ([977e0f9](https://github.com/xh-polaris/meowchat-app/commit/977e0f90afa83dbe53e7ddad2e995df2fcac3a5a))

## [1.12.1](https://github.com/xh-polaris/meowchat-app/compare/v1.12.0...v1.12.1) (2023-04-09)


### ⚡ Performance Improvements | 优化

* 撸猫指南样式修改、只有一个校区时不显示校区 ([#274](https://github.com/xh-polaris/meowchat-app/issues/274)) ([5b78a7f](https://github.com/xh-polaris/meowchat-app/commit/5b78a7f2b759ec9456a30f0470d53f93cdf739c9))


### 🐛 Bug Fixes | Bug 修复

* 去除选择猫咪搜索猫咪时的底部导航栏 ([#276](https://github.com/xh-polaris/meowchat-app/issues/276)) ([e9d5b09](https://github.com/xh-polaris/meowchat-app/commit/e9d5b094e7d0339b001fab16260bda61550a3e09))
* 修复官方帖子水印无法正常显示问题 ([#275](https://github.com/xh-polaris/meowchat-app/issues/275)) ([d9c27e2](https://github.com/xh-polaris/meowchat-app/commit/d9c27e22ac66c2d455a5ca0037248ff75d21189a))

## [1.12.0](https://github.com/xh-polaris/meowchat-app/compare/v1.11.0...v1.12.0) (2023-04-03)


### ✨ Features | 新功能

* 实现了官方帖子添加水印 实现了喵世界喵社区图鉴没有内容时的显示“这里还没有猫咪来过”图片以及淡蓝色背景 ([#273](https://github.com/xh-polaris/meowchat-app/issues/273)) ([3e95029](https://github.com/xh-polaris/meowchat-app/commit/3e950294fc2abdb08feef5398ab11b0309e42b67))


### 🐛 Bug Fixes | Bug 修复

* 发布正文说明可以不填 ([#272](https://github.com/xh-polaris/meowchat-app/issues/272)) ([16e144d](https://github.com/xh-polaris/meowchat-app/commit/16e144da59f40db02dbf45b31acebf8e84b7c487))
* 修复修改昵称时因为不触发失焦而不修改的问题 ([#271](https://github.com/xh-polaris/meowchat-app/issues/271)) ([aced7c1](https://github.com/xh-polaris/meowchat-app/commit/aced7c1ca11d7f0bc629547905c8aa76779022d8))

## [1.11.0](https://github.com/xh-polaris/meowchat-app/compare/v1.10.0...v1.11.0) (2023-03-30)


### ✨ Features | 新功能

* 初步新增我的点赞页面，修改昵称时若重名增加提示 ([#268](https://github.com/xh-polaris/meowchat-app/issues/268)) ([3c22fec](https://github.com/xh-polaris/meowchat-app/commit/3c22fec7cbbf6740151d9ad7fd81a7a7aff14dbc))


### 🐛 Bug Fixes | Bug 修复

* 关闭collection页面原生顶栏 ([#265](https://github.com/xh-polaris/meowchat-app/issues/265)) ([e49ecca](https://github.com/xh-polaris/meowchat-app/commit/e49eccab81b5891e00201beea2e296f71370a88d))
* 解决所有图片上传完毕后按钮才可用 ([#269](https://github.com/xh-polaris/meowchat-app/issues/269)) ([e5a6a40](https://github.com/xh-polaris/meowchat-app/commit/e5a6a40da534aec1784ec30bdfed1b9a0119e526))
* 修复了评论输入框样式问题 ([#270](https://github.com/xh-polaris/meowchat-app/issues/270)) ([473421b](https://github.com/xh-polaris/meowchat-app/commit/473421b2eb144fd4a188a8292cc279bb68533944))
* 修复了图片加载失败导致后续瀑布流无法继续加载的问题 ([#266](https://github.com/xh-polaris/meowchat-app/issues/266)) ([2b7ab6a](https://github.com/xh-polaris/meowchat-app/commit/2b7ab6a1f52d573b4a22f841a8b81c7efe0c3bd4)), closes [#265](https://github.com/xh-polaris/meowchat-app/issues/265)

## [1.10.0](https://github.com/xh-polaris/meowchat-app/compare/v1.9.7...v1.10.0) (2023-03-27)


### ✨ Features | 新功能

* 实现动态和帖子评论的删除功能 ([#257](https://github.com/xh-polaris/meowchat-app/issues/257)) ([c1314d8](https://github.com/xh-polaris/meowchat-app/commit/c1314d8e85f4fd76380cf261f8331beffa76800a))
* 为四个板块添加showLoading ([#255](https://github.com/xh-polaris/meowchat-app/issues/255)) ([e1fdcd8](https://github.com/xh-polaris/meowchat-app/commit/e1fdcd81418a51c51f43e6dfd80cb6ed1759c67a))
* 异步点赞 ([#256](https://github.com/xh-polaris/meowchat-app/issues/256)) ([304d681](https://github.com/xh-polaris/meowchat-app/commit/304d6814c107387cddc7e4560d3eb38ec3a69e28))


### 🐛 Bug Fixes | Bug 修复

* 修正顶部navbar文字位置偏移问题 ([#263](https://github.com/xh-polaris/meowchat-app/issues/263)) ([d571ce7](https://github.com/xh-polaris/meowchat-app/commit/d571ce72f7ca7413c77e4cb0605723597db7614b))

## [1.9.7](https://github.com/xh-polaris/meowchat-app/compare/v1.9.6...v1.9.7) (2023-03-19)


### ⚡ Performance Improvements | 优化

* 官方帖子显示为蓝色 ([74979c6](https://github.com/xh-polaris/meowchat-app/commit/74979c629c906c83dff17c0996d2263acd17a3db))

## [1.9.6](https://github.com/xh-polaris/meowchat-app/compare/v1.9.5...v1.9.6) (2023-03-19)


### 🐛 Bug Fixes | Bug 修复

* 解决图鉴第一次进入时多次请求的问题 ([#246](https://github.com/xh-polaris/meowchat-app/issues/246)) ([119b1d0](https://github.com/xh-polaris/meowchat-app/commit/119b1d045d5cf1212921f49ce323c86df1d478ce))
* 修复瀑布流 ([#251](https://github.com/xh-polaris/meowchat-app/issues/251)) ([280ecfe](https://github.com/xh-polaris/meowchat-app/commit/280ecfec1cf0adc51d9cf44afbd9c3b7b3d9709c))
* 修复我的发布中动态重复加载的问题 ([#249](https://github.com/xh-polaris/meowchat-app/issues/249)) ([71f6cab](https://github.com/xh-polaris/meowchat-app/commit/71f6cab1041ac4908caed4af654a654aaaae5c9c))


### ✨ Features | 新功能

* 初步修改我的发布中动态的样式为瀑布流，修正帖子详情中评论数量不符的问题 ([#247](https://github.com/xh-polaris/meowchat-app/issues/247)) ([7105b4f](https://github.com/xh-polaris/meowchat-app/commit/7105b4f3ccb246baacc0e18ac2b6aac0720e7720))
* 实现了动态和帖子评论中“回复”字样及其点击效果 ([#252](https://github.com/xh-polaris/meowchat-app/issues/252)) ([40c6f56](https://github.com/xh-polaris/meowchat-app/commit/40c6f56d8d0c9d83c2fe83022f1a35ea7b9a57c2))
* 为发动态和发帖子添加草稿功能 ([#250](https://github.com/xh-polaris/meowchat-app/issues/250)) ([daffc07](https://github.com/xh-polaris/meowchat-app/commit/daffc07877e1bb76bf3a927247a12bf5ec08e170))
* draft-moment图片删除(Test) ([#253](https://github.com/xh-polaris/meowchat-app/issues/253)) ([e21774d](https://github.com/xh-polaris/meowchat-app/commit/e21774d98788164f655729be6e54e64054b2fb8e))


### ⚡ Performance Improvements | 优化

* 时间显示格式改为月-日 ([df01ad1](https://github.com/xh-polaris/meowchat-app/commit/df01ad1079a42fe41272d2fa32f4bb576906d473))

## [1.9.5](https://github.com/xh-polaris/meowchat-app/compare/v1.9.4...v1.9.5) (2023-03-15)

## [1.9.4](https://github.com/xh-polaris/meowchat-app/compare/v1.9.3...v1.9.4) (2023-03-15)


### 🐛 Bug Fixes | Bug 修复

* 图鉴底部显示bug ([#243](https://github.com/xh-polaris/meowchat-app/issues/243)) ([c170c6a](https://github.com/xh-polaris/meowchat-app/commit/c170c6ab7c5de7e1699ad68f20761b607951fd71))
* 修复无法看到底部评论的问题 ([#236](https://github.com/xh-polaris/meowchat-app/issues/236)) ([c84f447](https://github.com/xh-polaris/meowchat-app/commit/c84f44796763c11de1ad54ea1fb89c9bbe2b9ee4))
* 修改图鉴搜索刷新问题 ([#245](https://github.com/xh-polaris/meowchat-app/issues/245)) ([95e52cd](https://github.com/xh-polaris/meowchat-app/commit/95e52cd82f8a1f7ce9e851b17af39662a40a2afc))

## [1.9.3](https://github.com/xh-polaris/meowchat-app/compare/v1.9.2...v1.9.3) (2023-03-14)


### ✨ Features | 新功能

* 我的发布页面每条动态/帖子显示点赞与回复数量 ([#242](https://github.com/xh-polaris/meowchat-app/issues/242)) ([792d32a](https://github.com/xh-polaris/meowchat-app/commit/792d32a325ef849ae7e46a7b109327b0b024186d))


### ⚡ Performance Improvements | 优化

* 调整动态显示效果 ([bc5afb4](https://github.com/xh-polaris/meowchat-app/commit/bc5afb4a4efd9a53349cb21778ba11d51d85d0d6))
* 为获取社区列表添加缓存，仅需调用一次接口 ([5d91e11](https://github.com/xh-polaris/meowchat-app/commit/5d91e11eea1692b994e50d310349174d0548c8e3))
* 允许点击帖子的封面图进行预览 ([e4806bc](https://github.com/xh-polaris/meowchat-app/commit/e4806bcdabab2b4b37ebfb4dc2d04854a176d6df))

## [1.9.2](https://github.com/xh-polaris/meowchat-app/compare/v1.9.1...v1.9.2) (2023-03-13)


### ✨ Features | 新功能

* 将动态上传图片限制调整至30张，并调整图片多于9张时的显示效果 ([#240](https://github.com/xh-polaris/meowchat-app/issues/240)) ([891e2aa](https://github.com/xh-polaris/meowchat-app/commit/891e2aa9e3021d3469f1612a56013d419f7abb10))


### 🐛 Bug Fixes | Bug 修复

* 修复图鉴刷新失效 ([424ab8d](https://github.com/xh-polaris/meowchat-app/commit/424ab8dbb1dc0cf0a40917c14579a0b90ae37f2a))

## [1.9.1](https://github.com/xh-polaris/meowchat-app/compare/v1.9.0...v1.9.1) (2023-03-11)


### ✨ Features | 新功能

* 实现了我的关注页面样式 完善猫咪盒子样式 ([#238](https://github.com/xh-polaris/meowchat-app/issues/238)) ([ef24522](https://github.com/xh-polaris/meowchat-app/commit/ef24522d96fb7e789361750114cd44507ebb8b1a))


### 🐛 Bug Fixes | Bug 修复

* 解决刷新一次后猫咪地区增加的问题 ([#237](https://github.com/xh-polaris/meowchat-app/issues/237)) ([b20728e](https://github.com/xh-polaris/meowchat-app/commit/b20728e2599ce1e9d98a007af949045dd86a07ae))
* 新建动态时，选择猫咪后不再显示不选择猫咪字样 ([1090cee](https://github.com/xh-polaris/meowchat-app/commit/1090cee52be1f6f560117e3560521dfc171eb6e3))
* 修复发动态选择猫咪样式崩溃问题 ([#239](https://github.com/xh-polaris/meowchat-app/issues/239)) ([c738990](https://github.com/xh-polaris/meowchat-app/commit/c738990ce940ce91a42bc593ab1702bf740f1327))
* 修复改变底部导航栏布局后，新建动态、帖子的位置问题 ([78f4007](https://github.com/xh-polaris/meowchat-app/commit/78f40077814fae3bd56bdde0eb79cf85329d4c6a))


### ⚡ Performance Improvements | 优化

* 根据反馈修改图鉴及图鉴详情的显示效果 ([#235](https://github.com/xh-polaris/meowchat-app/issues/235)) ([8bf100a](https://github.com/xh-polaris/meowchat-app/commit/8bf100a100c5a3d5afeb7ccfd0c485e538f50124))
* 修改新建内容时的顶部字样，标识动态&帖子与社区&世界的关系 ([678975c](https://github.com/xh-polaris/meowchat-app/commit/678975cd2518a458286275485ec54a6f7d7aa5c2))

## [1.9.0](https://github.com/xh-polaris/meowchat-app/compare/v1.8.7...v1.9.0) (2023-03-11)


### ⚡ Performance Improvements | 优化

* 调整底部导航栏位置，将社区放在首页 ([54441c4](https://github.com/xh-polaris/meowchat-app/commit/54441c4deb246acd283ca4e22248a4a2967e300e))
* 允许动态没有标题和正文 ([1f1a214](https://github.com/xh-polaris/meowchat-app/commit/1f1a214da46b9aa5ea6c4228053e9405b8279c4e))


### 🐛 Bug Fixes | Bug 修复

* 初步修复无法看到底部评论的问题 ([#234](https://github.com/xh-polaris/meowchat-app/issues/234)) ([2b8f3fd](https://github.com/xh-polaris/meowchat-app/commit/2b8f3fdeafbcadd1eb91b95bc6e6fcacc6bb5f37))
* 修复图鉴处的猫咪搜索 ([#233](https://github.com/xh-polaris/meowchat-app/issues/233)) ([55079f6](https://github.com/xh-polaris/meowchat-app/commit/55079f6cc159b9cccc2286e7048e4d307163b682))
* 修改动态评论样式 ([#232](https://github.com/xh-polaris/meowchat-app/issues/232)) ([6fc52c1](https://github.com/xh-polaris/meowchat-app/commit/6fc52c1f5b0b88b5cb111fef4596b8f0fc56fff3))

## [1.8.7](https://github.com/xh-polaris/meowchat-app/compare/v1.8.6...v1.8.7) (2023-03-10)


### ✨ Features | 新功能

* 图片可拖拽排序 ([#229](https://github.com/xh-polaris/meowchat-app/issues/229)) ([9f399e2](https://github.com/xh-polaris/meowchat-app/commit/9f399e2ade0c0d93502ac62f1980ad5ce2d4c2f8))

## [1.8.6](https://github.com/xh-polaris/meowchat-app/compare/v1.8.5...v1.8.6) (2023-03-10)


### 🐛 Bug Fixes | Bug 修复

* 修复动态和帖子在加载前会显示删除按钮的问题 ([cc3e040](https://github.com/xh-polaris/meowchat-app/commit/cc3e040018bdc211601cf79d160c54326f42269e))
* 在动态详情处添加@某只猫咪 ([#231](https://github.com/xh-polaris/meowchat-app/issues/231)) ([f6543cb](https://github.com/xh-polaris/meowchat-app/commit/f6543cbabc87bc78e3c30db8d395f400b79e450d))

## [1.8.5](https://github.com/xh-polaris/meowchat-app/compare/v1.8.4...v1.8.5) (2023-03-10)


### 🐛 Bug Fixes | Bug 修复

* 草稿状态无法查看大图 ([#227](https://github.com/xh-polaris/meowchat-app/issues/227)) ([28d0fd0](https://github.com/xh-polaris/meowchat-app/commit/28d0fd08df9886022d1d3b07012f116a0c8abd14))
* 修改反馈的样式问题 11 12 14 17 ([#228](https://github.com/xh-polaris/meowchat-app/issues/228)) ([9df03da](https://github.com/xh-polaris/meowchat-app/commit/9df03dadb29c2433fee71a083d6529020643af86))
* 修改选择猫咪处UI的显示问题 ([#230](https://github.com/xh-polaris/meowchat-app/issues/230)) ([59610bd](https://github.com/xh-polaris/meowchat-app/commit/59610bd548417150383228da82933a78814a1ad7))

## [1.8.4](https://github.com/xh-polaris/meowchat-app/compare/v1.8.3...v1.8.4) (2023-03-10)


### ⚡ Performance Improvements | 优化

* 修改动态和帖子字数限制为2000 ([0700c6f](https://github.com/xh-polaris/meowchat-app/commit/0700c6fb7c0d6495b1aa6a6823449fd0760d0ada))

## [1.8.3](https://github.com/xh-polaris/meowchat-app/compare/v1.8.2...v1.8.3) (2023-03-10)


### ⚡ Performance Improvements | 优化

* 猫咪详情内可以保存猫咪头像 ([530c00e](https://github.com/xh-polaris/meowchat-app/commit/530c00e52790b801a8e97e97ad35d7b8ad51b39c))

## [1.8.2](https://github.com/xh-polaris/meowchat-app/compare/v1.8.1...v1.8.2) (2023-03-10)


### ⚡ Performance Improvements | 优化

* 公告显示时间，帖子在没有tag时不显示图标 ([89bae5f](https://github.com/xh-polaris/meowchat-app/commit/89bae5f9ad59ce35b3b5f041a9cd683c5516a4e4))

## [1.8.1](https://github.com/xh-polaris/meowchat-app/compare/v1.8.0...v1.8.1) (2023-03-09)


### ⚡ Performance Improvements | 优化

* 提高底部导航栏的清晰度 ([9ab8bb8](https://github.com/xh-polaris/meowchat-app/commit/9ab8bb86a160d2d15c779697e567f5b24841b3d2))

## [1.8.0](https://github.com/xh-polaris/meowchat-app/compare/v1.7.11...v1.8.0) (2023-03-08)


### ✨ Features | 新功能

* 添加了图鉴详情中猫片阴影，完善了点赞的样式 ([#225](https://github.com/xh-polaris/meowchat-app/issues/225)) ([7894dff](https://github.com/xh-polaris/meowchat-app/commit/7894dffcdf6e6f5ff04b2dbaa29de704cbf6dd0c))


### 🐛 Bug Fixes | Bug 修复

* 修复school-select显示异常 ([#226](https://github.com/xh-polaris/meowchat-app/issues/226)) ([9ffc082](https://github.com/xh-polaris/meowchat-app/commit/9ffc082825399b83c0b92b8f16bd83b783d77509))

## [1.7.11](https://github.com/xh-polaris/meowchat-app/compare/v1.7.10...v1.7.11) (2023-03-08)


### 🐛 Bug Fixes | Bug 修复

* 修复瀑布流显示异常 ([#224](https://github.com/xh-polaris/meowchat-app/issues/224)) ([68ca829](https://github.com/xh-polaris/meowchat-app/commit/68ca829a7c8568a03328673ebe7c583747b7de77))
* 修改我的发布中动态的点赞数目为实际值 ([#223](https://github.com/xh-polaris/meowchat-app/issues/223)) ([b6160ec](https://github.com/xh-polaris/meowchat-app/commit/b6160ecaa6a0d586aa16e4317b1222101d96520b)), closes [#190](https://github.com/xh-polaris/meowchat-app/issues/190)

## [1.7.10](https://github.com/xh-polaris/meowchat-app/compare/v1.7.9...v1.7.10) (2023-03-07)


### ⚡ Performance Improvements | 优化

* 点击猫片可以看大图 ([3cd505b](https://github.com/xh-polaris/meowchat-app/commit/3cd505ba72451b89020004acac28b2d092f08425))


### 🐛 Bug Fixes | Bug 修复

* 修复帖子的评论被错误设置scope的问题 ([0c2cba9](https://github.com/xh-polaris/meowchat-app/commit/0c2cba96dccfdca412668ced5bb4978be680bde1))
* 修复照片墙照片点赞数目变化问题 ([#221](https://github.com/xh-polaris/meowchat-app/issues/221)) ([871c128](https://github.com/xh-polaris/meowchat-app/commit/871c1289c4dbda05f922378db034425b72666849))

## [1.7.9](https://github.com/xh-polaris/meowchat-app/compare/v1.7.8...v1.7.9) (2023-03-07)


### ✨ Features | 新功能

* 新增图鉴照片墙点赞，修复修改姓名问题 ([#219](https://github.com/xh-polaris/meowchat-app/issues/219)) ([f0b1311](https://github.com/xh-polaris/meowchat-app/commit/f0b1311ceb5ff233106950692fb3a975b9288c47))


### 🐛 Bug Fixes | Bug 修复

* 修复公告处的问题 ([#220](https://github.com/xh-polaris/meowchat-app/issues/220)) ([6f8f489](https://github.com/xh-polaris/meowchat-app/commit/6f8f4896c471eec06df27e21bcfc524382f00da5))


### ⚡ Performance Improvements | 优化

* 禁用没有设置刷新的页面的下拉刷新功能，移除图鉴的搜索框 ([a91c12b](https://github.com/xh-polaris/meowchat-app/commit/a91c12b553ebee5d0d2f2d9a9617999d8ba43588))
* 上传头像时，在图片上传完成前禁止确认 ([9cab060](https://github.com/xh-polaris/meowchat-app/commit/9cab0606c56a395a64b2dc33e62c4c9a1424e5a7))
* 搜索页面的动态和帖子在无数据时显示效果一致 ([11dd475](https://github.com/xh-polaris/meowchat-app/commit/11dd475637f7667646808c2b9d6df9dae078eb90))

## [1.7.8](https://github.com/xh-polaris/meowchat-app/compare/v1.7.7...v1.7.8) (2023-03-07)


### ⚡ Performance Improvements | 优化

* 轮播图每隔5秒自动轮换 ([9883783](https://github.com/xh-polaris/meowchat-app/commit/9883783869bb0a24deb80ff5b641f5e18acc2189))

## [1.7.7](https://github.com/xh-polaris/meowchat-app/compare/v1.7.6...v1.7.7) (2023-03-07)


### 🐛 Bug Fixes | Bug 修复

* 修改搜索时退出时直接退出小程序的bug ([#217](https://github.com/xh-polaris/meowchat-app/issues/217)) ([b755e4a](https://github.com/xh-polaris/meowchat-app/commit/b755e4ace59f7d46534c955fdefed0401db715cc))

## [1.7.6](https://github.com/xh-polaris/meowchat-app/compare/v1.7.5...v1.7.6) (2023-03-06)


### 🐛 Bug Fixes | Bug 修复

* 追加修复图标变形问题 ([afece7a](https://github.com/xh-polaris/meowchat-app/commit/afece7a58a3c97b5ad52447b89a15f816bc2247f))


### ⚡ Performance Improvements | 优化

* 修改选择校区历史和学校选择点击时下拉框显示形式 ([#216](https://github.com/xh-polaris/meowchat-app/issues/216)) ([1047241](https://github.com/xh-polaris/meowchat-app/commit/10472416c428fbd990808565213ff2d77477326d))

## [1.7.5](https://github.com/xh-polaris/meowchat-app/compare/v1.7.4...v1.7.5) (2023-03-06)


### 🐛 Bug Fixes | Bug 修复

* 修改icon变形问题 ([#215](https://github.com/xh-polaris/meowchat-app/issues/215)) ([3d78cb9](https://github.com/xh-polaris/meowchat-app/commit/3d78cb9e417f08578557135653827dc0927f31cd))

## [1.7.4](https://github.com/xh-polaris/meowchat-app/compare/v1.7.3...v1.7.4) (2023-03-05)


### ⚡ Performance Improvements | 优化

* 修改申请领养Toast显示形式 ([#214](https://github.com/xh-polaris/meowchat-app/issues/214)) ([7226e3a](https://github.com/xh-polaris/meowchat-app/commit/7226e3aed8b84fd0ae79f1f2f9bab0c8be6891ad))

## [1.7.3](https://github.com/xh-polaris/meowchat-app/compare/v1.7.2...v1.7.3) (2023-03-04)


### ✨ Features | 新功能

* 实现喵社区下拉页面时轮播图刷新 ([#212](https://github.com/xh-polaris/meowchat-app/issues/212)) ([9560863](https://github.com/xh-polaris/meowchat-app/commit/956086322798f8abd471325c80f03def59aab781))


### 🐛 Bug Fixes | Bug 修复

* 禁止上传图片，调整喵社区页面刷新时机 ([4a941fb](https://github.com/xh-polaris/meowchat-app/commit/4a941fb561c0434fdca7fb86fd49d4b8746355b5))

## [1.7.2](https://github.com/xh-polaris/meowchat-app/compare/v1.7.1...v1.7.2) (2023-03-04)


### 🐛 Bug Fixes | Bug 修复

* **collection:** 修复底部猫咪无法完整显示的bug，并调整了刷新时机 ([#211](https://github.com/xh-polaris/meowchat-app/issues/211)) ([c1b71ef](https://github.com/xh-polaris/meowchat-app/commit/c1b71ef101f432b98605264f8c17b8206b496a73))

## [1.7.1](https://github.com/xh-polaris/meowchat-app/compare/v1.7.0...v1.7.1) (2023-03-04)


### 🐛 Bug Fixes | Bug 修复

* 修复我的发布中动态无法显示的问题 ([#209](https://github.com/xh-polaris/meowchat-app/issues/209)) ([3f9fd50](https://github.com/xh-polaris/meowchat-app/commit/3f9fd50d88f83c92ddc838ce172c3abbf219a653))


### ✨ Features | 新功能

* 申请领养板块改为开发中 ([#210](https://github.com/xh-polaris/meowchat-app/issues/210)) ([3ad2685](https://github.com/xh-polaris/meowchat-app/commit/3ad26855182d500e368909b84799902113aa319f))

## [1.7.0](https://github.com/xh-polaris/meowchat-app/compare/v1.6.7...v1.7.0) (2023-03-01)


### ✨ Features | 新功能

* 上传图片界面添加协议与政策 校区选择逻辑修改 ([#203](https://github.com/xh-polaris/meowchat-app/issues/203)) ([2d8a576](https://github.com/xh-polaris/meowchat-app/commit/2d8a576d62b6a238c7372106aee07869d1da60b9))
* 照片墙接口对接 ([#206](https://github.com/xh-polaris/meowchat-app/issues/206)) ([04feb52](https://github.com/xh-polaris/meowchat-app/commit/04feb5251890a00ea995ef86099cebb76e1980b2)), closes [#144](https://github.com/xh-polaris/meowchat-app/issues/144) [#145](https://github.com/xh-polaris/meowchat-app/issues/145) [#146](https://github.com/xh-polaris/meowchat-app/issues/146)


### 🐛 Bug Fixes | Bug 修复

* 解决动态没有搜索结果的问题 ([#198](https://github.com/xh-polaris/meowchat-app/issues/198)) ([e08c3fc](https://github.com/xh-polaris/meowchat-app/commit/e08c3fcd3e2713b4c1f6ff428bae474fba60e7ea))
* 图鉴刷新bug修复 ([#208](https://github.com/xh-polaris/meowchat-app/issues/208)) ([878a569](https://github.com/xh-polaris/meowchat-app/commit/878a569f3c61ccd5fed252ead8648073533bf421))
* 修复喵社区瀑布流在有图片时仍出现nodata.png的问题 修复喵社区无轮播图数据时仍然空位的问题 修复喵社区瀑布流图片较少时背景颜色不一致问题 ([#202](https://github.com/xh-polaris/meowchat-app/issues/202)) ([dcf4cbf](https://github.com/xh-polaris/meowchat-app/commit/dcf4cbfca10c4914c39be86203bd1ad1a4b9013c))
* 修改消息处红点和修改公告 ([#207](https://github.com/xh-polaris/meowchat-app/issues/207)) ([10fc7ac](https://github.com/xh-polaris/meowchat-app/commit/10fc7acb7738e21c3550f1e7997c489b1e2e0823))

## [1.6.7](https://github.com/xh-polaris/meowchat-app/compare/v1.6.6...v1.6.7) (2023-02-28)


### ✨ Features | 新功能

* 添加用户服务协议与个人信息保护政策界面 ([#197](https://github.com/xh-polaris/meowchat-app/issues/197)) ([d535495](https://github.com/xh-polaris/meowchat-app/commit/d53549545831483b0460b49e9317f3f411c30ebd))

## [1.6.6](https://github.com/xh-polaris/meowchat-app/compare/v1.6.5...v1.6.6) (2023-02-28)


### 🐛 Bug Fixes | Bug 修复

* 我的页面暂时不显示学校信息 ([#195](https://github.com/xh-polaris/meowchat-app/issues/195)) ([a2439fd](https://github.com/xh-polaris/meowchat-app/commit/a2439fd1437038153875ff078c32ad1f6c73b515)), closes [#144](https://github.com/xh-polaris/meowchat-app/issues/144) [#145](https://github.com/xh-polaris/meowchat-app/issues/145) [#146](https://github.com/xh-polaris/meowchat-app/issues/146)
* 修复了喵社区动态标题显示过长问题 ([#196](https://github.com/xh-polaris/meowchat-app/issues/196)) ([5b7ef7f](https://github.com/xh-polaris/meowchat-app/commit/5b7ef7f4459884bd7fba7294d995374b40d7b4ad))
* 修复上传猫片的路径错误 ([c21dc4e](https://github.com/xh-polaris/meowchat-app/commit/c21dc4e884d53bf134b80259d37614921d13f2c7))

## [1.6.5](https://github.com/xh-polaris/meowchat-app/compare/v1.6.4...v1.6.5) (2023-02-28)


### ✨ Features | 新功能

* 完善选择历史与社区界面校区显示 ([#193](https://github.com/xh-polaris/meowchat-app/issues/193)) ([6b7665b](https://github.com/xh-polaris/meowchat-app/commit/6b7665b3001f86936ea200f93972f2e364790d6b))


### 🐛 Bug Fixes | Bug 修复

* 解决喵世界瀑布流动态不全问题 ([#194](https://github.com/xh-polaris/meowchat-app/issues/194)) ([db1cfca](https://github.com/xh-polaris/meowchat-app/commit/db1cfca12108054b5e00eec26a3a3a2b8d041c3c))

## [1.6.4](https://github.com/xh-polaris/meowchat-app/compare/v1.6.3...v1.6.4) (2023-02-28)


### 🐛 Bug Fixes | Bug 修复

* 修复选择校区无法点击的bug ([52c912f](https://github.com/xh-polaris/meowchat-app/commit/52c912f4a52f47ce81a7b696c9a298ad6e67cb84))

## [1.6.3](https://github.com/xh-polaris/meowchat-app/compare/v1.6.2...v1.6.3) (2023-02-27)


### ⚡ Performance Improvements | 优化

* 确保启动时绑定了一个有效的校区 ([26ed7bd](https://github.com/xh-polaris/meowchat-app/commit/26ed7bd140f1f12652e1eae1c43fe423df633abe))

## [1.6.2](https://github.com/xh-polaris/meowchat-app/compare/v1.6.1...v1.6.2) (2023-02-26)


### ✨ Features | 新功能

* 学校/校区选择同步到社区和图鉴界面 ([#186](https://github.com/xh-polaris/meowchat-app/issues/186)) ([4bee751](https://github.com/xh-polaris/meowchat-app/commit/4bee751f6af71be7ee3694f43a5be9eb6d2bd38d))


### 🐛 Bug Fixes | Bug 修复

* 解决喵世界喵社区最底部被tab遮挡问题 ([#187](https://github.com/xh-polaris/meowchat-app/issues/187)) ([2f831d9](https://github.com/xh-polaris/meowchat-app/commit/2f831d9281aeb3c8241c86c6408c07002104820e))

## [1.6.1](https://github.com/xh-polaris/meowchat-app/compare/v1.6.0...v1.6.1) (2023-02-22)


### ✨ Features | 新功能

* 实现轮播图的点击跳转 ([57e3896](https://github.com/xh-polaris/meowchat-app/commit/57e389646d06619cd696b5ff6b048ea15328a8bf))

## [1.6.0](https://github.com/xh-polaris/meowchat-app/compare/v1.5.1...v1.6.0) (2023-02-21)


### 🐛 Bug Fixes | Bug 修复

* 修复ios端上传图片不显示问题 ([#185](https://github.com/xh-polaris/meowchat-app/issues/185)) ([52fc3f0](https://github.com/xh-polaris/meowchat-app/commit/52fc3f0dcc7bd5ad60a862f56447e0dff56f17df))


### ✨ Features | 新功能

* 添加发布动态时的选择猫咪 ([#183](https://github.com/xh-polaris/meowchat-app/issues/183)) ([dc76373](https://github.com/xh-polaris/meowchat-app/commit/dc76373bb55fea51f9a81b462a7a94cf9c7dee51))
* 我的发布页面 ([#184](https://github.com/xh-polaris/meowchat-app/issues/184)) ([3f7b2ee](https://github.com/xh-polaris/meowchat-app/commit/3f7b2ee5d301f60a8da095a4f87b78cfa97d5bcd)), closes [#144](https://github.com/xh-polaris/meowchat-app/issues/144) [#145](https://github.com/xh-polaris/meowchat-app/issues/145) [#146](https://github.com/xh-polaris/meowchat-app/issues/146)

## [1.5.1](https://github.com/xh-polaris/meowchat-app/compare/v1.5.0...v1.5.1) (2023-02-18)


### ✨ Features | 新功能

* 将调整四个主界面的顶部栏全部更改为自定义栏，并调整显示效果 ([#180](https://github.com/xh-polaris/meowchat-app/issues/180)) ([589077c](https://github.com/xh-polaris/meowchat-app/commit/589077c6430bb52bf15f17172231487b2e91734f))
* 实现了帖子/动态详情中用户自删帖子/动态的功能 ([#182](https://github.com/xh-polaris/meowchat-app/issues/182)) ([203062d](https://github.com/xh-polaris/meowchat-app/commit/203062d54cf865ff4e5042c15956fe641bd600f9))
* 添加图鉴上传照片界面UI ([#181](https://github.com/xh-polaris/meowchat-app/issues/181)) ([82d08f9](https://github.com/xh-polaris/meowchat-app/commit/82d08f93b7b47c2d57bd9a9b49cff550003663c9))

## [1.5.0](https://github.com/xh-polaris/meowchat-app/compare/v1.4.4...v1.5.0) (2023-02-11)


### ✨ Features | 新功能

* 初步实现学校/校区选择功能 ([#175](https://github.com/xh-polaris/meowchat-app/issues/175)) ([88adb18](https://github.com/xh-polaris/meowchat-app/commit/88adb182b53a012201b056244951a92f4bdcf00f))
* 添加帖子的二级评论 ([#174](https://github.com/xh-polaris/meowchat-app/issues/174)) ([65de5c3](https://github.com/xh-polaris/meowchat-app/commit/65de5c30534b7a155f536bb3f957063d89510927))
* 添加我的消息ui界面 ([#176](https://github.com/xh-polaris/meowchat-app/issues/176)) ([89dd171](https://github.com/xh-polaris/meowchat-app/commit/89dd171371d237d3669d276ad10cb8da1cc5caf7))

## [1.4.4](https://github.com/xh-polaris/meowchat-app/compare/v1.4.3...v1.4.4) (2023-02-09)


### ✨ Features | 新功能

* 实现了通过顶部导航栏切换发帖子/动态的功能 ([#172](https://github.com/xh-polaris/meowchat-app/issues/172)) ([64d1c71](https://github.com/xh-polaris/meowchat-app/commit/64d1c71b3186e843ae473a1d90db2bc15bdccc1c))
* 我的发布页面 ([#171](https://github.com/xh-polaris/meowchat-app/issues/171)) ([73ec22a](https://github.com/xh-polaris/meowchat-app/commit/73ec22a4abbc68f0bc573c90367b73abec1fae24)), closes [#144](https://github.com/xh-polaris/meowchat-app/issues/144) [#145](https://github.com/xh-polaris/meowchat-app/issues/145) [#146](https://github.com/xh-polaris/meowchat-app/issues/146)
* 修改反馈中的美观问题 ([#168](https://github.com/xh-polaris/meowchat-app/issues/168)) ([13a3420](https://github.com/xh-polaris/meowchat-app/commit/13a34204f8e23982123f923f793b5ffa275a0995))

## [1.4.3](https://github.com/xh-polaris/meowchat-app/compare/v1.4.2...v1.4.3) (2023-02-06)


### 🐛 Bug Fixes | Bug 修复

* 修改反馈问题 ([#166](https://github.com/xh-polaris/meowchat-app/issues/166)) ([ca61b67](https://github.com/xh-polaris/meowchat-app/commit/ca61b67882191a6ed9dabb4595dee6e97865b36c)), closes [#144](https://github.com/xh-polaris/meowchat-app/issues/144) [#145](https://github.com/xh-polaris/meowchat-app/issues/145) [#146](https://github.com/xh-polaris/meowchat-app/issues/146)


### ✨ Features | 新功能

* 实现了图鉴和图鉴详情页面下拉刷新 ([#163](https://github.com/xh-polaris/meowchat-app/issues/163)) ([3ac9a6e](https://github.com/xh-polaris/meowchat-app/commit/3ac9a6eb797b73871a2391581ab8d69f95bf4900))
* 添加社区api ([#167](https://github.com/xh-polaris/meowchat-app/issues/167)) ([5ecef17](https://github.com/xh-polaris/meowchat-app/commit/5ecef17e65a113ff88da9a4df136be068d635bb5))

## [1.4.2](https://github.com/xh-polaris/meowchat-app/compare/v1.4.1...v1.4.2) (2023-02-02)


### 🐛 Bug Fixes | Bug 修复

* 修复了动态评论的子评论无法点赞的问题 ([#162](https://github.com/xh-polaris/meowchat-app/issues/162)) ([d2cd89d](https://github.com/xh-polaris/meowchat-app/commit/d2cd89d6bbead66e2d5afcb9fe56dc12124e5e63))
* 修复校区选择界面下拉框图片消失，选择无效。部分逻辑；申请管理界面按反馈修改，添加选择学校 ([#161](https://github.com/xh-polaris/meowchat-app/issues/161)) ([4006bb8](https://github.com/xh-polaris/meowchat-app/commit/4006bb8b8a85437777acfa6e5d8fa718fd087b9c))

## [1.4.1](https://github.com/xh-polaris/meowchat-app/compare/v1.4.0...v1.4.1) (2023-01-31)


### ✨ Features | 新功能

* 动态详情点击预览多张图片可滑动 ([#160](https://github.com/xh-polaris/meowchat-app/issues/160)) ([6d4a41d](https://github.com/xh-polaris/meowchat-app/commit/6d4a41dfad771586788f671e6f5378f2d79384c2))

## [1.4.0](https://github.com/xh-polaris/meowchat-app/compare/v1.3.0...v1.4.0) (2023-01-25)


### ✨ Features | 新功能

* 将下方原生导航栏重写为自定义导航栏并调整样式 ([#158](https://github.com/xh-polaris/meowchat-app/issues/158)) ([6568661](https://github.com/xh-polaris/meowchat-app/commit/6568661366eae671677163a8467145f447738980))


### ⚡ Performance Improvements | 优化

* 压缩图标，删除无用的svg图片减小体积 ([9d74a02](https://github.com/xh-polaris/meowchat-app/commit/9d74a02cb7f566993a71b3613da145aca35e1831))


### 🐛 Bug Fixes | Bug 修复

* 修正世界搜索时出现的报错&修改props解构方式 ([#157](https://github.com/xh-polaris/meowchat-app/issues/157)) ([fcc4be4](https://github.com/xh-polaris/meowchat-app/commit/fcc4be40c74332474252342e2a9e7c54fce44cfb))

## [1.3.0](https://github.com/xh-polaris/meowchat-app/compare/v1.2.1...v1.3.0) (2023-01-20)


### ⚡ Performance Improvements | 优化

* 美化个人信息页面样式 ([#144](https://github.com/xh-polaris/meowchat-app/issues/144)) ([930e2c7](https://github.com/xh-polaris/meowchat-app/commit/930e2c7003b33e73e83d0a10d363e4b2573882b6))


### 🐛 Bug Fixes | Bug 修复

* 限制标签个数和限制标签字数 ([#143](https://github.com/xh-polaris/meowchat-app/issues/143)) ([a414492](https://github.com/xh-polaris/meowchat-app/commit/a414492308d3c600a27648e70666f1ee22d94856))
* 修复更改名称头像后，我的页面不立刻刷新的问题 ([c1312f7](https://github.com/xh-polaris/meowchat-app/commit/c1312f7a69ae81953a2a67a908c415c6cf2675fb))
* 修复了动态详情页面点赞图标有时无法显示的bug ([#145](https://github.com/xh-polaris/meowchat-app/issues/145)) ([c5cac9d](https://github.com/xh-polaris/meowchat-app/commit/c5cac9d795577d13bd69070e86216a77b71dfbc5))


### ✨ Features | 新功能

* 二级评论初步完成 ([#148](https://github.com/xh-polaris/meowchat-app/issues/148)) ([680286a](https://github.com/xh-polaris/meowchat-app/commit/680286a376c252192daa8dda40bc39822c086c4d))
* 实现世界页面的搜索功能 ([#146](https://github.com/xh-polaris/meowchat-app/issues/146)) ([f1a5f45](https://github.com/xh-polaris/meowchat-app/commit/f1a5f45310061ff3227db656a36cae7ba4c731dd))

## [1.2.3](https://github.com/xh-polaris/meowchat-app/compare/v1.2.2...v1.2.3) (2023-01-19)


### 🐛 Bug Fixes | Bug 修复

* 修复了动态详情页面点赞图标有时无法显示的bug ([#145](https://github.com/xh-polaris/meowchat-app/issues/145)) ([576da42](https://github.com/xh-polaris/meowchat-app/commit/576da42af1bd2ed9e71bae3feb01072a099ea8e5))

## [1.2.2](https://github.com/xh-polaris/meowchat-app/compare/v1.2.1...v1.2.2) (2023-01-19)


### 🐛 Bug Fixes | Bug 修复

* 限制标签个数和限制标签字数 ([#143](https://github.com/xh-polaris/meowchat-app/issues/143)) ([a414492](https://github.com/xh-polaris/meowchat-app/commit/a414492308d3c600a27648e70666f1ee22d94856))
* 修复更改名称头像后，我的页面不立刻刷新的问题 ([b7aefc6](https://github.com/xh-polaris/meowchat-app/commit/b7aefc6a8fd54bd8f648daf0037cec30e6b75784))
* 修改修改个人信息页面样式 ([#144](https://github.com/xh-polaris/meowchat-app/issues/144)) ([8b569cc](https://github.com/xh-polaris/meowchat-app/commit/8b569cc908d31c25a49aae9e552900918d02e1ab))

## [1.2.1](https://github.com/xh-polaris/meowchat-app/compare/v1.2.0...v1.2.1) (2023-01-18)


### 🐛 Bug Fixes | Bug 修复

* 修复了瀑布流中用户名过长导致样式坍塌bug ([#142](https://github.com/xh-polaris/meowchat-app/issues/142)) ([ce9d37f](https://github.com/xh-polaris/meowchat-app/commit/ce9d37f010eb025d98485faccfe1f458241e7963))
* 修复评论刷新bug ([#141](https://github.com/xh-polaris/meowchat-app/issues/141)) ([b61fcfd](https://github.com/xh-polaris/meowchat-app/commit/b61fcfd9c7b85488e800b175d02382ce7306e99f))

## [1.2.0](https://github.com/xh-polaris/meowchat-app/compare/v1.1.0...v1.2.0) (2023-01-17)


### ✨ Features | 新功能

* 点击动态的图片时会全屏显示，并且允许保存和转发 ([9cd80fd](https://github.com/xh-polaris/meowchat-app/commit/9cd80fd05f929a4e90663684e7b587cd98d9563c))
* 切换官方/热度/最新/关注触发页面刷新 ([164a882](https://github.com/xh-polaris/meowchat-app/commit/164a882cf3dbc74a500810276c778f42fb96dbcb))


### 🐛 Bug Fixes | Bug 修复

* 发帖/动态的加号换成了icon，确保不会往下偏移 ([f75e58d](https://github.com/xh-polaris/meowchat-app/commit/f75e58d2a2af69f383b81eee6c282b3efef6a762))
* 修复点赞图标不协调、莫名变大bug ([6f03132](https://github.com/xh-polaris/meowchat-app/commit/6f031323e727a256b1d84fd50dcf18f303b29aed))
* 修复发布评论后刷新问题 ([#140](https://github.com/xh-polaris/meowchat-app/issues/140)) ([78cb764](https://github.com/xh-polaris/meowchat-app/commit/78cb764ae05596aca64a6c5f54967469c49aca90))

## [1.1.0](https://github.com/xh-polaris/meowchat-app/compare/v1.0.0...v1.1.0) (2023-01-16)


### ✨ Features | 新功能

* 实现了喵世界/喵社区下拉刷新数据，添加了发布动态/帖子返回页面后立刻刷新显示最新的发布 ([#130](https://github.com/xh-polaris/meowchat-app/issues/130)) ([fdf678f](https://github.com/xh-polaris/meowchat-app/commit/fdf678f82ab1b71d93ac43628625143444e01a7e))
* 添加了动态详情页面的下拉刷新 ([#128](https://github.com/xh-polaris/meowchat-app/issues/128)) ([9367f94](https://github.com/xh-polaris/meowchat-app/commit/9367f94d2b220d0dd6ae423f3edf03d0abab2589))
* 添加了帖子详情页面的下拉刷新，调整了动态单张图片的显示效果 ([#137](https://github.com/xh-polaris/meowchat-app/issues/137)) ([835b420](https://github.com/xh-polaris/meowchat-app/commit/835b420dcb2e8c252b27bdfde0eb7e9577b2aa21))
* 在初次登录时自动更新用户头像和昵称 ([15356db](https://github.com/xh-polaris/meowchat-app/commit/15356db66346a4c114d099242868605d82611c64))
* 在网络异常时显示弹窗 ([3a132c2](https://github.com/xh-polaris/meowchat-app/commit/3a132c25da178f6461213c216158b66866c8e17a))


### 🐛 Bug Fixes | Bug 修复

* 解决了瀑布流长图显示过长问题 ([#138](https://github.com/xh-polaris/meowchat-app/issues/138)) ([5b93b1d](https://github.com/xh-polaris/meowchat-app/commit/5b93b1de32d4f3fc20503f6ba68b3e9533e4331f))
* 解决world界面头像挡住顶部导航栏的问题 ([#131](https://github.com/xh-polaris/meowchat-app/issues/131)) ([40b2e7e](https://github.com/xh-polaris/meowchat-app/commit/40b2e7e1e200a6335c84984a0fb5dc5ffb556606))
* 修复本地时间与服务器时间不一致时，显示的时间可能为“几秒后”的问题 ([810b906](https://github.com/xh-polaris/meowchat-app/commit/810b906ea514b8a28960cb6df636cd7ddba8f002))
* 修复编辑头像页面不显示原本头像的问题 ([750ec22](https://github.com/xh-polaris/meowchat-app/commit/750ec22f31a5c22dcd3636f35940b83d7fc34807))
* 修复图片上传时，content-type被设置为json的问题，以及上传动态或帖子过快导致图片url丢失的问题 ([2d8e88e](https://github.com/xh-polaris/meowchat-app/commit/2d8e88e7d50728f9812ea7b1ab6a94bf487c5652))


### ⚡ Performance Improvements | 优化

* 根据图片数量自适应显示方式，并调整动态图片上限为9张 ([#136](https://github.com/xh-polaris/meowchat-app/issues/136)) ([55eccc1](https://github.com/xh-polaris/meowchat-app/commit/55eccc1e47c77d519711e6ac5ec9df89adbd3f19))
* 在小图预览时使用缩略图代替原图 ([0187bd2](https://github.com/xh-polaris/meowchat-app/commit/0187bd206740a7a596f4aa821dde899276d95d70))