# edx_node_restful_blog_api
Edx Introduction to NodeJS: Module 2 Assignment Lab: RESTful Blog API

## index.js

包含数据校验的API框架

Test by <code>sh test_index.sh</code>

期望显示：<code>[{"username":"xieruochen","email":"ruochen.xie@bitmain.com","url":"ruochen95.github.io"},{"username":"xieruochen2","email":"ruochen.xie2@bitmain.com","url":"ruochen952.github.io"}]Bad RequestCreated[{"username":"xieruochen","email":"ruochen.xie@bitmain.com","url":"ruochen95.github.io"},{"username":"xieruochen2","email":"ruochen.xie2@bitmain.com","url":"ruochen952.github.io"},{"username":"admin","email":"kkkk","url":"1"}]%</code>


## index_2.js

标准的API框架

Test by <code>sh test_index2.sh</code>

期望显示：<code>[]{"id":0}[{"balance":100,"name":"checking"}]{"balance":200,"name":"savings"}[{"balance":200,"name":"savings"}][]%</code>

## assignment.js

Test by <code>sh test_server.sh</code>

遗留问题：

1. 子组件数据交互

2. 子组件功能合并

(Firstly, the data is not synchroniz. Secondly, I don't know how to put comment.js and posts.js into index.js and export it.)

---

用curl测试，也可以使用postman这个app来进行测试
