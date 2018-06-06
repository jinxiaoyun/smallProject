Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
    toggle:function(){
      this.triggerEvent('togglemodal',{})
    },
    stopPop:function(){
      // 空函数，只为阻止事件冒泡，点击内容区英文也关闭弹窗了
    }
  }
})