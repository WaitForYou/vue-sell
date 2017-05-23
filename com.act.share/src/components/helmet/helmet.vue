<template>
  <div class="helmet">
    <div ref="js-mask-wraper" class="mask-wraper">
        <div ref="wicket" class="cover-bg" :style="{backgroundImage:'url(' + this.defaultUrl +  this.actDetail.activityImg +')'}"></div>
        <div ref="mover" class="act-msg" style="background-color:transparent;">
            <div ref="vote-title" class="vote-title">{{actDetail.activityName}}</div>
            <div red="vote-detail" class="vote-group">{{actDetail.groupName}}</div>     
        </div>
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
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.helmet
    .mask-wraper
        height: 200px
        width: 100%
        background-position: center top
        .act-msg
            height: 200px
            width: 100%
            position: absolute
            left: 0
            top: 0
            background-color: transparent
            .vote-title
                position: absolute
                bottom: 54px
                left: 15px
                text-align: left
                color: #fff
                font-size:24px
                line-height:32px
                text-shadow:0 2px 4px rgba(0,0,0,0.40)
            .vote-group
                width: 100%
                height: 50px !important
                line-height: 25px
                position: absolute
                top: 150px
                left: 0px
                color: #fff
                font-size: 1.2rem
                text-indent: 16px
                text-align: left
                border-radius: 0px
                line-height: 50px
                background-color: rgba(0, 0, 0, .4)
                padding: 0
    .cover-bg
        height: 100%
        background-repeat: no-repeat
        background-size: 100%
</style>
