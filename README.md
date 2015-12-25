# feFrm 前端框架 基于koa。
# 需求nodejs 5.0+

#运行server
  1.cd 项目根目录
  
  2.npm instal 
  
  3.npm install -g less
  
  4.npm start
  
  5.浏览器输入： http://localhost:3003/user
  
  
  项目结构介绍：
  jsserver   --->  文件资源服务器（js，css，images）
  
      -dev   --->  开发版本资源
      
        -css ---> less 自动编译生成
        
        -js 
        
          -component  ---> 公共组件
          
          -page       ---> 页面业务
          
          -lib        ---> 类库
          
          -tools      ---> 公共帮助函数
          
        -less
        
        -images
        
        
      -dist  --->   打包后资源目录
      
  web           --->  web 服务器。处理请求，路由到controller，拉取数据，渲染页面
    
    -router     ---> 路由
    
    -template   ---> 模板碎片
    
    -view       ---> 页面骨架
    
    -app.js     ---> 程序入口
    
    -fetch.js   ---> 取数据封装的函数
  
  logs
    -jsServer  ---> js服务器日志
    
    -web       ---> web服务器日志
    
    -less     ---> less自动编译日志
  pid
    jsserver，web process id
    
    
  
  
