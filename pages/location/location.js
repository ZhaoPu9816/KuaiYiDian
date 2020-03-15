//Page Object
Page({
    data: {
        storeInfo:[{
            avatar:'../../assets/imgs/location/head.jpeg',
            storeName:'店铺名称',
            address:'贵州省，毕节市，七星关区',
            storeKeeper:'店主名称',
            distance:'距离100米'
        },{
            avatar: '../../assets/imgs/location/head.jpeg',
            storeName: '店铺名称',
            address: '贵州省，毕节市，七星关区',
            storeKeeper: '店主名称',
            distance: '距离200米'
        },{
            avatar: '../../assets/imgs/location/head.jpeg',
            storeName: '店铺名称',
            address: '贵州省，毕节市，七星关区',
            storeKeeper: '店主名称',
            distance: '距离300米'
        },{
            avatar: '../../assets/imgs/location/head.jpeg',
            storeName: '店铺名称',
            address: '贵州省，毕节市，七星关区',
            storeKeeper: '店主名称',
            distance: '距离400米'
        }],
        storeStaff:{
          avatar: '../../assets/imgs/location/head.jpeg',
          storeName: '店铺名称',
          address: '贵州省，毕节市，七星关区',
          storeKeeper: '店主名称',
          distance: '距离100米'
        }
    },
    //options(Object)
    onLoad: function(options){
       
    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    },
    //search
    goSearch(e){
        var app = getApp();
        app.globalData.searchLoaction = true;
        wx.navigateTo({
            url: "/pages/search/index"
        });
    },
    goToStore(e){
        var app = getApp();        
        var index=e.currentTarget.dataset.index;
        app.globalData.storeNearKeeper =  this.data.storeInfo[index];
        wx.switchTab({
               url: "/pages/index/index"
        });
    },
    goToleagueStore(e){
        var app = getApp();        
        app.globalData.storeNearKeeper =  this.data.storeStaff;
        wx.switchTab({
               url: "/pages/index/index"
        });
    }
});