<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft">
      <template #left> <van-icon name="arrow-left" /> </template>
    </van-nav-bar>
    <van-form @submit="login" class="from">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <div class="registe">
      <a href="#/registe">还没有账号，去注册~</a>
    </div>
  </div>
</template>
<script>
import login from '@/api/user'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  mounted() {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async login() {
      const res = await login(this.username, this.password)
      console.dir(res)
    }
  }
}
</script>
<style scoped lang="less">
.van-nav-bar {
  background-color: #21b97a;
  height: 45px;
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 18px;
  }
  :deep(.van-icon) {
    color: #fff;
    font-size: 16px;
  }
}
.from {
  .van-button {
    background-color: #21b97a;
    width: 345px;
    height: 50px;
    font-size: 18px;
  }
  .van-cell {
    margin: 15px;
    width: 345px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
  }
  .van-field__control {
    font-size: 17px;
  }
}
.registe {
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-top: 25px;
}
</style>
