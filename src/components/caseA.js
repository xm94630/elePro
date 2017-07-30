import Vue from 'vue';

/* ==========================================================================
 *  第一种方法定义组件 render function
 *  优点 模板更加接近于编译器，充分发挥js的威力
 *  缺点 抽象层度高、啰嗦
 * ======================================================================== */

/* ********************************************************** *
 * 自定义组件
 * 这里定义的组件都是纯js写的
 *
 * 关于组件的定义，我现在还有点乱乱的，主要是定义的形式有好几种的。
 * 下面的所有的案例中，都是用 Vue.component 来定义的
 * 相当于可以理解成，对vue对象的扩展，所以在之后使用的时候，只要引入此文件
 * 就可以在html中使用这里定义的组件了！！
 * ********************************************************** */

/*
 * caseA01
 * 这个是自己定义的非常简单的一个组件
 */
Vue.component('titleBar', {
  //这个参数时候用来捕获组件的属性！
  //注意组件的属性不同于dom元素的属性，它在渲染之后就会消失。
  //另外组件的属性，主要用来做组件的灵活配置的！比如这里就是这样子的用法！！
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function(createElement) {
    // console.log('===>');
    // console.log(this.$slots.default);
    return createElement(
      'h' + this.level, // 标签名字
      this.$slots.default // 子节点的数组
      // 如果组件中有多个元素的话，就可以这样子来选择我需要自己子集内容，只要确保外层是个数据就好了
      // 如果指定的子元素不存在的话，那么这个不存在的子元素也不会被渲染
      // [this.$slots.default[1]] 
    );
  }
});

/*
 * caseA02
 * 在上例的基础上变化(简化版本)
 */
Vue.component('logoBox', {
  render: function(createElement) {
    return createElement(
      'div',
      this.$slots.default
    );
  }
});

/*
 * caseA03
 * 这个是官网的一个例子
 * 注意这里使用 createElement 中的第二个参数不再是 $slots.default 
 * 而是自己创建的虚拟元素~
 * 说白了就是，createElement第二个参数就需要传入虚拟dom对象而已，至于你是使用 $slots.default 中获取，还是自己创建都是可以的。
 */
var getChildrenTextContent = function(children) {

  // console.log('==>');
  // console.log(children);

  return children.map(function(node) {
    return node.children
      ? getChildrenTextContent(node.children) // 这里还是使用了递归，非常的灵活
      : node.text;
  }).join('');
};

Vue.component('anchored-heading', {
  render: function(createElement) {

    // console.log(getChildrenTextContent(this.$slots.default));

    // 这里的操作主要是为了生成 id 值
    // 规则是把组件中的内容、做一系列的转换
    // 比如“Hi,xm-94630-” 就被转成了“hi-xm-94630”
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-') // 除了数字、字母的都会被“-”替换
      .replace(/(^\-|\-$)/g, ''); // 把开头和结尾的“-”符号去了

    // 新建一个虚拟节点
    // 需要注意的是，这个不能重复使用。比如 [node、node]
    var node = createElement('a', {
      attrs: {
        name: headingId,
        href: '#' + headingId
      }
    }, this.$slots.default);

    return createElement(
      'h' + this.level,
      [node]
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

/*
 * caseA04
 * 这里模拟了 类似于模板中的 v-model 这样子的实现
 * 主要依靠domProps、on这两个属性
 */
Vue.component('inputBox', {
  render: function(createElement) {
    var self = this;
    return createElement('input', {
      domProps: {
        value: self.value
      },
      on: {
        input: function(event) {
          self.value = event.target.value;
          self.$emit('input', event.target.value);
        }
      }
    });
  }
});



/* ********************************************************** *
 * slot的作用主要是来处理，一个组件下还包含子节点内容的情况，最后渲染的时候
 * 子内容放在什么地方，如何显示，就是slot要处理的内容
 * ********************************************************** */

/*
 * caseA05 单个slot使用
 * domProps的使用
 */
Vue.component('myTestA', {
  render:function(createElement){  
    var he=createElement('div',{domProps:{innerHTML:'我是动态创建的哦'}});  
    return createElement('div',[he,this.$slots.default])  
  }
})

/*
 * caseA06 多个slot使用
 */
Vue.component('myTestB', {
  render:function(createElement){  
    var he=createElement('div',{domProps:{innerHTML:'我是动态创建的哦'}});  
    return createElement('div',[he,this.$slots.name1,this.$slots.name2])  
  }  
})

/* ********************************************************** *
 * 子模板
 * 这里个是在上面的基础上，增加了 scope 的概念
 * 我们发现，这里要使用 $scopedSlots ，在模板中都会使用到template：
 * <myTestC>
 *   <template scope="props">  
 *     <div>{{props.text}}</div>  
 *   </template>
 * </myTestC>
 * 这样子也相当于可以有 template 的嵌套，然后，还可以有自己的作用域，在渲染值的时候可以互不影响
 * ********************************************************** */

/*
 * caseA07 子模板
 */
Vue.component('myTestC', {
  render:function(createElement){  
    var he=createElement('div',{domProps:{innerHTML:'我是动态创建的哦'}});  
    return createElement('div',[he,this.$scopedSlots.default({  
        text:'我是子级模板渲染得到的'  
    })])  
  } 
})

/*
 * caseA08 子模板
 */
Vue.component('myTestD', {
  render: function (createElement) {
    var children = this.$scopedSlots.lala({vvv:"我是子级模板渲染得到的"})
    return createElement('div', (this.$slots.xxx).concat(children) )
  }
})

/*
 * caseA09 子模板
 */
Vue.component('myTestE', {
  render:function(createElement){  
    var he=createElement('div',{domProps:{innerHTML:'我是动态创建的哦'}});  
    return createElement('div',[he,
      this.$scopedSlots.name1({text:'我是子级模板1 渲染得到的'}),
      this.$scopedSlots.name2({text:'我是子级模板2 渲染得到的'}),
    ])  
  }
})


/*
 * caseA10 createElement 函数 第二个参数的详细配置
 */
Vue.component('myTestF', {
  render: function(createElement) {

    //createElement函数 创建元素实例
    var ele = createElement('div', {
      //追加在实例上的class属性
      class: {
        foo: true,  //使用foo类
        bar: false, //不适用bar类
      },
      //追加在实例上的样式属性
      style: {
        border:'solid 1px #ccc',
        padding:'10px',
        margin:'10px',
      },
      //追加在实例上的属性
      attrs: {
        id: 'jy', //特殊的属性-id
        xm: 94630, //这个是自己随意设定的属性
        //style: 'padding:20px', //当上面已经有 style 的配置，这里为无效
        //class: 'xx',           //当上面已经有 class 的配置，这里为无效
      },
      //暂时还没有发现啥用...
      //补充，这个应该是组件的数据，因为组件在渲染之后，最外层就没了。所以我就看不到
      //这个可以用来作为，组件的配置来使用！！
      props: {
        myProp: 'gogogo',
      },
      //实例的内容部分
      domProps: {
        innerHTML: '<span>我是被追加的</span>'
      },
      //这个目前还不十分清楚
      //但是我估计就是实例内部的一个模板的定义吧
      //具体如何用呢？
      scopedSlots: {
        default: props => createElement('span', props.text)
      }
    });

    //返回总节点元素
    return ele;
  }
});


/*
 * caseA11 综合练习
 */
Vue.component('myTestG', {
  data() {
    return {
      checked: false,
      title: '我是一个可爱的按钮'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  render(createElement) {
    return createElement(
      'div', {
        attrs: {
          'class': 'myBoxStyle'
        },
        on: {
          click: this.check
        }
      }, [
        createElement(
          'div', {
            'domProps': {
              innerHTML: this.checked
            },
          }
        ),
        createElement(
          'div', {
            attrs: {
              'class': 'title'
            }
          }, [this.title]
        )
      ]
    );
  }
});