# doc-v2 tutorial

## Edit MDX files

> This category is for document only

![image-20221121130451909](https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121130451909.png)

>  The content in the red box is replying on editing yaml file.

**Let's use `Derivatives` as tutorial sample：**

1. Firstly, check the structure of site, which has **Rest API** and **WebSocket** top categories. They are built in

   `sidebars.js`
   <img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121130816316.png" alt="image-20221121130816316" style="zoom:50%;" />
2. Secondly, let's check `sidebars.js`. You could just define the category label like **Rest API**, **Market Data Endpoint**, which don't need actual mdx files.

   Put those ready mdx files under each `items`. You have to add the item when you have one file ready, otherwise it won't be shown on the site.

<img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121130956802.png" alt="image-20221121130956802" style="zoom:50%;" />

3. Followed by writing mdx file，you could refer to `derivatives/market/instrument-info`. It has two tabs for different response params (future, option), which is implemented by
   `tab, tabItem`. If not applicable, just write with standard markdown syntax to have a table.

4. Finally，refer to official tutorial for more interesting discoveries：https://docusaurus.io/docs

**Pre-defined a couple of writing rules (negotiable)：**

* mdx file name: [little capital], [use `-` to connect], [simple, short, meaningful].
* Use following data type for request and response params：
  * string
  * integer - covers integer, long integer
  * number - float
  * array
  * object
  * boolean
    
## Edit yaml file to generate api explorer

1. First, you could have a rough look with `temp.yaml`, which is the original file of https://dextertd.github.io/new-docs-openapi/docs/category/petstore-api.

   You may learn more from `temp.yaml` to know more about available keys in the api explorer. Besides，`yml-folder/derivatives/market.yaml and unified.yaml` are my demo, which 
could send public and private get post requests.
<img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121133805530.png" alt="image-20221121133805530" style="zoom:50%;" />

2. Secondly, once yaml is ready, you need to add config in `docusaurus.config.js`. For instance, `dv_market` is a unique id，`specPath` is the yaml file path，and `outputDir`
<img src="https://github.com/bybit-exchange/docs-v2/blob/master/static/img/readme/image-20221121134108431.png" alt="image-20221121134108431" style="zoom:50%;" />

3. Finally, run below commands：

   ```shell
   $ yarn docusaurus gen-api-docs <id> # generate mdx files by yaml.
   ```
If you want to re-edit yaml, please clean existed mdx first by below cmd, then re-run above cmd.
   ```shell
   $ yarn docusaurus clean-api-docs <id> # 移除之前生成过的mdx文件
   ```
