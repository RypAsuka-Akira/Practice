# webpack打包基本流程

### 1.初始化项目目录

![1584616779899](C:\Users\viruser.v-desktop\AppData\Roaming\Typora\typora-user-images\1584616779899.png)

打包后文件目录应类似上图。（可参考VUE项目文件结构）

`dist`文件保存打包后所需要的入口文件、打包好的js文件

`node_modules`保存项目依赖

`src`保存项目源文件

`src/app`保存项目入口文件和以及其他`.js`文件

`src/asstes`保存静态资源，较大图片可以发布到服务器上（javaScript线程阻塞）

`src/common`保存`production`状态时的`index.html`

`src/css`保存样式文件

**tips:**`.js`文件与`.css`文件需要在入口文件处引入



初始化项目结构：

![img](https://upload-images.jianshu.io/upload_images/4434233-57724b7736211ab1.png?imageMogr2/auto-orient/strip|imageView2/2/w/117/format/webp)

`.js`文件与`.css`文件可以在项目成功在本地（`file协议`）运行时再逐步分离。



### 2.npm 初始化

> npm init

初始化项目，生成`package.json`文件

**tips:**安装`webpack`

> npm install webpack -g // 全局安装
> npm install webpack --save-dev // 项目内安装

全局安装配置项目运行环境，项目内安装增添依赖关系`package.json`中的`devDependencies`同步更新，可以直接编辑`devDependencies`对象，然后用`npm install`安装依赖

增添依赖的主要作用为，在另一台机器上运行项目时，npm可以依据`package.json`中的`devDependencies`直接安装所有依赖

**tips:**`webpack4.0`版本以上需要同步安装`webpack-cli`

> npm install webpack-cli -g // 全局安装
> npm install webpack-li --save-dev // 项目内安装



### 3.webpack 打包

> node_modules/.bin/webpack app/main.js -o common/index.js

app/main.js：是入口文件的路径
common/index.js：是打包文件的存放路径

**tips:**可以在项目根目录webpack.config.js进行webpack参数配置

参考[webpack.config.js](webpack.config.js)

设置完`entry`以及`output`属性后可以直接在项目根目录下使用`webpck`指令进行webpack打包，然后就可以在指定路径中查看到打包好的`.js`文件，只要在`index.html`中进行引用即可成功打开网页。

在`package.json`中可以进行指令设置，然后就可以像`VUE`中一样用指令`npm run build`进行打包，

同样的也可以设置`derServe`，然后采用指令`npm run dev`进行本地线上开发





可参考网站[webpack打包](https://www.jianshu.com/p/1192cfd4a012)