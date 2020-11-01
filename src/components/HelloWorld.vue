<template>
  <div class="hello">
    <div class="code" v-for="(item,index) in list" :index="index">
      <div class="code-header">
        <div class="btn-group">
          <div style="background-color: red;"></div>
          <div style="background-color: yellow;"></div>
          <div style="background-color: green;"></div>
        </div>
      </div>
      <div class="filename">{{item.fileName}}.{{item.codeType.toLowerCase()}}</div>
      <div class="code-body">
         <pre v-highlightjs>
            <code :class="item.codeType.toLowerCase()">
              {{item.body}}
            </code>
         </pre>
      </div>
    </div>
  </div>
</template>

<script>

  import http from '@/http';

  const serverUrl = http.server;

  export default {
    name: 'HelloWorld',
    data() {
      return {
        // 存储数据文件的数组
        list: [

        ]
      }
    },
    created() {
      
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: Menlo, Dejavu Sans Mono, 苹方, 微软雅黑;
  }

  body {
    background-color: rgb(232, 230, 240);
  }

  .hello {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .code {
    position: relative;
    width: 80%;
    margin: 10px auto;
    border-radius: 10px 10px 0px 0px;
    background-color: #282c34;
  }

  .code-header {
    height: 30px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    background-color: #323232;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .code-header > .btn-group {
    width: 70px;
    padding-left: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .code-header > .btn-group > div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .code > .filename {
    border-top: 1px solid #444242;
    padding: 0px 0px;
    text-align: left;
    font-size: 17px;
    color: #fff;
    padding-left: 10px;
  }

  .code > .code-body {
    text-align: left;
    padding: 0px 10px 10px 10px;
    font-size: 15px;
    border: 2px solid #323232;
    border-top: none;
    box-shadow: border-box;
  }

  .xml {
    background-color: #f9f9f9;
    color: #323232;
  }

  .yaml {
    background-color: #f9f9f9;
    color: #323232;
  }

  .java {
    background-color: #f9f9f9;
    color: #323232;
  }

</style>
