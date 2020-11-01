<template>
  <div class="main"> 
    <database-group-list/>
    <div class="database-list">  
      <div class="wrap">
        <div class="scroll">
          <div class="database" 
            @click="changeSelected(index)" 
            @mouseover="changeIn(index)" 
            @mouseout="changeIn(-1)" 
            @contextmenu.prevent="showDatabase" 
            v-for="(item,index) in databaseList" 
            :style="index == selected ? {border:'2px solid #d4d4d4', backgroundColor: '#eee'} : {border:'2px solid #fff'}">

            <div class="img" :title="item.databaseId" >
              <img v-if="item.productType == 0" src="../assets/mysql.png"/>
              <img v-if="item.productType == 1" src="../assets/oracle.png"/>
            </div>

            <div class="title">{{item.databaseName}}</div>
          </div>

        </div>
      </div>
    </div>

    <!-- 数据库详情 -->
    <div class="database-detail" :style="{left:`${x}px`, top:`${y}px`}">
        <div class="column" >
          <div class="key">物理编号</div>
          <div class="speractor">:</div>
          <!-- #6A8759 -->
          <div class="value string">{{selectedDatabase.databaseId}}</div>
        </div>
        <div class="column" >
          <div class="key">仓库类型</div>
          <div class="speractor">:</div>
          <!-- #9876AA -->
          <div class="value keyword">{{selectedDatabase.productName}}</div>
        </div>
        <div class="column" >
          <div class="key">链接地址</div>
          <div class="speractor">:</div>
          <!-- #E8BF6A --> 
          <div class="value annotation" :title="selectedDatabase.url">{{selectedDatabase.url.length > 45 ? selectedDatabase.url.substr(0, 45) + '...' : selectedDatabase.url}} </div>
        </div>
        <div class="column" >
          <div class="key">用户名称</div>
          <div class="speractor">:</div> 
          <div class="value string" :title="selectedDatabase.username">{{selectedDatabase.username}}</div>
        </div>
        <div class="column" >
          <div class="key">安全凭证</div>
          <div class="speractor">:</div>
          <!-- #FF0000 -->  
          <div class="value security" :title="selectedDatabase.securityPassword">{{selectedDatabase.securityPassword}}</div>
        </div>
        <div class="column" >
          <div class="key">选择仓库</div>
          <div class="speractor">:</div> 
          <div class="value annotation" :title="selectedDatabase.databaseName">{{selectedDatabase.databaseName}}</div>
        </div>
        <div class="column" >
          <div class="key">创建时间</div>
          <div class="speractor">:</div> 
          <div class="value number">{{selectedDatabase.createTime}}</div>
        </div>
        <div class="column" >
          <div class="key">更新时间</div>
          <div class="speractor">:</div> 
          <div class="value number">{{selectedDatabase.updateTime}}</div>
        </div>
        <div class="column" >
          <div class="key">数据版本</div>
          <div class="speractor">:</div>
          <div class="value number">{{selectedDatabase.version}}</div>
        </div>
    </div>
    

  </div>
</template>

<script>
  import http from '@/http';
  import DatabaseGroupList from '@/components/database_group/DatabaseGroupList';

  /**
   * 加载动画组件
   */ 
  export default {
    name: 'Main',
    data() {
      return {
        selected: 3,

        x: 0,
        y: 0,

        // 通用此索引来控制右键显示的数据
        inDatabaseIndex: -1,
        
        // 当前右键点击显示的数据
        currentDatabase: {

        },
        databaseList: [
          {
            databaseId: '0bfb7a2c-0e5c-4ac0-9f7a-16ec117b1ae8',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db4?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db4',
            securityPassword: 'c4ac6ce9c048074d4ab2eeb3aa677c06',
            databaseName: 'db4',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'a0638ddb-7279-43a8-af2d-92f3ff66a90c',
            productType: 1,
            url: 'jdbc:mysql://47.112.125.251:3369/db3?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db3',
            securityPassword: 'af1d99efc3cac8b4fb6b6d1d91f0ecdd',
            databaseName: 'db3',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'a9228c07-8bdb-49d8-b539-ee941ac4c0ae',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db2?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db2',
            securityPassword: 'f154783efbfa54b611c56230c879783f',
            databaseName: 'db2',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'cf4ac146-0971-442a-b3f3-fe1c9a1769aa',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db1?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db1',
            securityPassword: 'ed6809d13ee0b18c2077f79845743cf0',
            databaseName: 'db1',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: '0bfb7a2c-0e5c-4ac0-9f7a-16ec117b1ae8',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db4?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db4',
            securityPassword: 'c4ac6ce9c048074d4ab2eeb3aa677c06',
            databaseName: 'db4',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'a0638ddb-7279-43a8-af2d-92f3ff66a90c',
            productType: 1,
            url: 'jdbc:mysql://47.112.125.251:3369/db3?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db3',
            securityPassword: 'af1d99efc3cac8b4fb6b6d1d91f0ecdd',
            databaseName: 'db3',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'a9228c07-8bdb-49d8-b539-ee941ac4c0ae',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db2?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db2',
            securityPassword: 'f154783efbfa54b611c56230c879783f',
            databaseName: 'db2',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'cf4ac146-0971-442a-b3f3-fe1c9a1769aa',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db1?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db1',
            securityPassword: 'ed6809d13ee0b18c2077f79845743cf0',
            databaseName: 'db1',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: '0bfb7a2c-0e5c-4ac0-9f7a-16ec117b1ae8',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db4?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db4',
            securityPassword: 'c4ac6ce9c048074d4ab2eeb3aa677c06',
            databaseName: 'db4',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'a0638ddb-7279-43a8-af2d-92f3ff66a90c',
            productType: 1,
            url: 'jdbc:mysql://47.112.125.251:3369/db3?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db3',
            securityPassword: 'af1d99efc3cac8b4fb6b6d1d91f0ecdd',
            databaseName: 'db3',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'a9228c07-8bdb-49d8-b539-ee941ac4c0ae',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db2?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db2',
            securityPassword: 'f154783efbfa54b611c56230c879783f',
            databaseName: 'db2',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          },
          {
            databaseId: 'cf4ac146-0971-442a-b3f3-fe1c9a1769aa',
            productType: 0,
            url: 'jdbc:mysql://47.112.125.251:3369/db1?useUnicode=true&characterEncoding=utf8&useSSL=false',
            username: 'db1',
            securityPassword: 'ed6809d13ee0b18c2077f79845743cf0',
            databaseName: 'db1',
            createTime: 1603804206,
            updateTime: 1603804206,
            version: 1
          }
        ]
      }
    },
    components: {
      DatabaseGroupList
    },
    methods: {
      changeSelected(index) {
        this.selected = index;
      },
      changeIn(index) {
        this.inDatabaseIndex = index;
      },
      showDatabase(event) {
        let {pageX,pageY} = event;
        this.x = pageX;
        this.y = pageY;

      }
    },
    computed: {
      selectedDatabase() {
        let res = this.databaseList[this.selected];
        res.productName = res.productType == 0 ? 'MySQL' : 'ORACLE';
        return res;
      }
    }
  }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-x: hidden;
  }

  .scroll {
    width: 100%;
    white-space: nowrap;
    overflow-y: hidden;
    height: 50px;
    padding-bottom: 100px;
    text-align: left;
  }

  .database-list {
    width: 85%;
    min-width: 800px;
    padding: 5px 10px;
    height: 135px;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1.5px solid #aaa;
  }

  .wrap::-webkit-scrollbar { height: 0 !important;width:0px !important; }

  .database {
    display: inline-block;
    /*border: 1px solid #bbb;*/
    padding: 5px;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    margin: 10px 15px;
  }

  .database > .img {
    width: 90px;
    height: 70px;
  }

  .database > .img > img {
    width: 100%;
    height: 100%;
  }

  .database > .title {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    width: 90px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    color: #1296db;
  }

  .database-detail {
    position: fixed;
    min-width: 350px;
    max-width: 500px;
    background-color: #323232;
    padding: 5px 10px;
    
    text-align: left;
    height: 320px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1.5px solid #aaa;
  }

  .database-detail > .column {
    font-size: 15px;
  }

  .database-detail > .column > .key {
    display: inline-block;
    width: 70px;
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    color: #CC7832;
    font-weight: 500;
  }

  .database-detail > .column > .speractor {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    font-weight: bolder;
    color: #fff;
  }

  .database-detail > .column > .value {
    display: inline-block;
    margin-left: 10px;
    min-width: 300px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    box-sizing: border-box;
    padding-top: 10px;
    height: 25px;
  }

  .string {
    color: #6A8759;
  }

  .keyword {
    color: #9876AA;
    font-weight: bolder;
  }

  .annotation {
    color: #E8BF6A;
  }

  .number {
    color: #6897bb;
  }
</style>

