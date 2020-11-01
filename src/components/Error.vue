<template>
  <div class="loading">
    <div class="loading-body">
      <div id="loading-text">ERROR</div>
      <div id="error-message">{{`用户未登录`}}</div>
    </div>
  </div>
</template>

<script>
  import http from '@/http';

  /**
   * 加载动画组件
   */ 
  export default {
    name: 'Error',
    data() {
      return {
        
      }
    },
    created() {
      
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    opacity: 0.8;
  }

  .loading > .loading-body {
    width: 200px;
    border-radius: 10px;
    height: 80px;
    margin: 0 auto;
    padding: 5px 0px;
    font-size: 22px;
    font-weight: bolder;
    color: #fff;
    background-color: #d80c0c;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #loading-text {
    font-size: 25px;
    font-weight: bolder;
  }

  #error-message {
    margin-top: 20px;
    font-size: 15px;
  }
</style>
