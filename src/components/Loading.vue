<template>
  <div class="loading">
    <div class="loading-body">
      <div id="loading-animal"></div>
      <div id="loading-text">{{'.'.repeat(loading_text_length)}}</div>
    </div>
  </div>
</template>

<script>
  import http from '@/http';

  /**
   * 加载动画组件
   */ 
  export default {
    name: 'Loading',
    data() {
      return {
         loading_text_length: 1,
         max_text_length: 5
      }
    },
    created() {
      
    },
    mounted() {
      let _that = this;
      setInterval(function() {
        _that.loading_text_length = ++_that.loading_text_length % _that.max_text_length;
      }, 500);
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
    opacity: 0.5;
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
    background-color: #323232;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #loading-animal {
    margin-top: 10px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-bottom-color: #323232;
    -webkit-animation: loadingRotate 0.75s linear infinite;
    animation: loadingRotate 0.75s linear infinite;
  }

  #loading-text {
    font-size: 25px;
    font-weight: bolder;
  }

  @-webkit-keyframes loadingRotate {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes loadingRotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
