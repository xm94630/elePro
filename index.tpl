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

    <div id="app3">
      <pig class="myBoxStyle"></pig>
    </div>

    <div id="app4">
      <pig2 class="myBoxStyle">
        <div>小猪猪组件2</div>
        <div>我是slot，最后还会作用到pig2中去的哦</div>
      </pig2>
    </div>

    <div id="app5">
      <pig3 class="myBoxStyle">
        <div>我是slot中存在的</div>
      </pig3>
    </div>

    <div id="app6">
      <pig4 class="myBoxStyle">
        <div>{{name}}</div>
      </pig4>
    </div>

    <div id="app7">
      <pig5 class="myBoxStyle">
        <p>{{name}}</p>
        <template slot="lala" scope="xixi">
          <div>{{xixi.name}}</div>
        </template>
      </pig5>
    </div>

    <div id="app8" class="myBoxStyle3">
      {{name}}
      <child class="myBoxStyle">
          <p>哟哟，{{name}}</p>
          <template slot="xxx" scope="props">
            <p >我猜猜是，{{props.message}}</p>
          </template>
      </child>
    </div>

    <div id="app9">
      <pig6 class="myBoxStyle">
        <p>{{name}}</p>
        <template slot="lala" scope="xixi">
          <div>{{xixi.myName}}</div>
        </template>
      </pig6>
    </div>





    <!-- built files will be auto injected -->




    <!-- 我是script中的模板  -->
    <!-- 之前几次渲染不知什么问题，总是有问题，现在也没改什么就好了  -->
    <!-- 特此记录下  -->
    <!-- 另外，这个模板只适合放在这里，如果放在vue文件中是不行的，这个要注意  -->
    <script type="text/x-template" id="haha">
      <div @click="alertBox">
        我的模板是在 script 便签中的哦(点击看看吧)
      </div>
    </script>


  </body>

</html>

