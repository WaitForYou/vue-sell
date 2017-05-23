<template>
  <div class="basic-msg">
    <div class="single-msg">
        <div class="msg-left">
            <img class="user-img" :src="this.defaultUrl +  this.actDetail.userImg" />
        </div>
        <div class="msg-right">
            <p class="sponsor-tab sponsor-tab-1">
                <span class="text">发起人</span>
                <span class="content">{{actDetail.userName}}</span>
            </p>
            <p class="sponsor-tab sponsor-tab-2">
                <span class="text">发起时间</span>
                <span class="content">{{actDetail.updateTime}}</span>
            </p>
        </div>
    </div>
    <div class="single-msg">
        <div class="msg-left">
            <i class="msg-icon  cost-icon"></i>
        </div>
        <div class="msg-right">
            <p class="sponsor-tab">
                <span class="cost" v-show="actDetail.activityPrice">{{actDetail.activityPrice}}元/次</span>
                <span class="cost" v-show="!actDetail.activityPrice">免费</span>
            </p>
        </div>
    </div>
    <div class="single-msg">
        <div class="msg-left">
            <i class="msg-icon  time-icon"></i>
        </div>
        <div class="msg-right">
            <p class="sponsor-tab sponsor-tab-3">
                <span class="text">开始</span>
                <span class="content">{{actDetail.beginTime}}</span>
            </p>
            <p class="sponsor-tab sponsor-tab-2">
                <span class="text">结束</span>
                <span class="content">{{actDetail.endTime}}</span>
            </p>
        </div>
    </div>
    <div class="single-msg">
        <div class="msg-left">
            <i class="msg-icon  person-icon"></i>
        </div>
        <div class="msg-right">

        </div>
    </div>    
    <div class="single-msg">
        <div class="msg-left">
            <i class="msg-icon  addr-icon"></i>
        </div>
        <div class="msg-right">
            <p class="sponsor-tab sponsor-tab-4">
                <span>{{actDetail.address}}</span>
                <span>{{actDetail.addressName}}adf</span>
            </p>
        </div>
    </div>
    <div class="single-msg">
        <button @click="joinActFn">加入</button><button>取消</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        actDetail: {
            type: Object
        },
        defaultUrl: {
            type: String
        }
    },
    methods: {
        joinActFn() {
            const applyCode = 'http://open.weixin.qq.com/connect/oauth2/authorize?appid=wx67419bc6cf9c134f&redirect_uri=' + encodeURIComponent(location.href) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
            console.log(applyCode);
            window.location.href = applyCode;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.basic-msg
    .single-msg
        display: flex
        width: 100%
        height: 50px
        line-height: 50px
        .msg-left
            width: 70px
            text-align: center
            .user-img
                display: inline-block
                width: 30px
                height: 30px
                margin-top: 10px
                border-radius: 60%
            .msg-icon
                display: inline-block
                width: 40px
                height: 40px
            .cost-icon
                background: url('../../../static/img/money_mark.png') no-repeat center
                background-size: 50%
            .time-icon
                background: url('../../../static/img/icon-time.png') no-repeat center
                background-size: 50%  
            .person-icon
                background: url('../../../static/img/icon-actor.png') no-repeat center
                background-size: 50%  
            .addr-icon
                background: url('../../../static/img/icon-addr.png') no-repeat center
                background-size: 50% 
        .msg-right
            flex: 1
            display: flex
            padding-right: 15px
            border-bottom: 1px solid #c8c8c8
            .sponsor-tab
                .text
                    display: inline-block
                    float: left
                    width: 100%
                    height: 14px
                    line-height: 14px
                    margin: 8px auto 0 0
                    padding-bottom: 4px
                    font-size: 12px
                    color: #9b9b9b
                .content
                    display: inline-block
                    float: left
                    height: 16px
                    line-height: 16px
                    width: 100%
                    font-size: 15px
                    color: #1c1c1c
                .cost
                    color: #f6a623
                    font-size: 24px
            .sponsor-tab-1
                width: 40%
                .text
                    border-right: 1px solid #e0e0e0
                .content
                    border-right: 1px solid #e0e0e0
            .sponsor-tab-2.sponsor-tab
                width: 60%
                .text
                    text-align: right
                .content
                    text-align: right
            .sponsor-tab-3
                width: 45%  
                background: url('../../../static/img/time.png') no-repeat right


</style>
