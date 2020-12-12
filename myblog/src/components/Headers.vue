<template>
  <div id="header">
    <header>

      <div class="nav">
        <router-link to="/home" id="menu_btn" class="target menu_btn">
          <i class="iconfont">&#xe632;</i>
          <span>主页</span>
        </router-link>

        <form autocomplete="false" class="search-form">
          <input class="searchW" type="text" v-model="search" placeholder="请输入搜索内容" />
          <input class="searchB" type="submit" value="..  .." />

<!--          用css画的猫，用的是input_cat.css这个文件-->
          <div class="search_cat">
            <div class="mao_box">
              <div class="mao">
                <div class="erduo">
                  <div></div>
                  <div></div>
                </div>
                <div class="yanjing">
                  <div>
                    <div class="yanquan">
                      <div></div>
                    </div>
                    <div class="yanquan_hedding"></div>
                    <div class="hong"></div>
                  </div>
                  <div class="yan_right">
                    <div class="yanquan">
                      <div></div>
                    </div>
                    <div class="yanquan_hedding"></div>
                    <div class="hong"></div>
                  </div>
                  <div style="clear:both"></div>
                </div>
                <div class="bizi">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="zuiba_box">
                  <div class="zuiba">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <span class="iconfont" style="z-index: 999;float: left;margin-left: 100px;margin-top: -40px; font-size: 45px;">&#xe621;</span>
          <span class="iconfont" style="z-index: 999;float: left;margin-left: 450px;margin-top: -43px;">&#xe605;</span>
        </form>
      </div>
    </header>


  </div>
</template>

<script>
    export default {
        name: "Headers",
      data(){
         return{
           search:'',
         }
      },
      methods: {
        searchSomething(){
          console.log('searching...')
        }
      }
    }
</script>

<style scoped>
  a {
    color: #000;
  }

  .search-form {
    width: 33%;
  }
</style>
