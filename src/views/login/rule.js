export const UsernameRule = [
  { required: true, message: '请输入账号' },
  { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '请输入正确账号' }
]

export const PasswordRule = [
  { required: true, message: '请输入密码' },
  { pattern: /^[0-9]{6}$/, message: '请输入6位密码' }
]
