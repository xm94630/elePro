<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>elePro</title>
  </head>
  <body>

    <div id="app"></div>
    <div id="app2"></div>
    <!-- built files will be auto injected -->

    <!-- 我是script中的模板  -->
    <!-- 之前几次渲染不知什么问题，总是有问题，现在也没改什么就好了  -->
    <!-- 特此记录下  -->
    <!-- 另外，这个模板只适合放在这里，如果放在vue文件中是不行的，这个要注意  -->
    <script type="text/x-template" id="haha">
      <div @click="alertBox">
        我的模板是在 script 便签中的哦(点击看看吧)22
      </div>
    </script>


  </body>
  
</html>

