<template>
  <div class="terms-of-service">
    <div class="terms-of-service-title">STool服务条款</div>
    <div class="other">
      感谢您使用 STool！很高兴您在这里. 在访问或使用 STool 之前, 请仔细阅读本服务条款协议. 由于这是我们与用户之间的重要合同, 因此我们试图使其尽可能清晰. 为方便起见, 我们在简短的非约束性摘要中介绍了这些条款, 并附有完整的法律条款.
    </div>

  </div>
</template>

<script>
  import http from '@/http';

  /**
   * 加载动画组件
   */ 
  export default {
    name: 'TermsOfService',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        nickname: ''
      }
    },
    created() {
      
    }
  }
</script>

<style scoped>
  .terms-of-service-title {
    font-size: 30px;
    font-weight: 500;
  }

  .other {
    width: 70%;
    min-width: 700px;
    margin: 0 auto;
    padding-top: 10px;
    text-align: left;
    border-top: 1px #e1e4e8 solid !important;
  }

</style>

