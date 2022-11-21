# doc-v2的基础教程

## 编辑mdx类型文件

> 该篇目下的内容是指，编写纯文字的内容

![image-20221121130451909](https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121130451909.png)

>  除了红色框中的内容，都是直接编写`mdx`文件来完成。

**以`Derivatives`为例开展以下教程描述：**

1. 首先，看下网站上的结构，分为了Rest API 和 WebSocket的顶级目录结构，该目录结构的定义是通过

   `sidebars.js`来展现的
   <img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121130816316.png" alt="image-20221121130816316" style="zoom:50%;" />
2. 让我们看下`sidebars.js`内容，像Rest API, Market Data Endpoint，只是定义了一个label，然后做嵌套，

   将那些行情接口mdx文件作为item放在items数组当中。每次新增一个文件，应当来这里新增一个item，否则无法展现在网站上。

<img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121130956802.png" alt="image-20221121130956802" style="zoom:50%;" />

3. mdx书写，可以参考`derivatives/market/instrument-info`, 该文件使用了`<Tabs><TabItem>`标签书写了

   Response parameter，是因为option和future有不一样的响应体（字段）。若option和future的响应体是完全一样的，可以直接写成传统的markdown表格语法即可。

4. 以上為英文版本的教程，关于编写中文文档，即在`i18n/zh/docusaurus-plugin-content-docs`目录下存在一样的结构的目录，只需要去对应的mdx文件中，将可以改写成中文的地方，用中文写一遍即可（请使用<mark>繁体中文</mark>）

   <img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121132657143.png" alt="image-20221121132657143" style="zoom:50%;" />

5. 还有很多可以玩的，可以参考官方文档：https://docusaurus.io/zh-CN/docs

**定义了一些书写规范：**

* mdx文件名，英文小写，若是词组，请用`-`短横线连接，尽量短，可以在定义title, 侧边栏名称时写具体些
* 定义请求体和响应体的数据类型时，保持一致，我目前使用了以下类型：
  * string - 小写，字符串，基本大部分都是字符串格式
  * number - 覆盖了整数类型，长整数类型，小数点等（若不合理，还望提点）
  * array - 数组
  * object - map对象
  * boolean

可以沟通下此处的数据类型，做到正确、规范和统一

## 编辑yaml文件，生成交互式浏览

> 即最早红色框`API explorer`里内容

1. 首先介绍下他生成方式，通过编辑yaml。`temp.yaml`是一个交互式浏览器插件的原本的一个demo，

   其内容可以参考: https://dextertd.github.io/new-docs-openapi/docs/category/petstore-api

   temp.yaml的可视化效果，即以上链接内容，可以借此去发现yaml该怎么玩。另外，`yml-folder/derivatives/market.yaml`是我编写的行情demo，也可参考。我会后续新增private接口的yaml以供参考
<img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121133805530.png" alt="image-20221121133805530" style="zoom:50%;" />

2. 编写好yaml后，需要在`docusaurus.config.js`文件中，定义配置。比如以下例子中的`dv_market`是取了一个唯一的`id`，并且说明了yaml所在的目录`specPath`，以及输出到的目录`outputDir`
<img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121134108431.png" alt="image-20221121134108431" style="zoom:50%;" />

3. 以上准备工作完成后，需要跑以下命令：

   ```shell
   $ yarn docusaurus gen-api-docs <id> # 通过yaml生成mdx文件
   ```
若不满意，执行以下命令，清除mdx文件，再去更新yaml
   ```shell
   $ yarn docusaurus clean-api-docs <id> # 移除之前生成过的mdx文件
   ```
