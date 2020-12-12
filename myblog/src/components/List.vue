<template>
  <div class="c-list">
    <router-link class="post-content" v-for="item in articleList" :key="item.id">
      <img class="picture" :src="item.image"/>
      <div>

      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "List",
      data(){
          return{
            articleList:[],
          }
      }
    }
</script>

<style scoped>

</style>
