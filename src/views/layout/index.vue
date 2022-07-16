<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" class="footer" route>
      <van-tabbar-item to="/ ">
        <template #icon>
          <span class="iconfont icon-zufang"></span>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/search">
        <template #icon>
          <span class="iconfont icon-chazhao"></span>
        </template>
        找房
      </van-tabbar-item>
      <van-tabbar-item to="/information">
        <template #icon>
          <span class="iconfont icon-zixun"></span>
        </template>
        资讯
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <template #icon>
          <span class="iconfont icon-geren"></span>
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang="less">
.footer {
  .iconfont {
    font-size: 22px;
  }
}
</style>
