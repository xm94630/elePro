import Vue from 'vue';

/*
 * caseA01
 * 这个是自己定义的非常简单的一个组件
 */
Vue.component('titleBar', {
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
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

/*
 * caseA02
 * 在上例的基础上变化
 */
Vue.component('logoBox', {
  render: function(createElement) {
    return createElement(
      'div',
      this.$slots.default
    );
  },
  props: {
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

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});
