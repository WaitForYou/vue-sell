<template>
  <div class="detail">
    <helmet  v-show="hasNotLogined" :actDetail="actDetail" :defaultUrl="url"></helmet>
    <basicmsg  v-show="hasNotLogined" :actDetail="actDetail" :defaultUrl="url"></basicmsg>
      <div class="signUpAct" v-show="!hasNotLogined">
    dfafdsafsdf
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import helmet from 'components/helmet/helmet';
import basicmsg from 'components/basicmsg/basicmsg';
import {urlParse} from 'common/js/util.js';

const URL = 'http://dever.juju.im/jsm/utils/downloadImg/';

export default {
    data() {
      return {
        actDetail: {},
        url: URL,
        hasNotLogined: true,
        code: ''
      };
    },
    created() {
        const urlJson = urlParse();
        this.hasNotLogined = !urlJson.hasOwnProperty('code');
        this.code = (!this.hasNotLogined) ? urlJson.code : '';

        this.$http.get('http://dever.juju.im/jsf/activity/getActivityDetail', {params: {userId: this.$route.params.userId || 10000, activityId: this.$route.params.id}}).then(response => {
            response.json();
            response = response.body;
            if (response.code === '1') {
               this.actDetail = response.data;
               console.log(JSON.parse(JSON.stringify(this.actDetail)));
            }
        });
    },
    components: {
        helmet,
        basicmsg
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
