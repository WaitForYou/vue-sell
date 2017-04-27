<template>
  <div class="detail">
    <helmet></helmet>
  </div>
</template>

<script type="text/ecmascript-6">
import helmet from 'components/helmet/helmet';

export default {
    data() {
        return {
            detail: {}
        };
    },
    created() {
        this.$http.get('/act/detail').then((response) => {
            response = response.body;
            if(response.code == 1) {

            }
        });
    },
    components: {
        helmet
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
