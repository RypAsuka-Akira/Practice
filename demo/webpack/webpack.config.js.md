# webpack.config.js

```javascript
module.exports = {
```



* ### mode: <font style = 'color:red'>[production,development]</font>

  提供 `mode` 配置选项，告知 webpack 使用相应模式的内置优化。

* ### entry: string|Array\<String>

  提供程序入口

* ### output: Object

  配置 `output` 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个`入口`起点，但只指定一个`输出`配置。

  #### Attr:

  * **1. `filename`: \<String>**

    指定输出文件的文件名

  * **2. `path`: \<String>**
  
  目标出书目录path的绝对路径
  
  #### tips:
  
  > 可以在文件头引入`path`，使用`__dirname`来指定路径，`__dirname`是node.js中的一个全局变量，指向根当前执行脚本所在的目录。
  
  ```javascript
  const path = require('path')
  
  entry: path.resolve(__dirname, 'src/app/main.js'),
  output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'index.js'
  }
  ```
  
  

* ### module: Object

  `module` 配置如何处理模块。

  `rules`  配置模块的读取和解析规则，通常用来配置 Loader。其类型是一个数组，数组里每一项都描述了如何去处理部分文件。 配置一项 `rules` 时大致通过以下方式：

  1. 条件匹配：通过  test 、 include 、 exclude  三个配置项来命中 Loader 要应用规则的文件。
  2. 应用规则：对选中后的文件通过 `use` 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。
  3. 重置顺序：一组 Loader 的执行顺序默认是从右到左执行，通过 `enforce` 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。

  ####　tips:

  `test`通过正则表达式匹配相应文件，`use`指定该文件所用的相应Loader及Loader的相关配置。

  for Example:

  ```javascript
    module: {
          rules: [{
                  test: /\.css$/,
                  use: ['style-loader', 'css-loader', 'postcss-loader']
              },
              {
                  test: /\.js$/,
                  use: [{
                      loader: 'babel-loader',
                      options: {
                          presets: [
                              `@babel/preset-env`
                          ]
                      }
                  }]
              }
          ]
      }
  ```

  `use`指定的loader运行顺序为从右到左

  #### Others:

  * **打包CSS资源**

    1.使用 `css-loader`以及`style-loader`进行正常打包

    > npm i -D css-loader style-loader

    - `css-loader`: 加载.css文件
    - `style-loader`:使用`<style>`将css-loader内部样式注入到我们的HTML页面
    - 使用`css-loader`+`style-loader`的方式是将样式打包进`js`文件，然后以`style`标签的形式嵌入页面。`css`样式与`js`文件混在一起可能导致一些样式混乱，所以使用插件将`css`样式统一打包进一个`cs`s文件，然后以`link`标签的形式嵌入页面进行资源请求。
      `webpack3`通常使用的是`ExtractWebpackPlugin`,但在webpack4中已不再支持，官方推荐使用`MiniCssExtractPlugin`进行替代。

    2.`MiniCssExtractPlugin`插件

    > npm i -D mini-css-extract-plugin

    将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap

    只能用在webpack4中，对比另一个插件 `extract-text-webpack-plugin`来说:

    - 异步加载
    - 不重复编译，性能更好
    - 更容易使用
    - 只针对CSS

    https://www.npmjs.com/package/mini-css-extract-plugin

    3.`autoprefixer`插件

    > npm i -D postcss-loader autoprefixer

    可以给CSS自动添加浏览器前缀

    `postcss-loader`需要一个配置文件，在根目录新建`postcss.config.js`写入：

    ```javascript
    module.exports = {
    	plugins:[require('autoprefixer')]
    }
    ```

      结合`MiniCssExtractPlugin`最终在`webpack.config.js`文件中显示如下：

    ```javascript
    {
        test: /\.css$/,
        use: [
            {
                loader:miniCssExtractPlugin.loader  //抽离成一个css文件
            },
            'css-loader',    //解析css
            'postcss-loader'   //先添加前缀
        ]
    }
    ```

  * **压缩css/js代码**

    1.使用`optimize-css-assets-webpack-plugin`插件来压缩css代码。

    > npm i -D optimize-css-assets-webpack-plugin

    ```javascript
    
    // webpack.config.js
     
    const opimizeCss=require('optimize-css-assets-webpack-plugin');
     
    module.exports = {
        optimization:{   
            minimizer:[
                new opimizeCss()
            ]   
        },
        mode:'production'
        ....
    }
    ```

    2.使用`uglifyjs-webpack-plugin`来压缩js代码(npm run build以后打开main.css发现已经被压缩，但是在默认环境为production时自动压缩的js代码却不再压缩了)

    > npm i -D uglifyjs-webpack-plugin

    ```javascript
    //webpack.config.js
    const uglifyJsWebpackPlugin=require('uglifyjs-webpack-plugin')
     
    module.exports = {
        optimization:{   
            minimizer:[
                new uglifyJsWebpackPlugin({
                    cache:true,  //是否缓存
                    parallel:true,  //是否并发打包，同时打包多个文件
                    sourceMap:true  //打包后的代码与源码的映射，方便调试
                })
                ...
            ]
            ...
    } 
    ```

  * **ES6转译ES5**
  
    webpack里面使用了大量的es6语法，我们需要转换为es5,使用`babel`来完成此功能。
  
    > npm i -D babel-loader @babel/core @babel/preset-env
  
    ```javascript
    {
        test:/\.js$/,
        use:[
            {
                loader:'babel-loader',
                options:{
                    presets:[
                        `@babel/preset-env`  //es6转es5
                    ]
                }
            }
        ]
    }
    ```
  
  * **图片引入**
  
    1.`url-loader`
  
    > npm install url-loader --save-dev
  
    ​		如果页面图片较多，发很多http请求，会降低页面性能。这个问题可以通过url-loader解决。url-loader会将引入的图片编码，生成dataURl并将其打包到文件中，最终只需要引入这个dataURL就能访问图片了。当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。
  
    2.`file-loader`
  
    > npm install file-loader --save-dev
  
    ​		在css文件中定义background的属性或者在html中引入image的src，我们知道在webpack打包后这些图片会打包至定义好的一个文件夹下，和开发时候的相对路径会不一样，这就会导致导入图片路径的错误。而file-loader正是为了解决此类问题而产生的，他修改打包后图片的储存路径，再根据配置修改我们引用的路径，使之对应引入。
  
    3.`image-webpack-loader`图片压缩
  
    > npm install image-webpack-loader --save-dev
  
* ### devServe: Object
  
  `devServe`启动本地服务进行线上开发
  
    #### Attr:
  
  * **1.`contentBase`: \<String>**
  
    指定服务器资源根目录，默认值为项目目录
  
  * **2.`port`: \<Number>**
  
    指定开启服务的端口号
  
  * **3.`host`: \<Number>**
  
    设置服务器主机号
  
  * **4.`historyApiFallback`: \<Object>**
  
    重定向
  
    需要在`dist`目录下新建一个`404.html`页面
  
    `webpack.config.js`配置如下
  
    ```javascript
    historyApiFallback: {
                rewrites: [{
                    from: /./,
                    to: '404.html'
                }]
    }
    ```
  
  * **5.`hot`: \<Boolean>**
  
    是否开启热更新
  
  * **6.`open`: \<Boolean>**
  
    开启服务后是否自动开启页面
  
  * **7.`overlay`: \<Boolean>**
  
    编译出错时显示错误
  
    **...**

```javascript
}
```

  
