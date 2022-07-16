<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft">
      <template #left> <van-icon name="arrow-left" /> </template>
    </van-nav-bar>
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="UsernameRule"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="PasswordRule"
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
import { PasswordRule, UsernameRule } from './rule'
export default {
  data() {
    return {
      username: '',
      password: '',
      PasswordRule,
      UsernameRule
    }
  },
  mounted() {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async login() {
      this.$toast.loading({
        message: '....加载中',
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        this.$store.commit('SetToken', res.data.data)
        this.$router.push('/my')
        this.$toast.success('登录成功')
      } catch (error) {
        this.$toast.fail('登录失败')
      }
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
.van-form {
  .van-button {
    background-color: #21b97a;
    width: 345px;
    height: 50px;
    font-size: 18px;
  }
  .van-cell {
    margin: 15px;
    width: 345px;
    min-height: 34px;
    line-height: 34px;
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
