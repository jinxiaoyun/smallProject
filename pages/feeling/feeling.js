// pages/feeling/feeling.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fleelingWay:0, // 0 输入 1 语音
    count:5 // 倒计时
  },
  switchWay:function(){
    this.setData({
      fleelingWay: this.data.fleelingWay == 0 ? 1 : 0
    })
  },
  takePhoto:function(){
    wx.chooseImage({
      count:1,
      success:function(res){
        console.log(res)
      }
    })
  },
  countDown:function(){
    let _this = this,count = 5
    _this.inter = setInterval(()=>{
      _this.setData({ count: count --})
      if (count < 0){
        _this.setData({count:5})
        _this.recorderEnd() //停止录音
        clearInterval(_this.inter)
      }
    },1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.recorderManager = wx.getRecorderManager()
    this.recorderManager.onStart(() => {
      console.log('recorder start')
    })
    this.recorderManager.onPause(() => {
      console.log('recorder pause')
    })
    this.recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { tempFilePath } = res
    })
    this.recorderManager.onFrameRecorded((res) => {
      const { frameBuffer } = res
      console.log('frameBuffer.byteLength', frameBuffer.byteLength)
    })
  },
  recorderStart:function(){
    const options = {
      duration: 5000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
    }
    this.recorderManager.start(options)
    this.countDown()
  }, 
  recorderEnd:function(){
    this.recorderManager.stop()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})