//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[0,1,2,3,4,5,6],
    selectedTab:0,
    isModalShow:false,
    isModalShow1:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scrolltolower:function(ev){console.log(ev)},
  onLoad: function () {
    this.innerAudioContext = wx.createInnerAudioContext()
    //innerAudioContext.autoplay = true
    this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    this.innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    this.innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  tabTap:function(event){
    let id = event.currentTarget.dataset.tabid
    this.setData({
      selectedTab:+id,
      isModalShow:true
    })
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
  },
  toggleModal:function(){
    this.setData({
      isModalShow: false
    })
  },
  palyAudio:function(){
    // console.log('googogog')
    // this.innerAudioContext.play()
    wx.navigateTo({
      url: "../feeling/feeling"
      // url: "../partake/partake"
      //url: "../reward/reward"
    })
  },
  // onPullDownRefresh:function(){
  //   //console.log('用户正在下拉操作')
  // }
})
