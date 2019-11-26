// 用户js文件
let user = {
  // 此接口有两个参数，所以需要设置参数接受
  // 登录
  login: function(userName, password, callback) {
    $.post(publicUrl.login_url, {
        user_name: userName,
        password: password
      },
      res => callback(res)
    )
  },
  // 退出
  logout: callback => $.post(publicUrl.logout_url, res => callback(res)),
  // 获取用户信息
  getInfo: callback => $.get(publicUrl.loginfo_url, res => callback(res)),
  // 修改页面获取管理员信息
  user_get: callback => $.get(publicUrl.user_get, res => callback(res)),
  // 修改用户信息
  editInfo: function(fd, callback) {
    $.ajax({
      url: publicUrl.user_edit,
      type: 'post',
      data: fd,
      processData: false, // 不要让jquery自动去转换data
      contentType: false, // 不要自动给content-type设置值。因为formData传参会有自己的请求头 multipart/form-data
      success: res => callback(res)
    })
  },
}