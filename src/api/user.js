import request from '@/utils/request'

const login = (username, password) =>
  request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })

export default login
